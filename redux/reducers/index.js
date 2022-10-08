import {GET_COIN} from "../types/types.js";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    coin: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case GET_COIN: {
            return {
                ...state,
                coin: action.payload
            };
        }
        default: {
            return state;
        }
    }
};