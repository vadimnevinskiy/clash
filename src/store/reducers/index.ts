import {combineReducers} from "redux";
import {historyReducer} from "./historyReducer";


export const rootReducer = combineReducers({
    historyMessages: historyReducer
})

export type RootState = ReturnType<typeof rootReducer>
