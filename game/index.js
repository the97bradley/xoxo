import {Map} from 'immutable'

const board = Map()

const MOVE = 'MOVE'
const START = 'START'
const move = (turn, pos) => ({type: MOVE, turn: turn, position: pos})

export default function gameReducer(state = {board: board, turn: 'X'}, action) {
  switch (action.type) {
    case MOVE:
      return {board: state.board.setIn(action.position, action.turn), turn: action.turn}
    // case START:
    //   return state
    default:
      return state
  }
}

export {board, move}
