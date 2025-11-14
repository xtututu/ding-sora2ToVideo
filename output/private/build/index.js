"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;

// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'token.yishangcloud.cn', 'pay.xunkecloud.cn']);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: 'AI 视频(Sora2)',
  // 定义AI 字段的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'videoMethod': '模型选择',
      'videoPrompt': '视频提示词',
      'refImage': '参考图片',
      'size': '视频尺寸',
      'seconds': '视频时长',
      'errorTips1': 'AI 字段异常，维护中可联系开发者咨询',
      'errorTips2': '视频创建失败，请检查您的提示词或图片信息，Sora2不支持上传真人图像提示词不允许出现暴力等内容'
    },
    'en-US': {
      'videoMethod': 'Model selection',
      'videoPrompt': 'Video prompt',
      'refImage': 'Reference image',
      'size': 'Video size',
      'seconds': 'Video duration',
      'errorTips1': 'Model selection is required',
      'errorTips2': 'Video creation failed, please check your prompt or image information, Sora2 does not support uploading real people images and does not allow violent content'
    },
    'ja-JP': {
      'videoMethod': 'モデル選択',
      'videoPrompt': 'ビデオ提示词',
      'refImage': '参考画像',
      'size': 'ビデオサイズ',
      'seconds': 'ビデオ时长',
      'errorTips1': 'モデル選択は必須です',
      'errorTips2': 'ビデオ作成失敗、ヒントを確認してください。Sora2は人間画像をアップロードできません。暴力などの内容を含めることはできません'
    }
  },
  errorMessages: {
    // 定义错误信息集合
    'error1': t('errorTips1'),
    'error2': t('errorTips2')
  },
  authorizations: {
    id: 'auth_id',
    // 授权的id，用于context.fetch第三个参数指定使用
    platform: 'yishangcloud',
    // 授权平台，目前可以填写当前平台名称
    type: _dingtalkDocsCoolApp.AuthorizationType.HeaderBearerToken,
    // 授权类型
    required: true,
    // 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "https://token.yishangcloud.cn/",
    // 帮助链接，告诉使用者如何填写这个apikey
    label: '关联账号',
    // 授权平台，告知用户填写哪个平台的信息
    tooltips: '请配置授权',
    // 提示，引导用户添加授权
    icon: {
      // 当前平台的图标
      light: '',
      dark: ''
    }
  },
  // 定义AI 字段的入参
  formItems: [{
    key: 'videoMethod',
    label: t('videoMethod'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: 'sora-2',
      placeholder: '请选择模型',
      options: [{
        key: 'sora-2',
        title: 'sora-2'
      }, {
        key: 'sora-2-hd',
        title: 'sora-2-hd'
      }]
    },
    validator: {
      required: true
    }
  }, {
    key: 'videoPrompt',
    label: t('videoPrompt'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    tooltips: {
      title: t('videoPrompt')
    },
    props: {
      mode: 'single',
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Text, _dingtalkDocsCoolApp.FieldType.Number, _dingtalkDocsCoolApp.FieldType.SingleSelect, _dingtalkDocsCoolApp.FieldType.MultiSelect]
    },
    validator: {
      required: true
    }
  }, {
    key: 'refImage',
    label: t('refImage'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    tooltips: {
      title: '请上传参考图片文件'
    },
    props: {
      mode: 'single',
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Attachment]
    },
    validator: {
      required: false
    }
  }, {
    key: 'size',
    label: t('size'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: '720x1280',
      placeholder: '请选择模型',
      options: [{
        key: '720x1280',
        title: '720x1280'
      }, {
        key: '1280x720',
        title: '1280x720'
      }]
    },
    validator: {
      required: true
    }
  }, {
    key: 'seconds',
    label: t('seconds'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: '10',
      placeholder: '请选择时长',
      options: [{
        key: '10',
        title: '10秒'
      }, {
        key: '15',
        title: '15秒'
      }]
    },
    validator: {
      required: true
    }
  }],
  // 定义AI 字段的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Attachment
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, formItemParams) {
      var videoMethod, videoPrompt, refImage, size, seconds, debugLog, createVideoUrl, inputReference, requestBody, requestOptions, taskResp, videoDetailUrl, detailRequestOptions, videoDetailResp, videoUrl, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            debugLog = function _debugLog(arg) {
              // @ts-ignore
              console.log(JSON.stringify(_objectSpread({
                timestamp: new Date().toISOString()
              }, arg)));
            };
            videoMethod = formItemParams.videoMethod, videoPrompt = formItemParams.videoPrompt, refImage = formItemParams.refImage, size = formItemParams.size, seconds = formItemParams.seconds;
            /** 为方便查看日志，使用此方法替代console.log */
            _context.p = 1;
            createVideoUrl = "http://token.yishangcloud.cn/v1/images/edits"; // 打印API调用参数信息
            // 生成随机值并保存到变量中，供后面使用
            // 构建请求参数，动态添加quality参数
            inputReference = refImage && refImage.length > 0 ? refImage.map(function (item) {
              return item.tmp_url;
            }).filter(function (url) {
              return url;
            }) : [];
            requestBody = {
              model: videoMethod,
              "prompt": videoPrompt,
              seconds: seconds,
              size: size,
              input_reference: inputReference
            };
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestBody)
            };
            _context.n = 2;
            return context.fetch(createVideoUrl, requestOptions, 'auth_id');
          case 2:
            taskResp = _context.v;
            debugLog({
              '=1 视频创建接口结果': taskResp
            });

            // 检查第一个接口是否返回了正确的id
            if (!(taskResp && taskResp.id)) {
              _context.n = 5;
              break;
            }
            // 调用第二个API获取视频详情
            videoDetailUrl = "https://api.chatfire.cn/v1/videos/".concat(taskResp.id);
            detailRequestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-D6FusdO3xic4BFH6QLYQBiKUbcxewqyGAwMIck4xFiPYDPuI'
              }
            };
            _context.n = 3;
            return context.fetch(videoDetailUrl, detailRequestOptions);
          case 3:
            videoDetailResp = _context.v;
            debugLog({
              '=2 视频详情接口结果': videoDetailResp
            });

            // 检查视频详情接口返回的status是否为failed
            if (!(videoDetailResp && videoDetailResp.status === 'failed')) {
              _context.n = 4;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              errorMessage: 'error2'
            });
          case 4:
            // 从视频详情中提取视频URL
            videoUrl = videoDetailResp && videoDetailResp.video_url ? videoDetailResp.video_url : "";
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              // data 类型需与下方 resultType 定义一致
              data: [{
                fileName: videoPrompt + '.mp4',
                type: 'video',
                url: videoUrl
              }]
            });
          case 5:
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              errorMessage: 'error2'
            });
          case 6:
            _context.n = 11;
            break;
          case 7:
            _context.p = 7;
            _t = _context.v;
            console.log('====error', String(_t));
            if (!String(_t).includes('无可用渠道')) {
              _context.n = 8;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              errorMessage: 'error1'
            });
          case 8:
            if (!(String(_t).includes('令牌额度已用尽') || String(_t).includes('quota'))) {
              _context.n = 9;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.QuotaExhausted
            });
          case 9:
            if (!String(_t).includes('无效的令牌')) {
              _context.n = 10;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.ConfigError
            });
          case 10:
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              errorMessage: 'error1'
            });
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[1, 7]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;