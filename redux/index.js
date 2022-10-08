import { createStore } from 'redux';
import {reducer} from "./reducers/index.js";
import {createWrapper} from 'next-redux-wrapper';


const store = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(store, {debug: true});

