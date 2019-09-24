webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/antd/lib/_util/responsiveObserve.js":
false,

/***/ "./node_modules/antd/lib/breadcrumb/Breadcrumb.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/Breadcrumb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js"));

var _menu = _interopRequireDefault(__webpack_require__(/*! ../menu */ "./node_modules/antd/lib/menu/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? React.createElement("span", null, name) : React.createElement("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    var _this;

    _classCallCheck(this, Breadcrumb);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumb).apply(this, arguments));

    _this.getPath = function (path, params) {
      path = (path || '').replace(/^\//, '');
      Object.keys(params).forEach(function (key) {
        path = path.replace(":".concat(key), params[key]);
      });
      return path;
    };

    _this.addChildPath = function (paths) {
      var childPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var params = arguments.length > 2 ? arguments[2] : undefined;

      var originalPaths = _toConsumableArray(paths);

      var path = _this.getPath(childPath, params);

      if (path) {
        originalPaths.push(path);
      }

      return originalPaths;
    };

    _this.genForRoutes = function (_ref) {
      var _ref$routes = _ref.routes,
          routes = _ref$routes === void 0 ? [] : _ref$routes,
          _ref$params = _ref.params,
          params = _ref$params === void 0 ? {} : _ref$params,
          separator = _ref.separator,
          _ref$itemRender = _ref.itemRender,
          itemRender = _ref$itemRender === void 0 ? defaultItemRender : _ref$itemRender;
      var paths = [];
      return routes.map(function (route) {
        var path = _this.getPath(route.path, params);

        if (path) {
          paths.push(path);
        } // generated overlay by route.children


        var overlay = null;

        if (route.children && route.children.length) {
          overlay = React.createElement(_menu["default"], null, route.children.map(function (child) {
            return React.createElement(_menu["default"].Item, {
              key: child.breadcrumbName || child.path
            }, itemRender(child, params, routes, _this.addChildPath(paths, child.path, params)));
          }));
        }

        return React.createElement(_BreadcrumbItem["default"], {
          overlay: overlay,
          separator: separator,
          key: route.breadcrumbName || path
        }, itemRender(route, params, routes, paths));
      });
    };

    _this.renderBreadcrumb = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;
      var crumbs;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          separator = _this$props.separator,
          style = _this$props.style,
          className = _this$props.className,
          routes = _this$props.routes,
          children = _this$props.children;
      var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

      if (routes && routes.length > 0) {
        // generated by route
        crumbs = _this.genForRoutes(_this.props);
      } else if (children) {
        crumbs = React.Children.map(children, function (element, index) {
          if (!element) {
            return element;
          }

          (0, _warning["default"])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb', "Only accepts Breadcrumb.Item as it's children");
          return (0, React.cloneElement)(element, {
            separator: separator,
            key: index
          });
        });
      }

      return React.createElement("div", {
        className: (0, _classnames["default"])(className, prefixCls),
        style: style
      }, crumbs);
    };

    return _this;
  }

  _createClass(Breadcrumb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      (0, _warning["default"])(!('linkRender' in props || 'nameRender' in props), 'Breadcrumb', '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderBreadcrumb);
    }
  }]);

  return Breadcrumb;
}(React.Component);

exports["default"] = Breadcrumb;
Breadcrumb.defaultProps = {
  separator: '/'
};
Breadcrumb.propTypes = {
  prefixCls: PropTypes.string,
  separator: PropTypes.node,
  routes: PropTypes.array,
  params: PropTypes.object
};
//# sourceMappingURL=Breadcrumb.js.map


/***/ }),

/***/ "./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js":
/*!************************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ../dropdown/dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    var _this;

    _classCallCheck(this, BreadcrumbItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbItem).apply(this, arguments));

    _this.renderBreadcrumbItem = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          separator = _a.separator,
          children = _a.children,
          overlay = _a.overlay,
          restProps = __rest(_a, ["prefixCls", "separator", "children", "overlay"]);

      var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
      var link;

      if ('href' in _this.props) {
        link = React.createElement("a", _extends({
          className: "".concat(prefixCls, "-link")
        }, restProps), children);
      } else {
        link = React.createElement("span", _extends({
          className: "".concat(prefixCls, "-link")
        }, restProps), children);
      } // wrap to dropDown


      link = _this.renderBreadcrumbNode(link, prefixCls);

      if (children) {
        return React.createElement("span", null, link, React.createElement("span", {
          className: "".concat(prefixCls, "-separator")
        }, separator));
      }

      return null;
    };
    /**
     * if overlay is have
     * Wrap a DropDown
     */


    _this.renderBreadcrumbNode = function (breadcrumbItem, prefixCls) {
      var overlay = _this.props.overlay;

      if (overlay) {
        return React.createElement(_dropdown["default"], {
          overlay: overlay,
          placement: "bottomCenter"
        }, React.createElement("span", {
          className: "".concat(prefixCls, "-overlay-link")
        }, breadcrumbItem, React.createElement(_icon["default"], {
          type: "down"
        })));
      }

      return breadcrumbItem;
    };

    return _this;
  }

  _createClass(BreadcrumbItem, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderBreadcrumbItem);
    }
  }]);

  return BreadcrumbItem;
}(React.Component);

