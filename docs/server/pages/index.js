(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 353:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__ANozN",
	"wr": "Hero_wr__QedV3",
	"heroLogo": "Hero_heroLogo__jtebb",
	"heroContent": "Hero_heroContent__xmqqE",
	"heroDescription": "Hero_heroDescription__PrtPN",
	"heroBlock": "Hero_heroBlock__Ut5KB"
};


/***/ }),

/***/ 340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./api/cryptoCurrency/bitcoin.js
const getBitcoin = async ()=>{
    try {
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        if (response.status === 202 || response.status === 200) {
            return await response?.json();
        }
        return null;
    } catch (error) {
        throw error;
    }
};

// EXTERNAL MODULE: ./redux/index.js + 1 modules
var redux = __webpack_require__(319);
// EXTERNAL MODULE: ./styles/Hero.module.scss
var Hero_module = __webpack_require__(353);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.44cb1ca5.png","height":512,"width":514,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEX///7+/v7////+/v7////+/v7+/v7////+///+/v77/v/7+/v6+vr+9/P/9fD+9fD+9PD/9O3/8+z09vf/8uv/7+j/7+Xx8fH+6+Lu7e3s7Ozr6+vo6Ojo5+fk5+jh5OXj4+Pg4ODg39/Y2NjV1NTR0dHLy8vKysrJycnFxcW8u7sJ/7zFAAAAB3RSTlP09Pn5+vr7iXMQOQAAAEhJREFUeNodxsURgDAABMDDcgQIrsFd+i8Qhn0tHP4M0Nd6minA6rjulhYku/1cA/tLv2xPY4Mus3HwTMiiTso0F3BUqOJI4QWXnAQ4490rZgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./redux/types/types.js
var types = __webpack_require__(490);
;// CONCATENATED MODULE: ./redux/actions/action.js

const getCoinAction = (coin)=>{
    return {
        type: types/* GET_COIN */.h,
        payload: coin
    };
};

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./pages/index.js






//style

//img



let interval;
async function getCoinData() {
    const res = await getBitcoin();
    if (res) {
        const coinData = [];
        for(const key in res.bpi){
            coinData.push({
                code: res.bpi[key].code,
                price: res.bpi[key].rate,
                symbol: res.bpi[key].symbol
            });
        }
        return {
            date: res.time.updated,
            title: res.chartName,
            description: res.disclaimer,
            data: coinData
        };
    }
    return {};
}
function Home() {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const coin = (0,external_react_redux_namespaceObject.useSelector)(({ coin  })=>coin);
    (0,external_react_.useEffect)(()=>{
        clearInterval(interval);
        interval = setInterval(async ()=>{
            clearInterval(interval);
            const resData = await getCoinData();
            dispatch(getCoinAction(resData));
        }, 60000);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        coin
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Hero_module_default()).hero,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Hero_module_default()).wr,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Hero_module_default()).heroLogo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "#"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Hero_module_default()).heroContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: coin.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Hero_module_default()).heroDescription,
                            children: coin.description
                        }),
                        coin?.data?.map(({ code , price , symbol  }, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Hero_module_default()).heroBlock,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Hero_module_default()).heroCode,
                                        children: code
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Hero_module_default()).heroPrice,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Hero_module_default()).heroSymbol,
                                                dangerouslySetInnerHTML: {
                                                    __html: symbol
                                                }
                                            }),
                                            " ",
                                            price
                                        ]
                                    })
                                ]
                            }, index);
                        })
                    ]
                })
            ]
        })
    });
}
const getServerSideProps = redux/* wrapper.getServerSideProps */.Y.getServerSideProps((store)=>async ()=>{
        const resCoin = await getCoinData();
        store.dispatch(getCoinAction(resCoin));
    });


/***/ }),

/***/ 648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,319], () => (__webpack_exec__(340)));
module.exports = __webpack_exports__;

})();