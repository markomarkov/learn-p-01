import { Logger } from "@nestjs/common";
import { setup, assign, fromCallback, EventObject, fromPromise,StateMachine } from "xstate";
import { gameLoopMachine } from "./game-loop.machine";
import { GameState } from "../../entities/game-state.entity";

export const createGameLoopService = () => {
    const logger = new Logger('GameLoopService');
    const gameLoopService = setup(gameLoopMachine);

    gameLoopService.onTransition((state) => {
        logger.log(state.value);
    });

    gameLoopService.start();

    return gameLoopService;
};

