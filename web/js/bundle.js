(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(
        "label",
        { htmlFor: "identifier" },
        "Username/email:",
        _react2.default.createElement("br", null),
        _react2.default.createElement("input", { name: "identifier", type: "text", onChange: props.handleType })
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "label",
        { htmlFor: "password" },
        "Password:",
        _react2.default.createElement("br", null),
        _react2.default.createElement("input", { name: "password", type: "password", onChange: props.handleType })
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "button",
        { className: "submitBtn", onClick: props.handleSubmit },
        "Submit"
      )
    )
  );
};

exports.default = LoginForm;

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignupForm = function SignupForm(props) {
  return _react2.default.createElement(
    "form",
    null,
    _react2.default.createElement(
      "label",
      { htmlFor: "email" },
      "Email* (optional)",
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { name: "email", type: "email", onChange: props.handleChange }),
      _react2.default.createElement("br", null)
    ),
    _react2.default.createElement(
      "label",
      { htmlFor: "username" },
      "Username",
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { name: "username", type: "text", onChange: props.handleChange }),
      _react2.default.createElement("br", null)
    ),
    _react2.default.createElement(
      "label",
      { htmlFor: "password" },
      "Password",
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { name: "password", type: "password", onChange: props.handleChange })
    ),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "button",
      { className: "submitBtn", onClick: props.handleSubmit },
      "Submit"
    )
  );
};
exports.default = SignupForm;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginForm = require('./LoginForm.jsx');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _SignupForm = require('./SignupForm.jsx');

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

$.postJSON = function (url, data) {
  return $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: true
  });
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      mode: 'Login',
      identifier: '',
      username: '',
      email: '',
      password: '',
      error: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleType = _this.handleType.bind(_this);
    _this.switchMode = _this.switchMode.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {}
  }, {
    key: 'handleSubmitResponse',
    value: function handleSubmitResponse() {}
  }, {
    key: 'handleType',
    value: function handleType(e) {
      var el = e.target;
      this.setState(_defineProperty({}, el.name, el.value));
    }
  }, {
    key: 'switchMode',
    value: function switchMode() {
      var newMode = this.state.mode === 'Login' ? 'Signup' : 'Login';
      this.setState({ mode: newMode, identifier: '', username: '', email: '', password: '', error: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var form = this.state.mode === 'Signup' ? _react2.default.createElement(_SignupForm2.default, { handleSubmit: this.handleSubmit, handleType: this.handleType }) : _react2.default.createElement(_LoginForm2.default, { handleSubmit: this.handleSubmit, handleType: this.handleType });
      var error = this.state.error ? _react2.default.createElement(
        'p',
        { id: 'errorMsg' },
        this.state.error
      ) : null;
      return _react2.default.createElement(
        'div',
        { id: 'loginBox' },
        _react2.default.createElement(
          'button',
          { className: 'altAuthBtn', onClick: this.switchMode },
          this.state.mode == 'Login' ? 'Need an account?' : 'Already have an account?'
        ),
        _react2.default.createElement(
          'h1',
          { id: 'formTitle' },
          this.state.mode
        ),
        form,
        error
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

},{"./LoginForm.jsx":1,"./SignupForm.jsx":2,"react":"react"}],4:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app.jsx');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

},{"./app.jsx":3,"react":"react","react-dom":"react-dom"}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvTG9naW5Gb3JtLmpzeCIsImFwcC9TaWdudXBGb3JtLmpzeCIsImFwcC9hcHAuanN4IiwiYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7O0FBR0EsSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLEtBQUQsRUFBVztBQUMzQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsWUFBZjtBQUFBO0FBRUUsaURBRkY7QUFHRSxpREFBTyxNQUFLLFlBQVosRUFBeUIsTUFBSyxNQUE5QixFQUFxQyxVQUFVLE1BQU0sVUFBckQ7QUFIRixPQURGO0FBTUUsK0NBTkY7QUFPRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUVBLGlEQUZBO0FBR0UsaURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsVUFBVSxNQUFNLFVBQXZEO0FBSEYsT0FQRjtBQVlFLCtDQVpGO0FBYUU7QUFBQTtBQUFBLFVBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTLE1BQU0sWUFBN0M7QUFBQTtBQUFBO0FBYkY7QUFERixHQURGO0FBbUJELENBcEJEOztrQkF3QmUsUzs7Ozs7Ozs7O0FDM0JmOzs7Ozs7QUFFQSxJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsS0FBRCxFQUFXO0FBQzVCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQU8sU0FBUSxPQUFmO0FBQUE7QUFFRSwrQ0FGRjtBQUdFLCtDQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLFVBQVUsTUFBTSxZQUFqRCxHQUhGO0FBSUU7QUFKRixLQURGO0FBT0U7QUFBQTtBQUFBLFFBQU8sU0FBUSxVQUFmO0FBQUE7QUFFQSwrQ0FGQTtBQUdFLCtDQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLE1BQTVCLEVB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VCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IExvZ2luRm9ybSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZGVudGlmaWVyXCI+XG4gICAgICAgICAgVXNlcm5hbWUvZW1haWw6XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJpZGVudGlmaWVyXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlVHlwZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVUeXBlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2lnbnVwRm9ybSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICBFbWFpbCogKG9wdGlvbmFsKVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgVXNlcm5hbWVcbiAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgIFBhc3N3b3JkXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnRuXCIgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtLmpzeCc7XG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuL1NpZ251cEZvcm0uanN4JztcblxuXG4kLnBvc3RKU09OID0gKHVybCwgZGF0YSkgPT4ge1xuICByZXR1cm4gJC5hamF4KHtcbiAgICB1cmwsXG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBhc3luYzogdHJ1ZSxcbiAgfSk7XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9kZTogJ0xvZ2luJyxcbiAgICAgIGlkZW50aWZpZXI6ICcnLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgZXJyb3I6ICcnLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVHlwZSA9IHRoaXMuaGFuZGxlVHlwZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3dpdGNoTW9kZSA9IHRoaXMuc3dpdGNoTW9kZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG5cbiAgfVxuICBoYW5kbGVTdWJtaXRSZXNwb25zZSgpIHtcblxuICB9XG4gIGhhbmRsZVR5cGUoZSkge1xuICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlbC5uYW1lXTogZWwudmFsdWUgfSk7XG4gIH1cblxuICBzd2l0Y2hNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPSB0aGlzLnN0YXRlLm1vZGUgPT09ICdMb2dpbicgPyAnU2lnbnVwJyA6ICdMb2dpbic7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGU6IG5ld01vZGUsIGlkZW50aWZpZXI6ICcnLCB1c2VybmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBlcnJvcjogJycgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLnN0YXRlLm1vZGUgPT09ICdTaWdudXAnID8gPFNpZ251cEZvcm0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gaGFuZGxlVHlwZT17dGhpcy5oYW5kbGVUeXBlfSAvPiA6IDxMb2dpbkZvcm0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gaGFuZGxlVHlwZT17dGhpcy5oYW5kbGVUeXBlfSAvPjtcbiAgICBjb25zdCBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3IgPyA8cCBpZD1cImVycm9yTXNnXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9wPiA6IG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJsb2dpbkJveFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFsdEF1dGhCdG5cIiBvbkNsaWNrPXt0aGlzLnN3aXRjaE1vZGV9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vZGUgPT0gJ0xvZ2luJyA/ICdOZWVkIGFuIGFjY291bnQ/JyA6ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgxIGlkPVwiZm9ybVRpdGxlXCI+e3RoaXMuc3RhdGUubW9kZX08L2gxPlxuICAgICAgICB7Zm9ybX1cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qc3gnO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=
