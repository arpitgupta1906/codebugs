'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _election = require('../../ethereum/election');

var _election2 = _interopRequireDefault(_election);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/workspace/codefundo/pages/elections/createVoterList.js?entry';


var createVoterList = function (_Component) {
  (0, _inherits3.default)(createVoterList, _Component);

  function createVoterList() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, createVoterList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createVoterList.__proto__ || (0, _getPrototypeOf2.default)(createVoterList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      UID: '',
      age: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, UID, age, accounts, _id, _age;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, UID = _this$state.UID, age = _this$state.age;

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _id = parseInt(_this.state.UID, 10);
                _age = parseInt(_this.state.age, 10);
                _context.next = 11;
                return _election2.default.methods.addInfoVoters(_this.state.name, _id, _age).send({
                  from: accounts[0]
                });

              case 11:
                _routes.Router.pushRoute('/');

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:

                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(createVoterList, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('div', { className: 'ui one column stackable page grid', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('div', { className: 'column twelve wide', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', { className: 'ui card', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'content', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Add Voters')), _react2.default.createElement('div', { className: 'content', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', { className: 'ui equal width form', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('div', { className: 'fields', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('div', { className: 'field', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Full Name of Voter'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })))), _react2.default.createElement('div', { className: 'fields', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('div', { className: 'field', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Unique Identification Number'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.UID,
        onChange: function onChange(event) {
          return _this3.setState({ UID: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })))), _react2.default.createElement('div', { className: 'fields', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', { className: 'field', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Age'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.age,
        onChange: function onChange(event) {
          return _this3.setState({ age: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement('button', { loading: this.state.loading, className: 'fluid ui blue button', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('i', { className: 'user icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), 'Add Voter'))))))));
    }
  }]);

  return createVoterList;
}(_react.Component);

exports.default = createVoterList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VsZWN0aW9ucy9jcmVhdGVWb3Rlckxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiRWxlY3Rpb24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsImNyZWF0ZVZvdGVyTGlzdCIsInN0YXRlIiwibmFtZSIsIlVJRCIsImFnZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJfaWQiLCJwYXJzZUludCIsIl9hZ2UiLCJtZXRob2RzIiwiYWRkSW5mb1ZvdGVycyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVM7O0FBQ2hDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7Ozs7OzhOLEFBSUw7WUFBUSxBQUNFLEFBQ1Q7V0FGTyxBQUVILEFBQ0o7V0FITyxBQUdILEFBQ0Q7b0JBSkksQUFJVSxBQUNkO2VBQVMsQSxBQUxMO0FBQUEsQUFDSixhQU9ILEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3dEQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFFVDs7c0JBRlMsQUFFVCxBQUFNOzhCQUNjLE1BSFgsQUFHZ0IsT0FIaEIsQUFHTixtQkFITSxBQUdOLE1BSE0sQUFHRCxrQkFIQyxBQUdELEtBSEMsQUFHRyxrQkFISCxBQUdHLEFBQ1o7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFB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QSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNGO0FBREU7eUJBQ0QsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNTO0FBRFQ7QUFBQSx5QkFDUyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEVCxBQUNTLEFBQ0Esd0JBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsS0FBSyxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBRnZEOztvQkFBQTtzQkE3QlQsQUF5QkYsQUFDSSxBQUNGLEFBRVMsQUFPVjtBQVBVO0FBQ0UsNkJBTVosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFwQ0MsQUFvQ0QsQUFDQTtBQURBOzBCQUNBLGNBQUEsWUFBUSxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFVLFdBQXRDLEFBQWdEO29CQUFoRDtzQkFBQSxBQUNJO0FBREo7OENBQ08sV0FBSCxBQUFhO29CQUFiO3NCQURKLEFBQ0k7QUFBQTtVQWpERixBQUNFLEFBQ0gsQUFDSyxBQUNKLEFBSUUsQUFFTCxBQUNFLEFBcUNELEFBYUM7Ozs7O0FBdkcyQixBLEFBMEc5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjcmVhdGVWb3Rlckxpc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL3dvcmtzcGFjZS9jb2RlZnVuZG8ifQ==