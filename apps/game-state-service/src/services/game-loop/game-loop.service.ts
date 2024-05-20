import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { Actor,ActorLogic,createActor } from "xstate";
import { Repository } from 'typeorm';
import { GameState } from '../../entities/game-state.entity';

@Injectable()
export class GameLoopService implements OnModuleInit {
    private readonly logger = new Logger(GameLoopService.name);
    private gameLoopActor: Actor<any, any>;

    constructor(
        @Inject('GAME_STATE_SERVICE') private client: ClientProxy,
        @InjectRepository(GameState) private gameStateRepository: Repository<GameState>,
        private httpService: HttpService,
        private configService: ConfigService,
    ) {}

    onModuleInit() {
        this.gameLoopActor = createActor(GameLoopMachine).start();
        this.gameLoopActor.subscribe((state) => {
            this.logger.log(state.value);
            this.client.emit('game-state', state.value);
        });
    }

    async updateGameState() {
        const gameState = await this.gameStateRepository.findOne();
        this.gameLoopActor.send('UPDATE', { gameState });
    }
}