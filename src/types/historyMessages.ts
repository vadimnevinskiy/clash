import DateTimeFormat = Intl.DateTimeFormat;

export enum HistoryMessagesEnums {
    FETCH_HISTORY= 'FETCH_HISTORY',
    FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS',
    FETCH_HISTORY_ERROR = 'FETCH_HISTORY_ERROR',
    SET_MESSAGE = 'SET_MESSAGE',
    SET_LIMIT_SKIP = 'SET_LIMIT_SKIP',
}
export interface Message {
    id: string
    from: string
    text: string
    createdAt: string
}

export interface HistoryState {
    historyMessages: Message[]
    skip: number
    limit: number
    error: string | null
    loading: boolean
}

interface FetchHistoryMessages {
    type: HistoryMessagesEnums.FETCH_HISTORY
}
interface FetchHistoryMessagesSuccess {
    type: HistoryMessagesEnums.FETCH_HISTORY_SUCCESS
    payload: Message[]
}
interface FetchHistoryMessagesError {
    type: HistoryMessagesEnums.FETCH_HISTORY_ERROR
    payload: string
}
interface SetMessage {
    type: HistoryMessagesEnums.SET_MESSAGE
    payload: Message
}
interface SetSkipLimit {
    type: HistoryMessagesEnums.SET_LIMIT_SKIP
    payload: {
        limit: number
        skip: number
    }
}
export type HistoryMessagesTypes = FetchHistoryMessages | FetchHistoryMessagesSuccess | FetchHistoryMessagesError | SetMessage | SetSkipLimit
