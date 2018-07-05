import {Map} from 'immutable'

const board = Map()

const MOVE = 'MOVE'
const move = (turn, position) => ({type: MOVE, turn: turn, position: position})

export default function gameReducer(state = {board: board, turn: 'X', numPlaced: 0}, action) {

    switch (action.type) {
      case MOVE:
        state.turn = state.turn === 'X' ? 'O' : 'X'
        state.numPlaced = state.numPlaced + 1
        const newBoard = state.board.setIn(action.position, action.turn)
        state.board = newBoard
        return state
      default:
        return state
    }
}

const streak = (board, coordArr) => {
  // check for all X's
  const includesX = coordArr.includes('X')
  const includesO = coordArr.includes('O')
  const blank = coordArr.includes('_')

  if (!includesX && !blank) return 'Y'
  else if (!includesY && !blank) return 'X'
  return
}

const winner = (state) => {

  streak(state.board, /*an array of coords*/)
  streak(state.board, /*an array of coords*/)
  streak(state.board, /*an array of coords*/)
  streak(state.board, /*an array of coords*/)
  streak(state.board, /*an array of coords*/)
  streak(state.board, /*an array of coords*/)
  streak(state.board, /*an array of coords*/)


  if (state.numPlaced >= 9) {
    console.log('Game Over')
    return 'DRAW'
  }
}

export {move}
