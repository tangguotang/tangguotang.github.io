var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */


var _GameUI = require("./script/GameUI");

var _GameUI2 = _interopRequireDefault(_GameUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameConfig = function () {
    function GameConfig() {
        _classCallCheck(this, GameConfig);
    }

    _createClass(GameConfig, null, [{
        key: "init",
        value: function init() {
            //注册Script或者Runtime引用
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.js", _GameUI2.default);
        }
    }]);

    return GameConfig;
}();

exports.default = GameConfig;

GameConfig.width = 640;
GameConfig.height = 1136;
GameConfig.scaleMode = "fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "test/TestScene.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();

},{"./script/GameUI":3}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameConfig = require("./GameConfig");

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _layaMaxUI = require("./ui/layaMaxUI");

var _layaMaxUI2 = _interopRequireDefault(_layaMaxUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(_GameConfig2.default.width, _GameConfig2.default.height);else Laya.init(_GameConfig2.default.width, _GameConfig2.default.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = _GameConfig2.default.scaleMode;
		Laya.stage.screenMode = _GameConfig2.default.screenMode;
		Laya.stage.alignV = _GameConfig2.default.alignV;
		Laya.stage.alignH = _GameConfig2.default.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = _GameConfig2.default.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (_GameConfig2.default.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (_GameConfig2.default.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (_GameConfig2.default.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	_createClass(Main, [{
		key: "onVersionLoaded",
		value: function onVersionLoaded() {
			//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
			Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
		}
	}, {
		key: "onConfigLoaded",
		value: function onConfigLoaded() {
			//加载IDE指定的场景
			_GameConfig2.default.startScene && Laya.Scene.open(_GameConfig2.default.startScene);
		}
	}]);

	return Main;
}();
//激活启动类


new Main();

},{"./GameConfig":1,"./ui/layaMaxUI":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
var GameUI = function (_Laya$Scene) {
        _inherits(GameUI, _Laya$Scene);

        function GameUI() {
                _classCallCheck(this, GameUI);

                //加载场景文件
                var _this = _possibleConstructorReturn(this, (GameUI.__proto__ || Object.getPrototypeOf(GameUI)).call(this));

                _this.loadScene("test/TestScene.scene");

                //添加3D场景
                var scene = Laya.stage.addChild(new Laya.Scene3D());

                //添加照相机
                var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
                camera.transform.translate(new Laya.Vector3(0, 3, 3));
                camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);

                //添加方向光
                var directionLight = scene.addChild(new Laya.DirectionLight());
                directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
                directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));

                //添加自定义模型
                var box = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1)));
                box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
                var material = new Laya.BlinnPhongMaterial();
                Laya.Texture2D.load("res/layabox.png", Laya.Handler.create(null, function (tex) {
                        material.albedoTexture = tex;
                }));
                box.meshRenderer.material = material;
                return _this;
        }

        return GameUI;
}(Laya.Scene);

