import {GET_COIN} from "../types/types.js";

export const getCoinAction = (coin) => {
    return {
        type: GET_COIN,
        payload: coin
    }
};