import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpModule } from "@nestjs/axios";
import { GameLoopService } from "./game-loop.service";
import { GameLoopController } from "../../controllers/game-loop.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
        HttpModule.register({
            timeout: 500,
            maxRedirects: 5
        })
    ],
    providers: [GameLoopService],
    controllers: [GameLoopController],
    exports: [GameLoopService],
})
export class GameLoopModule {};