exports["default"] = BreadcrumbItem;
BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
  separator: '/'
};
BreadcrumbItem.propTypes = {
  prefixCls: PropTypes.string,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string
};
//# sourceMappingURL=BreadcrumbItem.js.map


/***/ }),

/***/ "./node_modules/antd/lib/breadcrumb/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! ./Breadcrumb */ "./node_modules/antd/lib/breadcrumb/Breadcrumb.js"));

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Breadcrumb["default"].Item = _BreadcrumbItem["default"];
var _default = _Breadcrumb["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/col/index.js":
false,

/***/ "./node_modules/antd/lib/dropdown/dropdown.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/dropdown.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDropdown = _interopRequireDefault(__webpack_require__(/*! rc-dropdown */ "./node_modules/rc-dropdown/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Placements = (0, _type.tuple)('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));

    _this.renderOverlay = function (prefixCls) {
      // rc-dropdown already can process the function of overlay, but we have check logic here.
      // So we need render the element to check and pass back to rc-dropdown.
      var overlay = _this.props.overlay;
      var overlayNode;

      if (typeof overlay === 'function') {
        overlayNode = overlay();
      } else {
        overlayNode = overlay;
      }

      overlayNode = React.Children.only(overlayNode);
      var overlayProps = overlayNode.props; // Warning if use other mode

      (0, _warning["default"])(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly
      // menu should be focusable in dropdown defaultly

      var _overlayProps$selecta = overlayProps.selectable,
          selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
          _overlayProps$focusab = overlayProps.focusable,
          focusable = _overlayProps$focusab === void 0 ? true : _overlayProps$focusab;
      var expandIcon = React.createElement("span", {
        className: "".concat(prefixCls, "-menu-submenu-arrow")
      }, React.createElement(_icon["default"], {
        type: "right",
        className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
      }));
      var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlay : React.cloneElement(overlayNode, {
        mode: 'vertical',
        selectable: selectable,
        focusable: focusable,
        expandIcon: expandIcon
      });
      return fixedModeOverlay;
    };

    _this.renderDropDown = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          children = _this$props.children,
          trigger = _this$props.trigger,
          disabled = _this$props.disabled,
          getPopupContainer = _this$props.getPopupContainer;
      var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
      var child = React.Children.only(children);
      var dropdownTrigger = React.cloneElement(child, {
        className: (0, _classnames["default"])(child.props.className, "".concat(prefixCls, "-trigger")),
        disabled: disabled
      });
      var triggerActions = disabled ? [] : trigger;
      var alignPoint;

      if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
        alignPoint = true;
      }

      return React.createElement(_rcDropdown["default"], _extends({
        alignPoint: alignPoint
      }, _this.props, {
        prefixCls: prefixCls,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        transitionName: _this.getTransitionName(),
        trigger: triggerActions,
        overlay: function overlay() {
          return _this.renderOverlay(prefixCls);
        }
      }), dropdownTrigger);
    };

    return _this;
  }

  _createClass(Dropdown, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var _this$props2 = this.props,
          _this$props2$placemen = _this$props2.placement,
          placement = _this$props2$placemen === void 0 ? '' : _this$props2$placemen,
          transitionName = _this$props2.transitionName;

      if (transitionName !== undefined) {
        return transitionName;
      }

      if (placement.indexOf('top') >= 0) {
        return 'slide-down';
      }

      return 'slide-up';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderDropDown);
    }
  }]);

  return Dropdown;
}(React.Component);

exports["default"] = Dropdown;
Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1,
  placement: 'bottomLeft'
};
//# sourceMappingURL=dropdown.js.map


/***/ }),

/***/ "./node_modules/antd/lib/grid/RowContext.js":
false,

/***/ "./node_modules/antd/lib/grid/col.js":
false,

/***/ "./node_modules/antd/lib/grid/index.js":
false,

/***/ "./node_modules/antd/lib/grid/row.js":
false,

