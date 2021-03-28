exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("00ec36c2", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RightBar.vue?vue&type=template&id=38a4890e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-sidebar',{attrs:{"id":"sidebar-right","title":"Total","title":'Total $' + _vm.$store.state.sum,"bg-variant":"dark","text-variant":"light","right":"","shadow":""}},[(_vm.$store.state.selected.length <= 0)?_c('p',{attrs:{"id":"cardText"}},[_vm._v(_vm._s(_vm.$store.state.newTitle))]):_vm._e(),_vm._v(" "),_vm._l((_vm.$store.state.selected),function(select,idx){return _c('div',{key:idx,staticClass:"px-2 py-2 card__body"},[_c('b-img',{attrs:{"src":select.image,"fluid":"","thumbnail":""}}),_vm._v(" "),_c('div',{staticClass:"cart__title"},[_c('strong',[_vm._v(" Shoes Adidas for men")]),_c('br'),_vm._v(" "),_c('p',[_vm._v(_vm._s(select.title))]),_vm._v(" "),_c('p',[_vm._v("Price: $"),_c('span',[_vm._v(" "+_vm._s(select.price))])]),_vm._v(" "),_c('p',[_vm._v("Size: "),_c('span',[_vm._v(" "+_vm._s(select.size)+" ")])])]),_vm._v(" "),_c('strong',{staticClass:"remove",on:{"click":function($event){return _vm.deleteItem(select, idx)}}},[_c('BIconTrashFill')],1)],1)}),_vm._v(" "),(_vm.$store.state.selected.length > 0)?_c('div',{staticClass:"d-flex justify-content-center mt-3"},[_c('b-button',{staticStyle:{"width":"200px"},attrs:{"variant":"outline-success"}},[_vm._v("Buy")])],1):_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RightBar.vue?vue&type=template&id=38a4890e&scoped=true&

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RightBar.vue?vue&type=script&lang=js&
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

/* harmony default export */ var RightBarvue_type_script_lang_js_ = ({
  components: {
    BIconTrashFill: external_bootstrap_vue_["BIconTrashFill"]
  },
  methods: {
    deleteItem(select, i) {
      this.$store.state.selected.splice(i, 1);
      this.$store.state.sum -= +select.price;
    }

  }
});
// CONCATENATED MODULE: ./components/RightBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RightBarvue_type_script_lang_js_ = (RightBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/RightBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RightBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38a4890e",
  "512f12ae"
  
)

/* harmony default export */ var RightBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightBar_vue_vue_type_style_index_0_id_38a4890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightBar_vue_vue_type_style_index_0_id_38a4890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightBar_vue_vue_type_style_index_0_id_38a4890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightBar_vue_vue_type_style_index_0_id_38a4890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RightBar_vue_vue_type_style_index_0_id_38a4890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#cardText[data-v-38a4890e]{margin-top:50px;text-align:center}.card__body[data-v-38a4890e]{border-bottom:1px solid #35495e;position:relative}.card__body>img[data-v-38a4890e]{width:100px;height:105px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.remove[data-v-38a4890e]{font-size:20px;cursor:pointer;padding:0 3px 3px;position:absolute;right:20px;bottom:10px;z-index:10;transition:color .2s ease-in}.remove[data-v-38a4890e]:hover{color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=right-bar.js.map