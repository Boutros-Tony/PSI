exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 2897:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerImgHolder": "banner-img_bannerImgHolder__y3t_n",
	"scrollButton": "banner-img_scrollButton__yqBdr"
};


/***/ }),

/***/ 6473:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerWrapper": "banner_bannerWrapper__nlAkx",
	"bannerImg": "banner_bannerImg__sJm_p"
};


/***/ }),

/***/ 832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ banner_img_component)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/banner-image/banner-img.module.scss
var banner_img_module = __webpack_require__(2897);
var banner_img_module_default = /*#__PURE__*/__webpack_require__.n(banner_img_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/static/downside-arrow.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDownsideArrow = function SvgDownsideArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 17,
    height: 9,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.996 2.432 9.202 8.414a1.173 1.173 0 0 1-1.51 0L.898 2.432a.863.863 0 0 1 0-1.33 1.173 1.173 0 0 1 1.51 0L8.446 6.42l6.04-5.318a1.173 1.173 0 0 1 1.509 0 .863.863 0 0 1 0 1.33Z",
    fill: "#fff"
  })));
};

/* harmony default export */ const downside_arrow = (SvgDownsideArrow);
;// CONCATENATED MODULE: ./components/banner-image/banner-img.component.jsx




const BannerImg = ({ imgUrl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (banner_img_module_default()).bannerImgHolder,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (banner_img_module_default()).scrollButton,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "http://",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(downside_arrow, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                layout: "fill",
                objectFit: "cover",
                alt: "Psi Image Banner",
                src: imgUrl
            })
        ]
    });
};
/* harmony default export */ const banner_img_component = (BannerImg);


/***/ }),

/***/ 8381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6473);
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



const Banner = ({ title , text1 , text2 , imgSrc , imgHeight , imgWidth  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bannerWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "big-dark-title",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "dark-p",
                children: text1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "dark-p",
                children: text2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bannerImg),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: imgSrc,
                    alt: "Psi | Circle",
                    width: imgWidth,
                    height: imgHeight
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ })

};
;