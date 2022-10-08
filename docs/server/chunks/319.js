"use strict";
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
// EXTERNAL MODULE: ./redux/types/types.js
var types = __webpack_require__(490);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(648);
;// CONCATENATED MODULE: ./redux/reducers/index.js


const initialState = {
    coin: {}
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_.HYDRATE:
            {
                return {
                    ...state,
                    ...action.payload
                };
            }
        case types/* GET_COIN */.h:
            {
                return {
                    ...state,
                    coin: action.payload
                };
            }
        default:
            {
                return state;
            }
    }
};

;// CONCATENATED MODULE: ./redux/index.js



const store = (context)=>(0,external_redux_.createStore)(reducer);
// export an assembled wrapper
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(store, {
    debug: true
});


/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ GET_COIN)
/* harmony export */ });
const GET_COIN = "GET_COIN";


/***/ })

};
;