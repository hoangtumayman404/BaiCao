import {combineReducers} from "redux";
import buttonAction from 'services/buttonAction';
import deck from 'services/deck';
import player from 'services/player';

export default combineReducers({
    deck,
    buttonAction,
    player0: player(0),
    player1: player(1),
    player2: player(2),
    player3: player(3),
});

