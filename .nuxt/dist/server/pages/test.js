exports.ids = [4];
exports.modules = {

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7d22ef18", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_windicss_style_pitcher_cjs_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_cjs_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{background-color:#7fffd4}.player{position:relative;max-width:480px;margin:0 auto}.player .icon-pause{display:none}.player.playing .icon-pause{display:inline-block}.player.playing .icon-play{display:none}.dashboard{padding:16px 16px 14px;position:fixed;top:0;width:100%;max-width:480px;background-color:#fff;border-bottom:1px solid #ebebeb}header{text-align:center;margin-bottom:10px}header h4{font-size:12px}header h2{font-size:20px}.songname{font-family:\"Arial\"}.cd{display:block;margin:auto;width:200px}.cd-thumb{padding-top:0}.cd-thumb-image{height:200px;padding-top:0;border-radius:50%;background-repeat:no-repeat;background-size:cover;background-position:50%}.control{display:flex;align-items:center;justify-content:space-around;padding:20px 0 10px}.control .btn{color:#666;padding:18px;font-size:18px}.control .btn-toggle-play{width:55px;height:55px;border-radius:50%;display:flex;align-items:center;justify-content:center}#slide{width:100%;overflow:hidden;-webkit-appearance:none;height:6px;background:#d3d3d3;outline:none;opacity:.7;transition:opacity .2s}#slide::-webkit-slider-thumb,#slide:hover::-webkit-slider-thumb{background:#ec1f55;box-shadow:-500px 0 0 500px var(--primary-color)}#slide::-webkit-slider-thumb{-webkit-appearance:none;cursor:pointer;width:12px;height:6px}.progress{width:100%;overflow:hidden;-webkit-appearance:none;height:6px;background:#d3d3d3;outline:none;opacity:.7;transition:opacity .2s}.progress::-webkit-slider-thumb,.progress:hover::-webkit-slider-thumb{background:#ec1f55;box-shadow:-500px 0 0 500px var(--primary-color)}.progress::-webkit-slider-thumb{-webkit-appearance:none;cursor:pointer;width:12px;height:6px}.playlist{padding:12px;box-shadow:0 7px 29px 0 rgba(100,100,111,.2);margin-top:400px}.song{display:flex;align-items:center;margin-bottom:12px;background-color:#fff;padding:8px 16px;border-radius:5px;box-shadow:0 2px 3px rgba(0,0,0,.1)}.song.active{background-color:var(--primary-color)}.song:active{opacity:.8}.song.active .author,.song.active .option,.song.active .title{color:#fff}.song .thumb{width:46px;height:46px;background-repeat:no-repeat;background-size:cover;background-position:50%;border-radius:50%;margin:0 8px}.song .body{flex:1;padding:0 16px}.song .title{margin-bottom:4px;font-size:18px;color:var(--text-color)}.song .author{font-size:12px;color:#999}.song .option{padding:16px 8px;color:#999;font-size:18px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./pages/test.vue?vue&type=template&id=08d49c3c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"player\">","</div>",[_c('center',[_c('div',{staticClass:"bg-white dashboard"},[_c('header',[_c('h4',[_vm._v("Now playing:")]),_vm._v(" "),(_vm.isActive == false)?_c('h2',[_vm._v("Undefined")]):_c('h2',{staticClass:"songname"},[_vm._v(_vm._s(_vm.songname))])]),_vm._v(" "),_c('div',{staticClass:"cd"},[_c('div',{staticClass:"cd-thumb"},[_c('img',{staticClass:"cd-thumb-image",attrs:{"src":"https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg"}})])]),_vm._v(" "),_c('div',{staticClass:"control"},[(_vm.isRepeat == 0)?_c('div',{staticClass:"btn btn-repeat",on:{"click":function($event){return _vm.repeat()}}},[_c('Repeat')],1):_c('div',{staticClass:"btn btn-repeat",on:{"click":function($event){return _vm.repeat()}}},[_c('Repeat2')],1),_vm._v(" "),_c('div',{staticClass:"btn btn-prev",on:{"click":function($event){return _vm.prev()}}},[_c('Prev')],1),_vm._v(" "),(_vm.isPlaying == 0 && _vm.isActive == false)?_c('div',{staticClass:"btn btn-toggle-play border p-2 bg-red-500"},[_c('Unplay')],1):(_vm.isPlaying == 0 && _vm.isActive == true)?_c('div',{staticClass:"btn btn-toggle-play border p-2 bg-red-500",on:{"click":function($event){return _vm.play()}}},[_c('Play')],1):_c('div',{staticClass:"btn btn-toggle-play border p-2 bg-red-500",on:{"click":function($event){return _vm.pause()}}},[_c('Pause')],1),_vm._v(" "),_c('div',{staticClass:"btn btn-next",on:{"click":function($event){return _vm.next()}}},[_c('Next')],1),_vm._v(" "),(_vm.isRandom == 0)?_c('div',{staticClass:"btn btn-random",on:{"click":function($event){return _vm.random()}}},[_c('Random')],1):_c('div',{staticClass:"btn btn-random",on:{"click":function($event){return _vm.random()}}},[_c('Random2')],1)]),_vm._v(" "),_c('input',{staticClass:"progress",attrs:{"id":"progress","type":"range","value":"0","step":"1","min":"0","max":"100"}}),_vm._v(" "),_c('input',{attrs:{"id":"slide","type":"range","value":"100","step":"1","min":"0","max":"100"},on:{"input":function($event){return _vm.changeVol($event)}}}),_vm._v(" "),_c('audio',{attrs:{"id":"audio","src":""}})]),_vm._v(" "),_c('div',{staticClass:"playlist"},_vm._l((_vm.music),function(m,index){return _c('div',{key:index,attrs:{"id":"songlist"}},[(m !== null)?_c('div',{staticClass:"song",attrs:{"data-index":index},on:{"click":function($event){return _vm.loadCurrentSong(index)}}},[(
                m.artists == null ||
                m.artists.data[0] == null ||
                m.artists.data[0].avatar == null
              )?_c('img',{staticClass:"thumb",attrs:{"src":"https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg"}}):_c('img',{staticClass:"thumb",attrs:{"src":m.artists.data[0].avatar.url}}),_vm._v(" "),_c('div',{staticClass:"body"},[_c('h3',{staticClass:"title"},[_vm._v(_vm._s(m.title))]),_vm._v(" "),_c('p',{staticClass:"author",domProps:{"innerHTML":_vm._s(m.content)}})]),_vm._v(" "),_c('div',{staticClass:"option"},[_c('ThreeDots')],1)]):_vm._e()])}),0)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=08d49c3c&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./pages/test.vue?vue&type=script&lang=js&
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

/* harmony default export */ var testvue_type_script_lang_js_ = ({
  data() {
    return {
      isActive: false,
      currentIndex: 0,
      isTimeUpdate: 0,
      isRepeat: 0,
      isPlaying: 0,
      isRandom: 0,
      music: [],
      songname: '',
      $: null,
      audio: null,
      progr: null,
      cdThumbAnimate: null,
      cdthumbimg: null,
      currentTime: 0
    };
  },

  created() {
    for (var i = 0; i < 20; i++) {
      external_axios_default.a.get('https://api2.bcdcnt.net/graphql', {
        params: {
          query: 'query($id: ID!) {\n song(id: $id) {\nid\ntitle\nsubtitle\nslug\ncontent\nviews\ndownloads\nfile_type\nlyric_type\nstatus\nyear\nrecord_year\nallow_comment\ncreated_at\nartists(first: 10, orderBy: [{column: "song_artist.order", order: ASC}]) {\ndata {\nid\ntitle\nslug\navatar {\nurl\n}\n}\n}\ncomposers(first: 10, orderBy: [{column: "song_composer.order", order: ASC}]) { \n data { \n id\n title\n slug\n }\n }\n poets(first: 10) {\n data {\nid\n  title\n slug\n  }\n }\n thumbnail {\n url\n user {\n id\n username\navatar {\nurl\n}\n}\n}\nfile {\nvideo_url\naudio_url\n }\n uploader {\n id\n username\n avatar {\nurl\n}\n}\ndocuments(first: 10) {\ndata {\nid\ntitle\nslug\nthumbnail {\n url\n}\n}\n}\n}\n}',
          variables: {
            id: `${Math.floor(Math.random() * 8500) + 1}`
          }
        }
      }).then(res => {
        this.music = this.music.concat(res.data.data.song);
      });
    }
  },

  mounted() {
    this.$ = document.querySelector.bind(document);
    this.audio = this.$('#audio');
    this.progr = this.$('#progress');
    this.cdthumbimg = this.$('.cd-thumb-image');
    const audio2 = this.$('#audio');
    const progr2 = this.$('#progress');
    const cdthumbimg2 = this.$('.cd-thumb-image');
    const cdthumb = this.$('.cd-thumb');
    const cdWidth = cdthumbimg2.offsetWidth;

    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cdthumbimg2.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
      cdthumbimg2.style.height = newCdWidth > 0 ? newCdWidth + 'px' : 0;
      cdthumbimg2.style.opacity = newCdWidth / cdWidth;
    };

    this.cdThumbAnimate = cdthumb.animate([{
      transform: 'rotate(360deg)'
    }], {
      duration: 25000,
      iterations: Infinity
    });

    audio2.ontimeupdate = function () {
      if (audio2.duration) {
        const progressPercent = Math.floor(audio2.currentTime / audio2.duration * 100);
        progr2.value = progressPercent;
      }
    };

    progr2.oninput = function (e) {
      const seekTime = audio2.duration / 100 * e.target.value;
      audio2.currentTime = seekTime;
    };

    let _this = this;

    this.cdThumbAnimate.pause();

    this.audio.onended = function () {
      if (_this.isRandom == 1 && _this.isRepeat == 1) {
        _this.songname = _this.music[_this.currentIndex].title;
        _this.audio.src = _this.music[_this.currentIndex].file.audio_url;

        _this.audio.play();

        if (_this.music[_this.currentIndex].thumbnail != null) {
          _this.cdthumbimg.src = _this.music[_this.currentIndex].thumbnail.url;
        } else {
          _this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      } else if (_this.isRandom == 1 && _this.isRepeat == 0) {
        var x = Math.floor(Math.random() * 19) + 1;

        while (_this.music[x].title == null || _this.music[x] == null) {
          x = Math.floor(Math.random() * 19) + 1;
        }

        _this.songname = _this.music[x].title;
        _this.audio.src = _this.music[x].file.audio_url;

        _this.audio.play();

        if (_this.music[x].thumbnail != null) {
          _this.cdthumbimg.src = _this.music[x].thumbnail.url;
        } else {
          _this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      } else if (_this.isRandom == 0 && _this.isRepeat == 1) {
        _this.songname = _this.music[_this.currentIndex].title;
        _this.audio.src = _this.music[_this.currentIndex].file.audio_url;

        _this.audio.play();

        if (_this.music[_this.currentIndex].thumbnail != null) {
          _this.cdthumbimg.src = _this.music[_this.currentIndex].thumbnail.url;
        } else {
          _this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      } else {
        if (_this.currentIndex == 19) {
          _this.currentIndex = 0;
        } else {
          _this.currentIndex = _this.currentIndex + 1;
        }

        while (_this.music[_this.currentIndex].title == null || _this.music[_this.currentIndex] == null) {
          if (_this.currentIndex == 19) {
            _this.currentIndex = 0;
          } else {
            _this.currentIndex = _this.currentIndex + 1;
          }
        }

        _this.songname = _this.music[_this.currentIndex].title;
        _this.audio.src = _this.music[_this.currentIndex].file.audio_url;

        _this.audio.play();

        if (_this.music[_this.currentIndex].thumbnail != null) {
          _this.cdthumbimg.src = _this.music[_this.currentIndex].thumbnail.url;
        } else {
          _this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      }
    };
  },

  methods: {
    changeVol(event) {
      this.$ = document.querySelector.bind(document);
      this.audio = this.$('#audio');
      this.audio.volume = event.target.value / 100;
    },

    play() {
      this.isPlaying = 1;
      this.audio.play();
      this.cdThumbAnimate.play();
    },

    pause() {
      this.isPlaying = 0;
      this.audio.pause();
      this.cdThumbAnimate.pause();
    },

    prev() {
      this.isPlaying = 1;
      this.isActive = true;
      this.audio = this.$('#audio');

      if (this.isRandom == 1) {
        var x = Math.floor(Math.random() * 19) + 1;

        while (this.music[x].title == null || this.music[x] == null || this.music == null) {
          x = Math.floor(Math.random() * 19) + 1;
        }

        this.songname = this.music[x].title;
        this.audio.src = this.music[x].file.audio_url;
        this.audio.play();

        if (this.music[x].thumbnail != null) {
          this.cdthumbimg.src = this.music[x].thumbnail.url;
        } else {
          this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      } else {
        if (this.currentIndex == 0) {
          this.currentIndex = 19;
        } else {
          this.currentIndex = this.currentIndex - 1;
        }

        while (this.music[this.currentIndex].title == null || this.music[this.currentIndex] == null || this.music == null) {
          if (this.currentIndex == 0) {
            this.currentIndex = 19;
          } else {
            this.currentIndex = this.currentIndex - 1;
          }
        }

        this.songname = this.music[this.currentIndex].title;
        this.audio.src = this.music[this.currentIndex].file.audio_url;
        this.audio.play();

        if (this.music[this.currentIndex].thumbnail != null) {
          this.cdthumbimg.src = this.music[this.currentIndex].thumbnail.url;
        } else {
          this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      }
    },

    next() {
      this.isActive = true;
      this.isPlaying = 1;
      this.audio = this.$('#audio');

      if (this.isRandom == 1) {
        var x = Math.floor(Math.random() * 19) + 1;

        while (this.music[x].title == null || this.music[x] == null || this.music == null) {
          x = Math.floor(Math.random() * 19) + 1;
        }

        this.songname = this.music[x].title;
        this.audio.src = this.music[x].file.audio_url;
        this.audio.play();

        if (this.music[x].thumbnail != null) {
          this.cdthumbimg.src = this.music[x].thumbnail.url;
        } else {
          this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      } else {
        if (this.currentIndex == 19) {
          this.currentIndex = 0;
        } else {
          this.currentIndex = this.currentIndex + 1;
        }

        while (this.music[this.currentIndex].title == null || this.music[this.currentIndex] == null || this.music == null) {
          if (this.currentIndex == 19) {
            this.currentIndex = 0;
          } else {
            this.currentIndex = this.currentIndex + 1;
          }
        }

        this.songname = this.music[this.currentIndex].title;
        this.audio.src = this.music[this.currentIndex].file.audio_url;
        this.audio.play();

        if (this.music[this.currentIndex].thumbnail != null) {
          this.cdthumbimg.src = this.music[this.currentIndex].thumbnail.url;
        } else {
          this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
        }
      }
    },

    random() {
      if (this.isRandom == 0) {
        this.isRandom = 1;
      } else {
        this.isRandom = 0;
      }
    },

    repeat() {
      if (this.isRepeat == 0) {
        this.isRepeat = 1;
      } else {
        this.isRepeat = 0;
      }
    },

    loadCurrentSong(x) {
      this.isActive = true;
      this.isPlaying = 1;
      this.currentIndex = x;
      this.cdThumbAnimate.play();
      this.audio = this.$('#audio');
      this.cdthumbimg = this.$('.cd-thumb-image');
      this.songname = this.music[x].title;

      if (this.music[x].file != null) {
        this.audio.src = this.music[x].file.audio_url;
        this.audio.play();
      }

      if (this.music[x].thumbnail != null) {
        this.cdthumbimg.src = this.music[x].thumbnail.url;
      } else {
        this.cdthumbimg.src = 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg';
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e14438ac"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map