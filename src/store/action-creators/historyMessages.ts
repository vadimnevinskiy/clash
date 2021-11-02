import {Dispatch} from "redux";
import {HistoryMessagesEnums, HistoryMessagesTypes, Message} from "../../types/historyMessages";
import axios, {AxiosResponse} from "axios";


export const fetchHistoryMessages = (limit: number, skip: number) => {
    return async (dispatch: Dispatch<HistoryMessagesTypes>) => {
        try {
            dispatch({type: HistoryMessagesEnums.FETCH_HISTORY})
            const response: AxiosResponse<Message[]> = await axios.get(`https://test-chat-backend-hwads.ondigitalocean.app/api/messages?skip=${skip}&limit=${limit}`)
            dispatch({type: HistoryMessagesEnums.FETCH_HISTORY_SUCCESS, payload: response.data.reverse()})
        } catch (error) {
            dispatch({type: HistoryMessagesEnums.FETCH_HISTORY_ERROR, payload: 'Loading error!'})
        }
    }
}

export const setMessage = (message: Message) => {
    return async (dispatch: Dispatch<HistoryMessagesTypes>) => {
        try {
            dispatch({type: HistoryMessagesEnums.SET_MESSAGE, payload: message})
        } catch (error) {
            dispatch({type: HistoryMessagesEnums.FETCH_HISTORY_ERROR, payload: 'Loading error!'})
        }
    }
}
