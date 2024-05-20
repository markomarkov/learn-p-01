import { setup,assign, fromCallback, EventObject, fromPromise ,StateMachine, createMachine } from 'xstate';

// Define the initial state
const initialState = 'idle';

// Define the state machine
export const gameLoopMachine = createMachine({
    id: 'gameLoop',
    initial: initialState,
    context: {},
    states: {
        idle: {},
        running: {},
        paused: {},
        gameOver: {},
    },
});