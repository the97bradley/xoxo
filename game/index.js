import {Map} from 'immutable'

const board = Map()

const MOVE = 'MOVE'
const move = (turn, pos) => ({type: MOVE, turn: turn, position: pos})

export default function gameReducer(state = {board: board, turn: 'X'}, action) {
    if (action.type === 'MOVE') {


        return  {board: state.board.setIn(action.position, action.player), turn: action.turn}



    }
    if (action.type === 'START') {



    }
    return state
}

export {move}
