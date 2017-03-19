'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _menu = require('../components/menu');

var _menu2 = _interopRequireDefault(_menu);

var _hero = require('../components/hero');

var _hero2 = _interopRequireDefault(_hero);

var _measureForm = require('../components/measureForm');

var _measureForm2 = _interopRequireDefault(_measureForm);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/darrenackers/Projects/carpets-at-home/pages/index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.getLocation = function () {
            var geolocation = navigator.geolocation;

            new _promise2.default(function (resolve, reject) {
                if (!geolocation) {
                    reject(new Error('Not Supported'));
                }

                geolocation.getCurrentPosition(function (position) {
                    console.log(position);
                    var distance = _this.calculateDistance(53.441364, -2.714846, position.coords.latitude, position.coords.longitude);

                    _this.setState({
                        distance: distance
                    });
                    resolve(position);
                }, function () {
                    reject(new Error('Permission denied'));
                });
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
        key: 'deg2rad',
        value: function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }
    }, {
        key: 'calculateDistance',
        value: function calculateDistance(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
            var dLon = this.deg2rad(lon2 - lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getLocation();
        }
    }, {
        key: 'renderMessage',
        value: function renderMessage() {
            if (this.state && this.state.distance && this.state.distance < 12) {

                var message = 'You are ' + this.state.distance + ' miles away';

                return _react2.default.createElement(_semanticUiReact.Message, {
                    success: true,
                    header: 'Wehey!',
                    content: message,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                });
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Carpets At Home'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            })), this.renderMessage(), _react2.default.createElement(_menu2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_hero2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_measureForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            })));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;