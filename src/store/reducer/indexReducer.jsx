import { combineReducers } from 'redux'
import { handleCounter } from './incrementReducer'

export const rootReducer = combineReducers({
    handleCounter
})