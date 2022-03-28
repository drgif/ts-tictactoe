import { Map, List } from "immutable";

enum GameState {
    NextPlayer,
    Win,
    Draw,
};

const players = (idx: number): string => {
    return ["X", "O"][idx];
}

const generateBoard = (): List<List<string>> => {
    const row = List(["", "", ""]);
    return List([row, row, row]);
};

// Well, this is awkward...
const initialize = (): Map<string, any> => {
    return Map({
        board: generateBoard(),
        state: Map({
            gameState: GameState.NextPlayer,
            player: 0,
        }),
    });
};
