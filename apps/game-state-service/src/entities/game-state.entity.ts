export class GameState {
    id: number;
    name: string;
    score: number;
    level: number;
    // Add more properties as needed

    constructor(id: number, name: string, score: number, level: number) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.level = level;
    }

    // Add methods and additional logic here

    static createGameStates(): GameState[] {
        const gameStates: GameState[] = [];

        // Add your game states here
        gameStates.push(new GameState(1, "Player 1", 100, 1));
        gameStates.push(new GameState(2, "Player 2", 200, 2));
        gameStates.push(new GameState(3, "Player 3", 300, 3));

        return gameStates;
    }
}

