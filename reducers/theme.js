import * as ACTIONS from '../constants'
import { dark, navy, light } from '../themes'

const INITIAL_STATE = {
  theme: dark
}

const THEMES = {
  light,
  navy,
  dark
}

const applyThemeChange = (state, action) => ({
  ...state,
  theme: THEMES[action.theme]
})

function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_THEME:
      return applyThemeChange(state, action)

    default:
      return state
  }
}

export default themeReducer
