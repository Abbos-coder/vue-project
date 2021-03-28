exports.ids = [6];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a694d6e4", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selected_vue_vue_type_style_index_0_id_22b0b0ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selected_vue_vue_type_style_index_0_id_22b0b0ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selected_vue_vue_type_style_index_0_id_22b0b0ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selected_vue_vue_type_style_index_0_id_22b0b0ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selected_vue_vue_type_style_index_0_id_22b0b0ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card__body[data-v-22b0b0ab]{border-bottom:1px solid #35495e;position:relative}.card__body>img[data-v-22b0b0ab]{width:100px;height:105px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.remove[data-v-22b0b0ab]{font-size:26px;cursor:pointer;padding:0 3px 3px;position:absolute;right:5px;z-index:10;transition:color .2s ease-in}.remove[data-v-22b0b0ab]:hover{color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Selected.vue?vue&type=template&id=22b0b0ab&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.selected),function(select,idx){return _vm._ssrNode("<div class=\"px-3 py-2 card__body\" data-v-22b0b0ab>","</div>",[_c('b-img',{attrs:{"src":select.image,"fluid":"","thumbnail":""}}),_vm._ssrNode(" <div class=\"cart__title\" data-v-22b0b0ab><strong data-v-22b0b0ab> Shoes Adidas for men</strong><br data-v-22b0b0ab> <p data-v-22b0b0ab>"+_vm._ssrEscape(_vm._s(select.title))+"</p> <p data-v-22b0b0ab>Price: $<span data-v-22b0b0ab>"+_vm._ssrEscape(" "+_vm._s(select.price))+"</span></p> <p data-v-22b0b0ab>Size: <span data-v-22b0b0ab> 42 </span></p></div> <strong class=\"remove\" data-v-22b0b0ab>×</strong>")],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Selected.vue?vue&type=template&id=22b0b0ab&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Selected.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Selectedvue_type_script_lang_js_ = ({
  name: "selected",
  props: {
    selected: {
      type: Array
    }
  },
  methods: {
    deleteItem(item, i) {
      console.log(item);
      this.selected.splice(item, 1);
      this.sum -= +i.id;
    }

  }
});
// CONCATENATED MODULE: ./components/Selected.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Selectedvue_type_script_lang_js_ = (Selectedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Selected.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Selectedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22b0b0ab",
  "f9fcf21c"
  
)

/* harmony default export */ var Selected = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=selected.js.map