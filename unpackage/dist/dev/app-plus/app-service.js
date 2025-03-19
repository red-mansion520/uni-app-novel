if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_LOAD = "onLoad";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$i = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$h = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-f07ef577"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const BASE_URL = "http://192.168.216.100:8888";
  const getNewArrivalBooks = () => {
    return new Promise((resolve, reject) => {
      uni.request({
        // url: 'http://localhost:8888/api/getNewArrivalBooks', //本地测试
        url: `${BASE_URL}/api/getNewArrivalBooks`,
        // 手机端同一局域网下
        method: "GET",
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data);
          } else {
            reject(new Error("请求失败，状态码：" + res.statusCode));
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const getHotRecommendBooks = () => {
    return new Promise((resolve, reject) => {
      uni.request({
        // url: 'http://localhost:8888/api/hot-novels', // 本地测试
        url: `${BASE_URL}/api/hot-novels`,
        //手机端同一局域网下
        method: "GET",
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const _imports_0$1 = "/static/icons/sort.png";
  const _sfc_main$g = {
    __name: "bookstore",
    setup(__props, { expose: __expose }) {
      __expose();
      const searchKeyword = vue.ref("");
      const hotRecommendBooks = vue.ref([]);
      const newArrivalBooks = vue.ref([]);
      const groupedHotRecommendBooks = vue.computed(() => {
        const groups = [];
        for (let i = 0; i < hotRecommendBooks.value.length; i += 4) {
          groups.push(hotRecommendBooks.value.slice(i, i + 4));
        }
        return groups;
      });
      const goToSearchPage = () => {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      };
      const goToSortPage = () => {
        uni.navigateTo({
          url: "/pages/sort/sort"
        });
      };
      const formatUploadTime = (time) => {
        if (!time)
          return "";
        const date = new Date(time);
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
      };
      const truncateName = (name) => {
        const maxLength = 20;
        return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
      };
      const goToNovelDetails = (novel_id) => {
        uni.navigateTo({
          url: `/pages/novel_details/novel_details?novel_id=${novel_id}`
        });
      };
      vue.onMounted(async () => {
        try {
          const hotBooks = await getHotRecommendBooks();
          hotRecommendBooks.value = hotBooks;
          formatAppLog("log", "at pages/bookstore/bookstore.vue:141", "后端传来的热门推荐小说数据:", hotBooks);
          const newBooks = await getNewArrivalBooks();
          formatAppLog("log", "at pages/bookstore/bookstore.vue:145", "后端传来的最新上架小说数据:", newBooks);
          newBooks.sort((a, b) => new Date(b.upload_time) - new Date(a.upload_time));
          newArrivalBooks.value = newBooks;
        } catch (error) {
          formatAppLog("error", "at pages/bookstore/bookstore.vue:152", "获取数据失败:", error);
        }
      });
      const __returned__ = { searchKeyword, hotRecommendBooks, newArrivalBooks, groupedHotRecommendBooks, goToSearchPage, goToSortPage, formatUploadTime, truncateName, goToNovelDetails, ref: vue.ref, computed: vue.computed, onMounted: vue.onMounted, get getNewArrivalBooks() {
        return getNewArrivalBooks;
      }, get getHotRecommendBooks() {
        return getHotRecommendBooks;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "head" }, [
        vue.createCommentVNode(" 搜索框区域 "),
        vue.createElementVNode("view", {
          class: "search-box",
          onClick: $setup.goToSearchPage
        }, [
          vue.createVNode(_component_uni_search_bar, {
            modelValue: $setup.searchKeyword,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchKeyword = $event),
            placeholder: "请输入搜索内容",
            radius: "5",
            cancelButton: "none",
            readonly: ""
          }, {
            searchIcon: vue.withCtx(() => [
              vue.createVNode(_component_uni_icons, {
                type: "search",
                size: "18",
                color: "#999"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        vue.createCommentVNode(" 分类功能区域 "),
        vue.createElementVNode("view", {
          class: "sort-box",
          onClick: $setup.goToSortPage
        }, [
          vue.createElementVNode("image", {
            class: "sort-icon",
            src: _imports_0$1
          }),
          vue.createElementVNode("view", { class: "sort-text" }, " 分类 ")
        ])
      ]),
      vue.createCommentVNode(" 热门推荐模块 "),
      vue.createElementVNode("view", { class: "hot-recommend" }, [
        vue.createElementVNode("view", { class: "title" }, "热门推荐"),
        vue.createElementVNode("view", { class: "scroll-view" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.groupedHotRecommendBooks, (group, groupIndex) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "book-group",
                key: groupIndex
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(group, (book, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "book-item",
                      key: index,
                      onClick: ($event) => $setup.goToNovelDetails(book.novel_id)
                    }, [
                      vue.createElementVNode(
                        "view",
                        { class: "book-name" },
                        vue.toDisplayString(book.novel_name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "book-sort" },
                        vue.toDisplayString(book.novel_sort),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "book-like-count" },
                        "点赞数: " + vue.toDisplayString(book.likeCount),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 最新上架模块 "),
      vue.createElementVNode("view", { class: "new-arrival" }, [
        vue.createElementVNode("view", { class: "title" }, "最新上架"),
        vue.createElementVNode("view", { class: "book-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.newArrivalBooks, (book, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "book-item",
                key: index,
                onClick: ($event) => $setup.goToNovelDetails(book.novel_id)
              }, [
                vue.createElementVNode("view", { class: "book-info" }, [
                  vue.createElementVNode(
                    "span",
                    { class: "book-name" },
                    vue.toDisplayString($setup.truncateName(book.novel_name)),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("div", { class: "book-type-time" }, [
                    vue.createElementVNode(
                      "span",
                      { class: "book-type" },
                      vue.toDisplayString(book.novel_sort),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "span",
                      { class: "book-upload-time" },
                      vue.toDisplayString($setup.formatUploadTime(book.upload_time)),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesBookstoreBookstore = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/bookstore/bookstore.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        books: [
          { cover: "https://example.com/book1.jpg", title: "书名1" },
          { cover: "https://example.com/book2.jpg", title: "书名2" },
          { cover: "https://example.com/book3.jpg", title: "书名3" },
          { cover: "https://example.com/book4.jpg", title: "书名4" },
          { cover: "https://example.com/book5.jpg", title: "书名5" },
          { cover: "https://example.com/book6.jpg", title: "书名6" },
          { cover: "https://example.com/book7.jpg", title: "书名7" },
          { cover: "https://example.com/book8.jpg", title: "书名8" },
          { cover: "https://example.com/book9.jpg", title: "书名9" },
          { cover: "https://example.com/book10.jpg", title: "书名10" },
          { cover: "https://example.com/book11.jpg", title: "书名11" },
          { cover: "https://example.com/book12.jpg", title: "书名12" }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      class: "book-shelf",
      "scroll-y": "true"
    }, [
      vue.createElementVNode("view", { class: "grid-container" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.books, (book, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "book-item",
              key: index
            }, [
              vue.createElementVNode("image", {
                src: book.cover,
                class: "book-cover"
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "view",
                { class: "book-title" },
                vue.toDisplayString(book.title),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesBookshelfBookshelf = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/bookshelf/bookshelf.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {
      goToPage(page) {
        switch (page) {
          case "points":
            uni.navigateTo({ url: "/pages/points/points" });
            break;
          case "downloads":
            uni.navigateTo({ url: "/pages/downloads/downloads" });
            break;
          case "collections":
            uni.navigateTo({ url: "/pages/collections/collections" });
            break;
          case "settings":
            uni.navigateTo({ url: "/pages/settings/settings" });
            break;
          default:
            uni.showToast({ title: "功能暂未开放", icon: "none" });
        }
      },
      showActionSheet() {
        uni.showActionSheet({
          itemList: ["登录", "退出登录"],
          success: function(res) {
            if (!res.cancel) {
              if (res.tapIndex === 0) {
                uni.navigateTo({ url: "/pages/login/login" });
              } else if (res.tapIndex === 1) {
                uni.removeStorageSync("token");
                formatAppLog("log", "at pages/profile/profile.vue:74", "已退出登录");
                uni.reLaunch({ url: "/pages/profile/profile" });
              }
            }
          },
          fail: function(err) {
            formatAppLog("log", "at pages/profile/profile.vue:81", "操作菜单显示失败", err);
          }
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", {
        class: "more-icon",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.showActionSheet && $options.showActionSheet(...args))
      }, [
        vue.createVNode(_component_uni_icons, {
          type: "bars",
          size: "20",
          color: "#666"
        })
      ]),
      vue.createCommentVNode(" 用户信息区域 "),
      vue.createElementVNode("view", { class: "user-info" }, [
        vue.createElementVNode("view", { class: "avatar" }, [
          vue.createElementVNode("image", {
            src: "https://example.com/avatar.jpg",
            class: "avatar-image"
          })
        ]),
        vue.createElementVNode("view", { class: "username-wrapper" }, [
          vue.createElementVNode("view", { class: "username" }, "用户名")
        ])
      ]),
      vue.createCommentVNode(" 功能入口区域 "),
      vue.createElementVNode("view", { class: "function-section" }, [
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.goToPage("points"))
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "star-filled",
            size: "24",
            color: "#ffcc00"
          }),
          vue.createElementVNode("text", null, "积分")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.goToPage("downloads"))
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "download-filled",
            size: "24",
            color: "#007aff"
          }),
          vue.createElementVNode("text", null, "下载")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.goToPage("collections"))
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "star-filled",
            size: "24",
            color: "#ff5500"
          }),
          vue.createElementVNode("text", null, "收藏")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.goToPage("settings"))
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "gear-filled",
            size: "24",
            color: "#ff5500"
          }),
          vue.createElementVNode("text", null, "设置")
        ])
      ])
    ]);
  }
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/profile/profile.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        selectedOption: null,
        // 当前选择的签到方式
        poemQuestion: "床前明月光",
        // 示例古诗词问题
        poemAnswer: "",
        // 用户输入的古诗词答案
        wordQuestion: "w_tch",
        // 示例单词拼写问题
        wordAnswer: ""
        // 用户输入的单词拼写答案
      };
    },
    methods: {
      selectOption(option) {
        this.selectedOption = option;
      },
      submitAnswer() {
        let isCorrect = false;
        if (this.selectedOption === "poem" && this.poemAnswer.trim() === "疑是地上霜") {
          isCorrect = true;
        } else if (this.selectedOption === "word" && this.wordAnswer.trim() === "a") {
          isCorrect = true;
        }
        if (isCorrect) {
          uni.showToast({
            title: "签到成功！",
            icon: "success",
            duration: 2e3
          });
        } else {
          uni.showToast({
            title: "答案错误，请重试！",
            icon: "none",
            duration: 2e3
          });
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "title" }, "请选择签到的方式"),
      vue.createElementVNode("view", { class: "sign-in-options" }, [
        vue.createElementVNode("view", {
          class: "option",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.selectOption("poem"))
        }, "古诗词签到"),
        vue.createElementVNode("view", {
          class: "option",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.selectOption("word"))
        }, "单词拼写签到")
      ]),
      $data.selectedOption ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "sign-in-content"
      }, [
        $data.selectedOption === "poem" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "poem-section"
        }, [
          vue.createElementVNode("view", { class: "poem-question" }, [
            vue.createTextVNode("请填写古诗词的下句："),
            vue.createElementVNode("br"),
            vue.createTextVNode(
              '"' + vue.toDisplayString($data.poemQuestion) + '"',
              1
              /* TEXT */
            )
          ]),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "poem-answer",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.poemAnswer = $event),
              placeholder: "请输入答案"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.poemAnswer]
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.selectedOption === "word" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "word-section"
        }, [
          vue.createElementVNode("view", { class: "word-question" }, [
            vue.createTextVNode("请填写单词的缺失字母："),
            vue.createElementVNode("br"),
            vue.createTextVNode(
              '"' + vue.toDisplayString($data.wordQuestion) + '"',
              1
              /* TEXT */
            )
          ]),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "word-answer",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.wordAnswer = $event),
              placeholder: "请输入答案"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.wordAnswer]
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: "sign-in-button",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.submitAnswer && $options.submitAnswer(...args))
      }, "签到")
    ]);
  }
  const PagesSignInSignIn = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/sign_in/sign_in.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        novelFilePath: null,
        // 小说文件路径
        selectedCategory: null,
        // 选中的小说类型
        categories: ["玄幻", "武侠", "都市", "言情", "科幻", "历史", "悬疑", "穿越", "重生", "灵异", "游戏", "竞技", "轻小说", "其他"]
        // 小说类型列表
      };
    },
    methods: {
      // 选择小说文件
      chooseFile() {
        const _this = this;
        if (uni.getSystemInfoSync().platform === "android") {
          const Intent = plus.android.importClass("android.content.Intent");
          const File = plus.android.importClass("java.io.File");
          plus.android.importClass("android.net.Uri");
          const intent = new Intent(Intent.ACTION_GET_CONTENT);
          intent.setType("*/*");
          intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, false);
          plus.android.ready(function() {
            const main = plus.android.runtimeMainActivity();
            main.startActivityForResult(intent, 1e3);
            plus.android.overrideBackPress(function() {
            });
            plus.android.onActivityResult = function(requestCode, resultCode, data) {
              if (requestCode === 1e3 && resultCode === plus.android.RESULT_OK) {
                const uriData = data.getData();
                const realPath = _this.getRealPathFromURI(uriData);
                const file = new File(realPath);
                const size = file.length();
                const fileExt = file.getName().split(".").pop().toLowerCase();
                if (size > 10 * 1024 * 1024) {
                  uni.showToast({
                    title: "文件大小不能超过10MB",
                    icon: "none",
                    duration: 2e3
                  });
                  return;
                }
                if (!["txt", "epub", "pdf"].includes(fileExt)) {
                  uni.showToast({
                    title: "只能上传txt/epub/pdf文件",
                    icon: "none",
                    duration: 2e3
                  });
                  return;
                }
                _this.novelFilePath = realPath;
                uni.showToast({
                  title: "文件选择成功",
                  icon: "success",
                  duration: 2e3
                });
              }
            };
          });
        } else {
          uni.chooseFile({
            count: 1,
            type: "file",
            success: (res) => {
              if (res.tempFiles[0].size > 10 * 1024 * 1024) {
                uni.showToast({
                  title: "文件大小不能超过10MB",
                  icon: "none",
                  duration: 2e3
                });
                return;
              }
              const fileExt = res.tempFiles[0].name.split(".").pop().toLowerCase();
              if (!["txt", "epub", "pdf"].includes(fileExt)) {
                uni.showToast({
                  title: "只能上传txt/epub/pdf文件",
                  icon: "none",
                  duration: 2e3
                });
                return;
              }
              _this.novelFilePath = res.tempFiles[0].path;
              uni.showToast({
                title: "文件选择成功",
                icon: "success",
                duration: 2e3
              });
            },
            fail: (err) => {
              formatAppLog("error", "at pages/upload/upload.vue:113", "选择文件失败", err);
              uni.showToast({
                title: "选择文件失败",
                icon: "none",
                duration: 2e3
              });
            }
          });
        }
      },
      // 获取文件真实路径
      getRealPathFromURI(uri) {
        const context = plus.android.runtimeMainActivity();
        plus.android.importClass("android.content.ContentResolver");
        const cursor = context.getContentResolver().query(uri, null, null, null, null);
        if (cursor != null && cursor.moveToFirst()) {
          const column_index = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.Media.DATA);
          const realPath = cursor.getString(column_index);
          cursor.close();
          return realPath;
        }
        return null;
      },
      // 小说类型选择
      onCategoryChange(e) {
        this.selectedCategory = this.categories[e.detail.value];
      },
      // 上传小说
      upload() {
        if (!this.novelFilePath) {
          uni.showToast({
            title: "请先选择小说文件",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        if (!this.selectedCategory) {
          uni.showToast({
            title: "请选择小说类型",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        const fileUploadModule = requireNativePlugin("FileUploadModule");
        const url = "your_upload_api_url";
        fileUploadModule.uploadFile(this.novelFilePath, url, (res) => {
          if (res.success) {
            uni.showToast({
              title: "上传成功",
              icon: "success",
              duration: 2e3
            });
          } else {
            formatAppLog("error", "at pages/upload/upload.vue:174", "上传失败：", res.message);
            uni.showToast({
              title: "上传失败",
              icon: "none",
              duration: 2e3
            });
          }
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 上传小说文件区域 "),
      vue.createElementVNode("view", { class: "form-item" }, [
        vue.createElementVNode("text", { class: "label" }, "选择文件"),
        vue.createElementVNode("button", {
          class: "file-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseFile && $options.chooseFile(...args))
        }, "选取文件"),
        vue.createElementVNode("text", { class: "file-tip" }, "只能上传txt/epub/pdf文件，且不超过10MB")
      ]),
      vue.createCommentVNode(" 小说类型选择器 "),
      vue.createElementVNode("view", { class: "form-item" }, [
        vue.createElementVNode("text", { class: "label" }, "小说类型"),
        vue.createElementVNode("picker", {
          class: "type-picker",
          range: $data.categories,
          onChange: _cache[1] || (_cache[1] = (...args) => $options.onCategoryChange && $options.onCategoryChange(...args))
        }, [
          vue.createElementVNode(
            "view",
            { class: "type-placeholder" },
            vue.toDisplayString($data.selectedCategory || "请选择小说类型"),
            1
            /* TEXT */
          )
        ], 40, ["range"])
      ]),
      vue.createCommentVNode(" 上传按钮 "),
      vue.createElementVNode("view", { class: "upload-button" }, [
        vue.createElementVNode("button", {
          class: "upload-btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.upload && $options.upload(...args))
        }, "上传")
      ])
    ]);
  }
  const PagesUploadUpload = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/upload/upload.vue"]]);
  const searchApi = (keyword) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${BASE_URL}/api/search`,
        method: "GET",
        data: {
          keyword
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const _imports_0 = "/static/icons/deleteAll.png";
  const _sfc_main$b = {
    data() {
      return {
        searchKeyword: "",
        // 搜索关键词
        searchHistory: [],
        // 搜索历史
        rankList: [
          // 榜单数据
          { title: "热搜榜", color: "linear-gradient(135deg, #ff7e5f, #feb47b)" },
          { title: "巅峰榜", color: "linear-gradient(135deg, #00b09b, #96c93d)" },
          { title: "分类榜", color: "linear-gradient(135deg, #8e2de2, #4a00e0)" },
          { title: "评论榜", color: "linear-gradient(135deg, #ff5f6d, #ffc371)" }
        ]
      };
    },
    methods: {
      onInput() {
        formatAppLog("log", "at pages/search/search.vue:68", "输入内容：", this.searchKeyword);
      },
      async onSearch() {
        formatAppLog("log", "at pages/search/search.vue:71", "搜索内容：", this.searchKeyword);
        if (this.searchKeyword.trim() !== "") {
          this.searchHistory.push(this.searchKeyword.trim());
          this.searchKeyword = "";
          try {
            const result = await searchApi(this.searchHistory[this.searchHistory.length - 1]);
            formatAppLog("log", "at pages/search/search.vue:78", "搜索结果:", result);
            uni.navigateTo({
              url: `/pages/search_result/search_result?novelIds=${result.join(",")}`
            });
          } catch (error) {
            formatAppLog("error", "at pages/search/search.vue:84", "搜索请求出错:", error);
          }
        }
      },
      removeHistory(index) {
        this.searchHistory.splice(index, 1);
      },
      clearAllHistory() {
        this.searchHistory = [];
      },
      selectRank(index) {
        formatAppLog("log", "at pages/search/search.vue:95", "Selected rank:", index);
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 搜索框区域 "),
      vue.createElementVNode("view", { class: "search-box" }, [
        vue.createVNode(_component_uni_search_bar, {
          modelValue: $data.searchKeyword,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchKeyword = $event),
          placeholder: "请输入搜索内容",
          radius: "5",
          cancelButton: "none",
          onConfirm: $options.onSearch,
          onInput: $options.onInput
        }, {
          searchIcon: vue.withCtx(() => [
            vue.createVNode(_component_uni_icons, {
              type: "search",
              size: "18",
              color: "#999"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "onConfirm", "onInput"])
      ]),
      vue.createCommentVNode(" 搜索历史区域 "),
      $data.searchHistory.length ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "history-box"
      }, [
        vue.createElementVNode("view", { class: "history-header" }, [
          vue.createElementVNode("text", { class: "history-title" }, "搜索历史"),
          vue.createElementVNode("image", {
            src: _imports_0,
            class: "clear-all-icon",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.clearAllHistory && $options.clearAllHistory(...args))
          })
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.searchHistory, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "history-item"
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(item),
                1
                /* TEXT */
              ),
              vue.createElementVNode("image", {
                src: "/static/icons/deleteOne.png",
                class: "clear-one-icon",
                onClick: ($event) => $options.removeHistory(index)
              }, null, 8, ["src", "onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 榜单区域 "),
      vue.createElementVNode("view", { class: "list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.rankList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "rank-item",
              key: index,
              onClick: ($event) => $options.selectRank(index)
            }, [
              vue.createElementVNode(
                "view",
                { class: "rank-title" },
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "rank-bg",
                  style: vue.normalizeStyle({ backgroundImage: item.color })
                },
                null,
                4
                /* STYLE */
              )
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/search/search.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        categories: ["热门标签", "玄幻", "都市", "历史", "仙侠", "奇幻", "武侠", "悬疑"],
        categoryContent: {
          "热门标签": ["标签1", "标签2", "标签3"],
          "玄幻": ["玄幻1", "玄幻2", "玄幻3"],
          "都市": ["都市1", "都市2", "都市3"],
          "历史": ["历史1", "历史2", "历史3"],
          "仙侠": ["仙侠1", "仙侠2", "仙侠3"],
          "奇幻": ["奇幻1", "奇幻2", "奇幻3"],
          "武侠": ["武侠1", "武侠2", "武侠3"],
          "悬疑": ["悬疑1", "悬疑2", "悬疑3"]
        },
        selectedCategory: "热门标签"
      };
    },
    computed: {
      selectedCategoryContent() {
        return this.categoryContent[this.selectedCategory];
      }
    },
    methods: {
      selectCategory(index) {
        this.selectedCategory = this.categories[index];
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "sort" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.categories, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "sort_one",
              onClick: ($event) => $options.selectCategory(index)
            }, vue.toDisplayString(item), 9, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "label" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($options.selectedCategoryContent, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: index,
                class: "label_sort"
              },
              vue.toDisplayString(item),
              1
              /* TEXT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesSortSort = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/sort/sort.vue"]]);
  const getNovelDetails$1 = (novelId) => {
    return new Promise((resolve, reject) => {
      uni.request({
        // url: 'http://localhost:8888/api/novel_details',
        url: `${BASE_URL}/api/novel_details`,
        method: "GET",
        data: {
          novel_id: novelId
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const request = (options) => {
    return new Promise((resolve, reject) => {
      const token = uni.getStorageSync("token");
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      } else {
        reject(new Error("请先登录"));
        return;
      }
      uni.request({
        ...options,
        header: headers,
        success: (res) => {
          if (res.statusCode === 401) {
            uni.showToast({
              title: "登录失效，请重新登录",
              icon: "none"
            });
            reject(new Error("登录失效，请重新登录"));
          } else {
            resolve(res.data);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const likeNovel = (novelId) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${BASE_URL}/api/like`,
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          novel_id: novelId
        }
      }).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  };
  const _sfc_main$9 = {
    __name: "LikeButton",
    props: {
      novelId: {
        type: String,
        required: true
      },
      novelDetails: {
        type: [Object, null],
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const userId = vue.ref(uni.getStorageSync("userId"));
      const showErrorToast = (message) => {
        uni.showToast({
          title: message,
          icon: "none"
        });
      };
      const handleLike = () => {
        formatAppLog("log", "at components/LikeButton.vue:30", "点赞操作，小说 ID:", props.novelId, "用户 ID:", userId.value);
        likeNovel(props.novelId).then((data) => {
          if (typeof data === "string" && data.includes("您已经点赞过了")) {
            showErrorToast("您已经点赞过了");
          } else {
            formatAppLog("log", "at components/LikeButton.vue:36", "后端返回的点赞操作结果数据:", data);
            formatAppLog("log", "at components/LikeButton.vue:37", "点赞成功:", props.novelId);
            if (props.novelDetails) {
              props.novelDetails.likeCount++;
            }
          }
        }).catch((error) => {
          const errorMessages = {
            "登录失效，请重新登录": "登录失效，请重新登录",
            "请先登录": "请先登录"
          };
          const message = errorMessages[error.message];
          if (message) {
            showErrorToast(message);
          } else {
            formatAppLog("error", "at components/LikeButton.vue:52", "点赞失败:", error);
          }
        });
      };
      const __returned__ = { props, userId, showErrorToast, handleLike, ref: vue.ref, get likeNovel() {
        return likeNovel;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", { onClick: $setup.handleLike }, "点赞");
  }
  const LikeButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-c24ca931"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/components/LikeButton.vue"]]);
  const postComment = (novelId, comment) => {
    return request({
      url: `${BASE_URL}/api/comment`,
      // 替换为实际的后端评论接口地址
      method: "POST",
      data: {
        novelId,
        comment
      }
    });
  };
  const _sfc_main$8 = {
    __name: "CommentButton",
    props: {
      novelId: {
        type: String,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const isCommentBoxVisible = vue.ref(false);
      const commentContent = vue.ref("");
      const userId = vue.ref(uni.getStorageSync("userId"));
      const showErrorToast = (message) => {
        uni.showToast({
          title: message,
          icon: "none"
        });
      };
      const showCommentBox = () => {
        const token = uni.getStorageSync("token");
        if (!token) {
          showErrorToast("请先登录");
          return;
        }
        formatAppLog("log", "at components/CommentButton.vue:43", "显示评论框");
        isCommentBoxVisible.value = true;
      };
      const hideCommentBox = () => {
        formatAppLog("log", "at components/CommentButton.vue:48", "隐藏评论框");
        isCommentBoxVisible.value = false;
        commentContent.value = "";
      };
      const submitComment = () => {
        if (commentContent.value.trim() === "") {
          showErrorToast("评论内容不能为空");
          return;
        }
        formatAppLog("log", "at components/CommentButton.vue:58", "提交评论，小说 ID:", props.novelId, "评论内容:", commentContent.value);
        postComment(props.novelId, commentContent.value).then((data) => {
          formatAppLog("log", "at components/CommentButton.vue:61", "后端返回的评论操作结果数据:", data);
          uni.showToast({
            title: "评论提交成功",
            icon: "success"
          });
          hideCommentBox();
        }).catch((error) => {
          formatAppLog("error", "at components/CommentButton.vue:69", "评论提交失败:", error);
          showErrorToast("评论提交失败，请稍后重试");
        });
      };
      const __returned__ = { props, isCommentBoxVisible, commentContent, userId, showErrorToast, showCommentBox, hideCommentBox, submitComment, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get postComment() {
        return postComment;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        class: "common-button",
        onClick: $setup.showCommentBox
      }, "评论"),
      $setup.isCommentBoxVisible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "comment-box"
      }, [
        vue.withDirectives(vue.createElementVNode(
          "textarea",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.commentContent = $event),
            placeholder: "请输入评论内容"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $setup.commentContent]
        ]),
        vue.createElementVNode("view", { class: "comment-buttons" }, [
          vue.createElementVNode("button", {
            class: "common-button",
            onClick: $setup.submitComment
          }, "提交"),
          vue.createElementVNode("button", {
            class: "common-button",
            onClick: $setup.hideCommentBox
          }, "取消")
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const CommentButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-a7ad8b21"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/components/CommentButton.vue"]]);
  const addTag = (novelId, tag) => {
    return request({
      url: `${BASE_URL}/api/add_tag`,
      // 请根据实际情况修改 API 地址
      method: "POST",
      data: {
        novel_id: novelId,
        tag
      }
    });
  };
  const _sfc_main$7 = {
    __name: "AddTagButton",
    setup(__props, { expose: __expose }) {
      __expose();
      const novelId = vue.ref("");
      const userId = vue.ref(uni.getStorageSync("userId"));
      onLoad((options) => {
        if (options.novel_id) {
          novelId.value = options.novel_id;
        }
      });
      const showErrorToast = (message) => {
        uni.showToast({
          title: message,
          icon: "none"
        });
      };
      const handleAddTag = async () => {
        const token = uni.getStorageSync("token");
        if (!token) {
          showErrorToast("请先登录");
          return;
        }
        uni.showModal({
          title: "添加标签",
          content: "请输入要添加的标签",
          editable: true,
          success: async (res) => {
            if (res.confirm) {
              const tag = res.content;
              try {
                const response = await addTag(novelId.value, tag);
                formatAppLog("log", "at components/AddTagButton.vue:42", "后端返回的添加标签操作结果数据:", response);
                if (response && typeof response === "string" && response.includes("标签添加成功")) {
                  uni.showToast({
                    title: "标签添加成功",
                    icon: "success"
                  });
                } else {
                  showErrorToast("标签添加失败");
                }
              } catch (error) {
                const errorMessages = {
                  "登录失效，请重新登录": "登录失效，请重新登录",
                  "请先登录": "请先登录"
                };
                const message = errorMessages[error.message];
                if (message) {
                  showErrorToast(message);
                } else {
                  formatAppLog("error", "at components/AddTagButton.vue:60", "添加标签失败:", error);
                  showErrorToast("标签添加失败");
                }
              }
            }
          }
        });
      };
      const __returned__ = { novelId, userId, showErrorToast, handleAddTag, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get addTag() {
        return addTag;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", { onClick: $setup.handleAddTag }, "添加标签");
  }
  const AddTagButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-00538b88"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/components/AddTagButton.vue"]]);
  const _sfc_main$6 = {
    __name: "DownloadButton",
    setup(__props, { expose: __expose }) {
      __expose();
      const novelId = vue.ref("");
      const userId = vue.ref(uni.getStorageSync("userId"));
      onLoad((options) => {
        if (options.novel_id) {
          novelId.value = options.novel_id;
        }
      });
      const handleDownload = () => {
        formatAppLog("log", "at components/DownloadButton.vue:19", "下载操作，小说 ID:", novelId.value, "用户 ID:", userId.value);
      };
      const __returned__ = { novelId, userId, handleDownload, ref: vue.ref, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", { onClick: $setup.handleDownload }, "下载");
  }
  const DownloadButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-8017a16b"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/components/DownloadButton.vue"]]);
  const _sfc_main$5 = {
    __name: "CommentBox",
    setup(__props, { expose: __expose }) {
      __expose();
      const comments = vue.ref([]);
      const novelId = vue.ref("");
      onLoad((options) => {
        if (options.novel_id) {
          novelId.value = options.novel_id;
        }
      });
      vue.onMounted(() => {
        if (novelId.value) {
          getNovelDetails$1(novelId.value).then((data) => {
            if (data && data.comments) {
              comments.value = data.comments;
            }
          }).catch((error) => {
            formatAppLog("error", "at components/CommentBox.vue:34", "获取评论数据失败:", error);
          });
        }
      });
      const __returned__ = { comments, novelId, ref: vue.ref, onMounted: vue.onMounted, get getNovelDetails() {
        return getNovelDetails$1;
      }, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "comment-box" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.comments, (comment, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
            vue.createElementVNode(
              "view",
              null,
              "用户名: " + vue.toDisplayString(comment.username),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              null,
              "评论内容: " + vue.toDisplayString(comment.comment),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              null,
              "评论时间: " + vue.toDisplayString(comment.commentTime),
              1
              /* TEXT */
            )
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const CommentBox = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-25a39ff5"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/components/CommentBox.vue"]]);
  const _sfc_main$4 = {
    __name: "novel_details",
    setup(__props, { expose: __expose }) {
      __expose();
      const novelId = vue.ref("");
      const novelDetails = vue.ref(null);
      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const minute = String(date.getMinutes()).padStart(2, "0");
        const second = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      };
      const formattedUploadTime = vue.computed(() => {
        if (novelDetails.value && novelDetails.value.upload_time) {
          const date = new Date(novelDetails.value.upload_time);
          return formatDate(date);
        }
        return "";
      });
      onLoad((options) => {
        if (options.novel_id) {
          novelId.value = options.novel_id;
          getNovelDetails$1(novelId.value).then((data) => {
            formatAppLog("log", "at pages/novel_details/novel_details.vue:68", "后端返回的小说详情数据:", data);
            novelDetails.value = data;
          }).catch((error) => {
            formatAppLog("error", "at pages/novel_details/novel_details.vue:72", "获取小说详情失败:", error);
          });
        }
      });
      const __returned__ = { novelId, novelDetails, formatDate, formattedUploadTime, ref: vue.ref, computed: vue.computed, get onLoad() {
        return onLoad;
      }, get getNovelDetails() {
        return getNovelDetails$1;
      }, LikeButton, CommentButton, AddTagButton, DownloadButton, CommentBox };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "novel-info" }, [
            vue.createElementVNode(
              "view",
              { class: "novel-id" },
              "小说 ID: " + vue.toDisplayString($setup.novelId),
              1
              /* TEXT */
            ),
            $setup.novelDetails ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
              vue.createElementVNode(
                "view",
                null,
                "小说名称: " + vue.toDisplayString($setup.novelDetails.novel_name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                "小说分类: " + vue.toDisplayString($setup.novelDetails.novel_sort),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                "上传时间: " + vue.toDisplayString($setup.formattedUploadTime),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                "点赞量:" + vue.toDisplayString($setup.novelDetails.likeCount),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", null, [
                vue.createTextVNode("标签: "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.novelDetails.tags, (tag, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "span",
                      {
                        key: index,
                        class: "tag"
                      },
                      vue.toDisplayString(tag),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 引入组件 "),
            vue.createElementVNode("view", { class: "button-container" }, [
              $setup.novelDetails ? (vue.openBlock(), vue.createBlock($setup["LikeButton"], {
                key: 0,
                "novel-id": $setup.novelId,
                "novel-details": $setup.novelDetails
              }, null, 8, ["novel-id", "novel-details"])) : vue.createCommentVNode("v-if", true),
              vue.createVNode($setup["CommentButton"], { "novel-id": $setup.novelId }, null, 8, ["novel-id"]),
              vue.createVNode($setup["AddTagButton"], { "novel-id": $setup.novelId }, null, 8, ["novel-id"]),
              vue.createVNode($setup["DownloadButton"], { "novel-id": $setup.novelId }, null, 8, ["novel-id"])
            ])
          ])
        ]),
        vue.createCommentVNode(" 引入评论框组件 "),
        vue.createVNode($setup["CommentBox"])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesNovelDetailsNovelDetails = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/novel_details/novel_details.vue"]]);
  const loginApi = (username, password) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${BASE_URL}/api/login`,
        method: "POST",
        data: {
          username,
          password
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
          // 确保使用表单编码格式
        },
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const _sfc_main$3 = {
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      async login() {
        try {
          const response = await loginApi(this.username, this.password);
          if (response.statusCode === 200) {
            formatAppLog("log", "at pages/login/login.vue:33", "登录成功", response);
            uni.setStorageSync("token", response.data);
            uni.switchTab({
              url: "/pages/profile/profile"
              // 根据实际路径调整
            });
          } else {
            throw new Error("用户名或密码错误");
          }
        } catch (error) {
          formatAppLog("error", "at pages/login/login.vue:44", "登录失败", error);
          uni.showToast({
            title: "登录失败，请检查用户名和密码",
            icon: "none"
          });
        }
      },
      register() {
        formatAppLog("log", "at pages/login/login.vue:54", "点击了注册按钮");
        uni.navigateTo({ url: "/pages/register/register" });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-container" }, [
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("label", { for: "username" }, "用户名:"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "text",
            id: "username",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event),
            placeholder: "请输入用户名"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.username]
        ])
      ]),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("label", { for: "password" }, "密码:"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "password",
            id: "password",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
            placeholder: "请输入密码"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.password]
        ])
      ]),
      vue.createElementVNode("view", { class: "button-group" }, [
        vue.createElementVNode("button", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args))
        }, "登录"),
        vue.createElementVNode("button", {
          onClick: _cache[3] || (_cache[3] = (...args) => $options.register && $options.register(...args))
        }, "注册")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/login/login.vue"]]);
  const registerApi = (username, password) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${BASE_URL}/api/register`,
        // 请替换为实际的后端注册接口地址
        method: "POST",
        data: {
          username,
          password
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const _sfc_main$2 = {
    data() {
      return {
        username: "",
        password: "",
        confirmPassword: ""
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          uni.showToast({
            title: "两次输入的密码不一致，请重新输入！",
            icon: "none"
          });
          return;
        }
        try {
          const response = await registerApi(this.username, this.password);
          formatAppLog("log", "at pages/register/register.vue:41", "注册成功", response);
          uni.showToast({
            title: "注册成功",
            icon: "success"
          });
          uni.navigateTo({ url: "/pages/login/login" });
        } catch (error) {
          formatAppLog("error", "at pages/register/register.vue:49", "注册失败", error);
          uni.showToast({
            title: "注册失败，请稍后重试",
            icon: "none"
          });
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "registration-container" }, [
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("label", { for: "username" }, "用户名:"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "text",
            id: "username",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event),
            placeholder: "请输入用户名"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.username]
        ])
      ]),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("label", { for: "password" }, "密码:"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "password",
            id: "password",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
            placeholder: "请输入密码"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.password]
        ])
      ]),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("label", { for: "confirmPassword" }, "确认密码:"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "password",
            id: "confirmPassword",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.confirmPassword = $event),
            placeholder: "请再次输入密码"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.confirmPassword]
        ])
      ]),
      vue.createElementVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => $options.register && $options.register(...args))
      }, "注册")
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-bac4a35d"], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/register/register.vue"]]);
  const getNovelDetails = (novelIds) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${BASE_URL}/api/novelDetails`,
        // 假设后端接口地址
        method: "GET",
        data: {
          novelIds
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const _sfc_main$1 = {
    data() {
      return {
        novelInfos: []
        // 存储后端返回的包含小说 ID 和小说名的信息列表
      };
    },
    onLoad(options) {
      const novelIds = options.novelIds;
      if (novelIds) {
        this.fetchNovelDetails(novelIds);
      }
    },
    methods: {
      async fetchNovelDetails(novelIds) {
        try {
          const result = await getNovelDetails(novelIds);
          this.novelInfos = result;
        } catch (error) {
          formatAppLog("error", "at pages/search_result/search_result.vue:36", "获取小说详情出错:", error);
        }
      },
      goToNovelDetails(novelId) {
        uni.navigateTo({
          url: `/pages/novel_details/novel_details?novel_id=${novelId}`
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 这里根据后端返回的小说信息列表渲染 "),
      $data.novelInfos.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.novelInfos, (novelInfo, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "novel-item",
              onClick: ($event) => $options.goToNovelDetails(novelInfo.novel_id)
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(novelInfo.novel_name),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        vue.createElementVNode("text", null, "暂无小说详情")
      ]))
    ]);
  }
  const PagesSearchResultSearchResult = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/pages/search_result/search_result.vue"]]);
  __definePage("pages/bookstore/bookstore", PagesBookstoreBookstore);
  __definePage("pages/bookshelf/bookshelf", PagesBookshelfBookshelf);
  __definePage("pages/profile/profile", PagesProfileProfile);
  __definePage("pages/sign_in/sign_in", PagesSignInSignIn);
  __definePage("pages/upload/upload", PagesUploadUpload);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/sort/sort", PagesSortSort);
  __definePage("pages/novel_details/novel_details", PagesNovelDetailsNovelDetails);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/search_result/search_result", PagesSearchResultSearchResult);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/red/Desktop/Hbuilder/3_9_1/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
