import { Controller, Get, HttpException, Logger } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { assertDefined } from "../utils/assertions";
//GameLoop
import { GameLoopService } from "../services/game-loop/game-loop.service";

@Controller("game-loop")
export class GameLoopController {
  private readonly logger = new Logger(GameLoopController.name);

  constructor(private readonly gameLoopService: GameLoopService) {}

  @Get("start")
  @ApiResponse({ status: 200, description: "Game loop started" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async startGameLoop(): Promise<void> {
    try {
      await this.gameLoopService.startGameLoop();
    } catch (error) {
      this.logger.error(error);
      throw new HttpException("Internal server error", 500);
    }
  }

  @Get("stop")
  @ApiResponse({ status: 200, description: "Game loop stopped" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async stopGameLoop(): Promise<void> {
    try {
      await this.gameLoopService.stopGameLoop();
    } catch (error) {
      this.logger.error(error);
      throw new HttpException("Internal server error", 500);
    }
  }

  @Get("status")
  @ApiResponse({ status: 200, description: "Game loop status" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getGameLoopStatus(): Promise<string> {
    try {
      const status = await this.gameLoopService.getGameLoopStatus();
      assertDefined(status);
      return status;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException("Internal server error", 500);
    }
  }
}

