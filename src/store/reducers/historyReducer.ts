import {HistoryMessagesEnums, HistoryMessagesTypes, HistoryState} from "../../types/historyMessages";


const initialState: HistoryState = {
    historyMessages: [],
    skip: 0,
    limit: 15,
    loading: false,
    error: null
}

export const historyReducer = (state = initialState, action: HistoryMessagesTypes): HistoryState => {
    switch (action.type) {
        case HistoryMessagesEnums.FETCH_HISTORY:
            return {
                ...state,
                loading: true
            }
        case HistoryMessagesEnums.FETCH_HISTORY_SUCCESS:

            return {
                ...state,
                historyMessages: [...action.payload, ...state.historyMessages],
                loading: false,
                error: null
            }
        case HistoryMessagesEnums.SET_MESSAGE:
            return {
                ...state,
                historyMessages: [...state.historyMessages, action.payload],
                loading: false,
                error: null
            }
        case HistoryMessagesEnums.FETCH_HISTORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case HistoryMessagesEnums.SET_LIMIT_SKIP:
            return {
                ...state,
                limit: action.payload.limit,
                skip: action.payload.skip
            }
        default:
            return state
    }
}