/***/ "./node_modules/antd/lib/layout/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(__webpack_require__(/*! ./layout */ "./node_modules/antd/lib/layout/layout.js"));

var _Sider = _interopRequireDefault(__webpack_require__(/*! ./Sider */ "./node_modules/antd/lib/layout/Sider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_layout["default"].Sider = _Sider["default"];
var _default = _layout["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/pagination/MiniSelect.js":
false,

/***/ "./node_modules/antd/lib/pagination/Pagination.js":
false,

/***/ "./node_modules/antd/lib/pagination/index.js":
false,

/***/ "./node_modules/antd/lib/row/index.js":
false,

/***/ "./node_modules/antd/lib/select/index.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_bind.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/enquire-js/main.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
false,

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
false,

/***/ "./node_modules/enquire.js/src/Util.js":
false,

/***/ "./node_modules/enquire.js/src/index.js":
false,

/***/ "./node_modules/exenv/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/is-what/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "./node_modules/next-server/dist/lib/mitt.js":
false,

/***/ "./node_modules/next-server/dist/lib/request-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/router-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/router.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next-server/dist/lib/utils.js":
false,

/***/ "./node_modules/next-server/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/next-server/node_modules/react-is/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/punycode/punycode.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/rc-drawer/es/DrawerChild.js":
false,

/***/ "./node_modules/rc-drawer/es/DrawerWrapper.js":
false,

/***/ "./node_modules/rc-drawer/es/index.js":
false,

/***/ "./node_modules/rc-drawer/es/utils.js":
false,

/***/ "./node_modules/rc-dropdown/es/Dropdown.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dropdown/es/Dropdown.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-dropdown/es/placements.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    if ('visible' in props) {
      _this.state = {
        visible: props.visible
      };
    } else {
      _this.state = {
        visible: props.defaultVisible
      };
    }
    return _this;
  }

  Dropdown.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    }
    return null;
  };

  Dropdown.prototype.getOverlayElement = function getOverlayElement() {
    var overlay = this.props.overlay;

    var overlayElement = void 0;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  };

  Dropdown.prototype.getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = this.props.overlay;

    if (typeof overlay === 'function') {
      return this.getMenuElement;
    }
    return this.getMenuElement();
  };

  Dropdown.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Dropdown.prototype.getOpenClassName = function getOpenClassName() {
    var _props = this.props,
        openClassName = _props.openClassName,
        prefixCls = _props.prefixCls;

    if (openClassName !== undefined) {
      return openClassName;
    }
    return prefixCls + '-open';
  };

  Dropdown.prototype.renderChildren = function renderChildren() {
    var children = this.props.children;
    var visible = this.state.visible;

    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(childrenProps.className, this.getOpenClassName());
    return visible && children ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(children, { className: childClassName }) : children;
  };

  Dropdown.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        transitionName = _props2.transitionName,
        animation = _props2.animation,
        align = _props2.align,
        placement = _props2.placement,
        getPopupContainer = _props2.getPopupContainer,
        showAction = _props2.showAction,
        hideAction = _props2.hideAction,
        overlayClassName = _props2.overlayClassName,
        overlayStyle = _props2.overlayStyle,
        trigger = _props2.trigger,
        otherProps = _objectWithoutProperties(_props2, ['prefixCls', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger']);

    var triggerHideAction = hideAction;
    if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
      triggerHideAction = ['click'];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      rc_trigger__WEBPACK_IMPORTED_MODULE_3__["default"],
      _extends({}, otherProps, {
        prefixCls: prefixCls,
        ref: this.saveTrigger,
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_5__["default"],
        action: trigger,
        showAction: showAction,
        hideAction: triggerHideAction || [],
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: this.state.visible,
        afterPopupVisibleChange: this.afterVisibleChange,
        popup: this.getMenuElementOrLambda(),
        onPopupVisibleChange: this.onVisibleChange,
        getPopupContainer: getPopupContainer
      }),
      this.renderChildren()
    );
  };

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Dropdown.propTypes = {
  minOverlayWidthMatchTrigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOverlayClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  overlayClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  openClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  alignPoint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  hideAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Dropdown.defaultProps = {
  prefixCls: 'rc-dropdown',
  trigger: ['hover'],
  showAction: [],
  overlayClassName: '',
  overlayStyle: {},
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {},

  placement: 'bottomLeft'
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClick = function (e) {
    var props = _this2.props;
    var overlayProps = _this2.getOverlayElement().props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      _this2.setState({
        visible: false
      });
    }
    if (props.onOverlayClick) {
      props.onOverlayClick(e);
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  this.onVisibleChange = function (visible) {
    var props = _this2.props;
    if (!('visible' in props)) {
      _this2.setState({
        visible: visible
      });
    }
    props.onVisibleChange(visible);
  };

  this.getMinOverlayWidthMatchTrigger = function () {
    var _props3 = _this2.props,
        minOverlayWidthMatchTrigger = _props3.minOverlayWidthMatchTrigger,
        alignPoint = _props3.alignPoint;

    if ('minOverlayWidthMatchTrigger' in _this2.props) {
      return minOverlayWidthMatchTrigger;
    }

    return !alignPoint;
  };

  this.getMenuElement = function () {
    var prefixCls = _this2.props.prefixCls;

    var overlayElement = _this2.getOverlayElement();
    var extraOverlayProps = {
      prefixCls: prefixCls + '-menu',
      onClick: _this2.onClick
    };
    if (typeof overlayElement.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(overlayElement, extraOverlayProps);
  };

  this.afterVisibleChange = function (visible) {
    if (visible && _this2.getMinOverlayWidthMatchTrigger()) {
      var overlayNode = _this2.getPopupDomNode();
      var rootNode = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(_this2);
      if (rootNode && overlayNode && rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.minWidth = rootNode.offsetWidth + 'px';
        if (_this2.trigger && _this2.trigger._component && _this2.trigger._component.alignInstance) {
          _this2.trigger._component.alignInstance.forceAlign();
        }
      }
    }
  };

  this.saveTrigger = function (node) {
    _this2.trigger = node;
  };
};

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_6__["polyfill"])(Dropdown);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/rc-dropdown/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-dropdown/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/rc-dropdown/es/Dropdown.js");

/* harmony default export */ __webpack_exports__["default"] = (_Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-dropdown/es/placements.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-dropdown/es/placements.js ***!
  \***************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};

/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-pagination/es/KeyCode.js":
false,

/***/ "./node_modules/rc-pagination/es/Options.js":
false,

/***/ "./node_modules/rc-pagination/es/Pager.js":
false,

/***/ "./node_modules/rc-pagination/es/Pagination.js":
false,

/***/ "./node_modules/rc-pagination/es/index.js":
false,

/***/ "./node_modules/rc-pagination/es/locale/zh_CN.js":
false,

/***/ "./node_modules/rc-select/es/DropdownMenu.js":
false,

/***/ "./node_modules/rc-select/es/OptGroup.js":
false,

/***/ "./node_modules/rc-select/es/Option.js":
false,

/***/ "./node_modules/rc-select/es/PropTypes.js":
false,

/***/ "./node_modules/rc-select/es/Select.js":
false,

/***/ "./node_modules/rc-select/es/SelectTrigger.js":
false,

/***/ "./node_modules/rc-select/es/index.js":
false,

/***/ "./node_modules/rc-select/es/util.js":
false,

/***/ "./node_modules/rc-util/es/Children/toArray.js":
false,

/***/ "./node_modules/rc-util/es/PortalWrapper.js":
false,

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
false,

/***/ "./node_modules/rc-util/es/switchScrollingEffect.js":
false,

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/react-helmet/lib/Helmet.js":
false,

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
false,

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
false,

/***/ "./node_modules/react-lazy-load-image-component/build/index.js":
false,

/***/ "./node_modules/react-redux/es/components/Context.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/batch.js":
false,

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/react-side-effect/lib/index.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.min.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/url/url.js":
false,

/***/ "./node_modules/url/util.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a.Footer;

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "layout"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "1"
  }, "nav 1"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "2"
  }, "nav 2"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "3"
  }, "nav 3"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content, {
    style: {
      padding: '0 50px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      margin: '16px 0'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default.a.Item, null, "Home"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default.a.Item, null, "List"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default.a.Item, null, "App")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      background: '#fff',
      padding: 24,
      minHeight: 280
    }
  }, "Content")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "Ant Design \xA92018 Created by Ant UED"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Container.js":
false,

/***/ "./src/components/Footer.js":
false,

/***/ "./src/components/Layout.js":
false,

/***/ "./src/components/Left.js":
false,

/***/ "./src/components/Navber.js":
false,

/***/ "./src/components/NavberDesktop.js":
false,

/***/ "./src/components/NavberMobile.js":
false,

/***/ "./src/components/index.js":
false,

/***/ "./src/helpers/app.js":
false,

/***/ "./src/redux/app/actions.js":
false,

/***/ "./src/redux/hook.js":
false,

/***/ "./static/images/logo.svg":
false,

/***/ "./static/images/logo_footer.svg":
false

})
//# sourceMappingURL=index.js.e443cb29cd9de907dfc5.hot-update.js.map