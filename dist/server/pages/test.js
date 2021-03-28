exports.ids = [13,4,5,6];
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c72e2e5e", content, true, context)
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=70c1d233&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div>","</div>",[_c('b-navbar',{attrs:{"toggleable":"lg","type":"dark","variant":"dark"}},[_c('b-navbar-brand',{attrs:{"to":"/"}},[_vm._v("Shopify")]),_vm._v(" "),_c('b-navbar-toggle',{attrs:{"target":"nav-collapse"}}),_vm._v(" "),_c('b-collapse',{attrs:{"id":"nav-collapse","is-nav":""}},[_c('b-navbar-nav',[_c('b-nav-item',{attrs:{"exact":"","no-prefetch":"","active-class":"active","to":"/"}},[_vm._v("Home ")]),_vm._v(" "),_c('b-nav-item',{attrs:{"active-class":"active","to":"/employees/About"}},[_vm._v("About ")]),_vm._v(" "),_c('b-nav-item',{attrs:{"active-class":"active","to":"/Men"}},[_vm._v("Men ")]),_vm._v(" "),_c('b-nav-item',{attrs:{"active-class":"active","to":"/Women"}},[_vm._v("Women ")])],1),_vm._v(" "),_c('b-navbar-nav',{staticClass:"ml-auto"},[_c('b-navbar-nav',[_c('b-nav-item',[_c('BIconCart2',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":true}}],staticClass:"cart__pos"}),_vm._v(" "),_c('span',{attrs:{"id":"count"}},[_vm._v(_vm._s(_vm.$store.state.selected.length))])],1)],1),_vm._v(" "),_c('b-nav-item-dropdown',{attrs:{"text":"Lang","right":""}},[_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("EN")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("ES")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("RU")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("FA")])],1),_vm._v(" "),_c('b-nav-item-dropdown',{attrs:{"right":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('em',[_vm._v("User")])]},proxy:true}])},[_vm._v(" "),_c('b-dropdown-item',{attrs:{"to":"/Create"}},[_vm._v("Profile")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("Sign Out")])],1),_vm._v(" "),_c('b-nav-form',[_c('b-form-input',{staticClass:"mr-sm-2",attrs:{"size":"sm","placeholder":"Search"}}),_vm._v(" "),_c('b-button',{staticClass:"my-2 my-sm-0",attrs:{"size":"sm","type":"submit"}},[_vm._v("Search")])],1)],1)],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=70c1d233&

// EXTERNAL MODULE: ./components/RightBar.vue + 4 modules
var RightBar = __webpack_require__(34);

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Selected.vue + 4 modules
var Selected = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  components: {
    BIcon: external_bootstrap_vue_["BIcon"],
    BIconCart2: external_bootstrap_vue_["BIconCart2"],
    RightBar: RightBar["default"],
    Selected: Selected["default"]
  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5261b1a7"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{outline:none}@media(min-width:768px){.navbar{padding:.5rem 4rem}}#count{margin-left:-4px;color:#fff}.b-icon:hover{transform:scale(1.1);transition:transform .2s}.card__body{display:flex}.card__body img{max-height:100px}.card__body div.cart__title{margin-left:7px}.card__body p{margin:0;padding:0}hr{color:#fff;background-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("794862ce", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bdaac516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bdaac516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bdaac516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bdaac516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bdaac516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cards>div[data-v-bdaac516]{display:flex!important;justify-content:space-around;flex-wrap:wrap;margin-bottom:150px}.container[data-v-bdaac516]{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=bdaac516&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-bdaac516>","</div>",[_vm._ssrNode("<div data-v-bdaac516>"+_vm._ssrEscape(_vm._s(_vm.sum))+"</div> "),_vm._ssrNode("<div class=\"card\" data-v-bdaac516>","</div>",_vm._l((_vm.items),function(item){return _vm._ssrNode("<div data-v-bdaac516>","</div>",[_c('b-card',{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"title":"Card Title","img-src":item.url,"img-alt":"Image","img-top":"","tag":"article"}},[_c('b-card-text',[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('b-button',{attrs:{"href":"#","variant":"success"}},[_vm._v("Buy now")]),_vm._v(" "),_c('b-button',{attrs:{"href":"#","variant":"primary"},on:{"click":function($event){return _vm.addToCard(item)}}},[_vm._v("Add to cart")])],1)],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-bdaac516>","</div>",_vm._l((_vm.selected),function(item,index){return _vm._ssrNode("<div data-v-bdaac516>","</div>",[_vm._ssrNode("<button data-v-bdaac516>x</button> "),_c('b-card',{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"title":"Card Title","img-src":item.url,"img-alt":"Image","img-top":"","tag":"article"}},[_c('b-card-text',[_vm._v("\n            "+_vm._s(item.title)+"\n          ")])],1)],2)}),0)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=bdaac516&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
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
/* harmony default export */ var testvue_type_script_lang_js_ = ({
  async fetch() {
    this.items = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4').then(response => response.json());
  },

  data() {
    return {
      url: 'https://picsum.photos/600/300/?image=20',
      items: [],
      selected: [],
      cost: [0],
      count: 0,
      sum: 0
    };
  },

  methods: {
    addToCard(item) {
      this.cost.push(item.id);
      this.selected.push(item);
      this.sum += +item.id; //   this.sum = this.cost.reduce((x, y) => x+y)
    },

    deleteItem(item, i) {
      this.selected.splice(item, 1);
      this.sum -= +i.id;
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bdaac516",
  "9d4c59ee"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=test.js.map