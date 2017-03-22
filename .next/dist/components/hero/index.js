'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/darrenackers/Projects/carpets-at-home/components/hero/index.js';


var HeroImage = function (_React$Component) {
    (0, _inherits3.default)(HeroImage, _React$Component);

    function HeroImage() {
        (0, _classCallCheck3.default)(this, HeroImage);

        return (0, _possibleConstructorReturn3.default)(this, (HeroImage.__proto__ || (0, _getPrototypeOf2.default)(HeroImage)).apply(this, arguments));
    }

    (0, _createClass3.default)(HeroImage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { style: Styles.FullBackgroundImage,
                src: 'https://s-media-cache-ak0.pinimg.com/564x/37/fc/a1/37fca155dc03aa42529f646bb35a9ce9.jpg',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }));
        }
    }]);

    return HeroImage;
}(_react2.default.Component);

var Styles = {
    FullBackgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'cover',
        zIndex: -1
    }
};

exports.default = HeroImage;