exports.default = GameUI;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var CLASS$ = Laya.class;
var STATICATTR$ = Laya.static;
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var Scene = Laya.Scene;
if (!window.ui) window.ui = {};
var TestSceneUI = function (_super) {
	function TestSceneUI() {

		TestSceneUI.__super.call(this);
	}
	CLASS$(TestSceneUI, 'ui.test.TestSceneUI', _super);
	var __proto__ = TestSceneUI.prototype;
	__proto__.createChildren = function () {
		_super.prototype.createChildren.call(this);
		this.loadScene("test/TestScene");
	};
	return TestSceneUI;
}(Scene);
exports.default = ui;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L+a4uOaIj2xheWJveC9MYXlhQWlySURFL3Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9HYW1lQ29uZmlnLmpzIiwic3JjL01haW4uanMiLCJzcmMvc2NyaXB0L0dhbWVVSS5qcyIsInNyYy91aS9sYXlhTWF4VUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztxakJDVkE7OztBQUNBOzs7Ozs7OztJQUVxQixVOzs7Ozs7OytCQUNIO0FBQ1Y7QUFDQSxnQkFBSSxNQUFNLEtBQUssVUFBTCxDQUFnQixRQUExQjtBQUNOLGdCQUFJLGtCQUFKLEVBQXVCLGdCQUF2QjtBQUNHOzs7Ozs7a0JBTGdCLFU7O0FBT3JCLFdBQVcsS0FBWCxHQUFtQixHQUFuQjtBQUNBLFdBQVcsTUFBWCxHQUFvQixJQUFwQjtBQUNBLFdBQVcsU0FBWCxHQUFzQixZQUF0QjtBQUNBLFdBQVcsVUFBWCxHQUF3QixNQUF4QjtBQUNBLFdBQVcsTUFBWCxHQUFvQixLQUFwQjtBQUNBLFdBQVcsTUFBWCxHQUFvQixNQUFwQjtBQUNBLFdBQVcsVUFBWCxHQUF3QixzQkFBeEI7QUFDQSxXQUFXLFNBQVgsR0FBdUIsRUFBdkI7QUFDQSxXQUFXLEtBQVgsR0FBbUIsS0FBbkI7QUFDQSxXQUFXLElBQVgsR0FBa0IsS0FBbEI7QUFDQSxXQUFXLFlBQVgsR0FBMEIsS0FBMUI7QUFDQSxXQUFXLGlCQUFYLEdBQStCLElBQS9COztBQUVBLFdBQVcsSUFBWDs7Ozs7OztBQ3ZCQzs7OztBQUNEOzs7Ozs7OztJQUNNLEk7QUFDTCxpQkFBYztBQUFBOztBQUNiO0FBQ0EsTUFBSSxPQUFPLFFBQVAsQ0FBSixFQUFzQixPQUFPLElBQVAsQ0FBWSxxQkFBVyxLQUF2QixFQUE4QixxQkFBVyxNQUF6QyxFQUF0QixLQUNLLEtBQUssSUFBTCxD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LGdCQUFmO0FBQ0EsRUFIRDtBQUlBLFFBQU8sV0FBUDtBQUNBLENBWmMsQ0FZWixLQVpZLENBQWhCO1FBYWMsTyxHQUFOLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBHYW1lVUkgZnJvbSBcIi4vc2NyaXB0L0dhbWVVSVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YaMU2NyaXB05oiW6ICFUnVudGltZeW8leeUqFxyXG4gICAgICAgIGxldCByZWcgPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblx0XHRyZWcoXCJzY3JpcHQvR2FtZVVJLmpzXCIsR2FtZVVJKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLndpZHRoID0gNjQwO1xyXG5HYW1lQ29uZmlnLmhlaWdodCA9IDExMzY7XHJcbkdhbWVDb25maWcuc2NhbGVNb2RlID1cImZpeGVkd2lkdGhcIjtcclxuR2FtZUNvbmZpZy5zY3JlZW5Nb2RlID0gXCJub25lXCI7XHJcbkdhbWVDb25maWcuYWxpZ25WID0gXCJ0b3BcIjtcclxuR2FtZUNvbmZpZy5hbGlnbkggPSBcImxlZnRcIjtcclxuR2FtZUNvbmZpZy5zdGFydFNjZW5lID0gXCJ0ZXN0L1Rlc3RTY2VuZS5zY2VuZVwiO1xyXG5HYW1lQ29uZmlnLnNjZW5lUm9vdCA9IFwiXCI7XHJcbkdhbWVDb25maWcuZGVidWcgPSBmYWxzZTtcclxuR2FtZUNvbmZpZy5zdGF0ID0gZmFsc2U7XHJcbkdhbWVDb25maWcucGh5c2ljc0RlYnVnID0gZmFsc2U7XHJcbkdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb24gPSB0cnVlO1xyXG5cclxuR2FtZUNvbmZpZy5pbml0KCk7XHJcbiIsIu+7v2ltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHVpIGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKSB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCIvKipcclxuICog5pys56S65L6L6YeH55So6Z2e6ISa5pys55qE5pa55byP5a6e546w77yM6ICM5L2/55So57un5om/6aG16Z2i5Z+657G777yM5a6e546w6aG16Z2i6YC76L6R44CC5ZyoSURF6YeM6Z2i6K6+572u5Zy65pmv55qEUnVudGltZeWxnuaAp+WNs+WPr+WSjOWcuuaZr+i/m+ihjOWFs+iBlFxyXG4gKiDnm7jmr5TohJrmnKzmlrnlvI/vvIznu6fmib/lvI/pobXpnaLnsbvvvIzlj6/ku6Xnm7TmjqXkvb/nlKjpobXpnaLlrprkuYnnmoTlsZ7mgKfvvIjpgJrov4dJREXlhoV2YXLlsZ7mgKflrprkuYnvvInvvIzmr5TlpoJ0aGlzLnRpcExibGzvvIx0aGlzLnNjb3JlTGJs77yM5YW35pyJ5Luj56CB5o+Q56S65pWI5p6cXHJcbiAqIOW7uuiuru+8muWmguaenOaYr+mhtemdoue6p+eahOmAu+i+ke+8jOmcgOimgemikee5geiuv+mXrumhtemdouWGheWkmuS4quWFg+e0oO+8jOS9v+eUqOe7p+aJv+W8j+WGmeazle+8jOWmguaenOaYr+eLrOeri+Wwj+aooeWdl++8jOWKn+iDveWNleS4gO+8jOW7uuiurueUqOiEmuacrOaWueW8j+WunueOsO+8jOavlOWmguWtkOW8ueiEmuacrOOAglxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgTGF5YS5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8v5Yqg6L295Zy65pmv5paH5Lu2XHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJ0ZXN0L1Rlc3RTY2VuZS5zY2VuZVwiKTtcclxuXHJcbiAgICAgICAgLy/mt7vliqAzROWcuuaZr1xyXG4gICAgICAgIHZhciBzY2VuZSA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCgpKTtcclxuXHJcbiAgICAgICAgLy/mt7vliqDnhafnm7jmnLpcclxuICAgICAgICB2YXIgY2FtZXJhID0gKHNjZW5lLmFkZENoaWxkKG5ldyBMYXlhLkNhbWVyYSgwLCAwLjEsIDEwMCkpKTtcclxuICAgICAgICBjYW1lcmEudHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKDAsIDMsIDMpKTtcclxuICAgICAgICBjYW1lcmEudHJhbnNmb3JtLnJvdGF0ZShuZXcgTGF5YS5WZWN0b3IzKC0zMCwgMCwgMCksIHRydWUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy/mt7vliqDmlrnlkJHlhYlcclxuICAgICAgICB2YXIgZGlyZWN0aW9uTGlnaHQgPSBzY2VuZS5hZGRDaGlsZChuZXcgTGF5YS5EaXJlY3Rpb25MaWdodCgpKTtcclxuICAgICAgICBkaXJlY3Rpb25MaWdodC5jb2xvciA9IG5ldyBMYXlhLlZlY3RvcjMoMC42LCAwLjYsIDAuNik7XHJcbiAgICAgICAgZGlyZWN0aW9uTGlnaHQudHJhbnNmb3JtLndvcmxkTWF0cml4LnNldEZvcndhcmQobmV3IExheWEuVmVjdG9yMygxLCAtMSwgMCkpO1xyXG5cclxuICAgICAgICAvL+a3u+WKoOiHquWumuS5ieaooeWei1xyXG4gICAgICAgIHZhciBib3ggPSBzY2VuZS5hZGRDaGlsZChuZXcgTGF5YS5NZXNoU3ByaXRlM0QoTGF5YS5QcmltaXRpdmVNZXNoLmNyZWF0ZUJveCgxLCAxLCAxKSkpO1xyXG4gICAgICAgIGJveC50cmFuc2Zvcm0ucm90YXRlKG5ldyBMYXlhLlZlY3RvcjMoMCwgNDUsIDApLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBMYXlhLkJsaW5uUGhvbmdNYXRlcmlhbCgpO1xyXG5cdFx0TGF5YS5UZXh0dXJlMkQubG9hZChcInJlcy9sYXlhYm94LnBuZ1wiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsIGZ1bmN0aW9uKHRleCkge1xyXG5cdFx0XHRcdG1hdGVyaWFsLmFsYmVkb1RleHR1cmUgPSB0ZXg7XHJcblx0XHR9KSk7XHJcbiAgICAgICAgYm94Lm1lc2hSZW5kZXJlci5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG52YXIgQ0xBU1MkPUxheWEuY2xhc3M7XHJcbnZhciBTVEFUSUNBVFRSJD1MYXlhLnN0YXRpYztcbnZhciBWaWV3PWxheWEudWkuVmlldztcclxudmFyIERpYWxvZz1sYXlhLnVpLkRpYWxvZztcclxudmFyIFNjZW5lPUxheWEuU2NlbmU7XG5pZighd2luZG93LnVpKSB3aW5kb3cudWk9e307XG52YXIgVGVzdFNjZW5lVUk9KGZ1bmN0aW9uKF9zdXBlcil7XHJcblx0XHRmdW5jdGlvbiBUZXN0U2NlbmVVSSgpe1xyXG5cdFx0XHRcclxuXHRcdFx0VGVzdFNjZW5lVUkuX19zdXBlci5jYWxsKHRoaXMpO1xyXG5cdFx0fVxyXG5cdFx0Q0xBU1MkKFRlc3RTY2VuZVVJLCd1aS50ZXN0LlRlc3RTY2VuZVVJJyxfc3VwZXIpO1xyXG5cdFx0dmFyIF9fcHJvdG9fXz1UZXN0U2NlbmVVSS5wcm90b3R5cGU7XHJcblx0XHRfX3Byb3RvX18uY3JlYXRlQ2hpbGRyZW49ZnVuY3Rpb24oKXtcclxuXHRcdFx0X3N1cGVyLnByb3RvdHlwZS5jcmVhdGVDaGlsZHJlbi5jYWxsKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmxvYWRTY2VuZShcInRlc3QvVGVzdFNjZW5lXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFRlc3RTY2VuZVVJO1xyXG5cdH0pKFNjZW5lKTtcbmV4cG9ydCB7dWkgYXMgZGVmYXVsdH07Il19
