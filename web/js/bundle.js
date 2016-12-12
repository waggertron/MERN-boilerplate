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
      { action: "#" },
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
        { type: "button", className: "submitBtn", onClick: props.handleSubmit },
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
    { action: "#" },
    _react2.default.createElement(
      "label",
      { htmlFor: "email" },
      "Email* (optional)",
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { name: "email", type: "email", onChange: props.handleType }),
      _react2.default.createElement("br", null)
    ),
    _react2.default.createElement(
      "label",
      { htmlFor: "username" },
      "Username",
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { name: "username", type: "text", onChange: props.handleType }),
      _react2.default.createElement("br", null)
    ),
    _react2.default.createElement(
      "label",
      { htmlFor: "password" },
      "Password",
      _react2.default.createElement("br", null),
      _react2.default.createElement("input", { name: "password", type: "password", onChange: props.handleType })
    ),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "button",
      { type: "button", className: "submitBtn", onClick: props.handleSubmit },
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

var postJSON = function postJSON(url, data) {
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
    value: function handleSubmit() {
      var _this2 = this;

      var data = {};
      if (this.state.mode === 'Login') {
        data.identifier = this.state.identifier;
        data.password = this.state.password;
      } else {
        data.username = this.state.username;
        data.password = this.state.password;
        if (this.state.email) data.email = this.state.email;
      }
      console.log(data);
      postJSON('/' + this.state.mode, data).then(function (res) {
        _this2.handleSubmitResponse(res);
      });
    }
  }, {
    key: 'handleSubmitResponse',
    value: function handleSubmitResponse(res) {
      console.log(res);
    }
  }, {
    key: 'handleType',
    value: function handleType(e) {
      var _this3 = this;

      var el = e.target;
      console.log(el.name);
      console.log(el.value);
      console.log(this.state);
      this.setState(_defineProperty({}, el.name, el.value));
      setTimeout(function () {
        return console.log(_this3.state, 0);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbGFuZGluZy9Mb2dpbkZvcm0uanN4IiwiYXBwL2xhbmRpbmcvU2lnbnVwRm9ybS5qc3giLCJhcHAvbGFuZGluZy9hcHAuanN4IiwiYXBwL2xhbmRpbmcvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7QUFHQSxJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRCxFQUFXO0FBQzNCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQU0sUUFBTyxHQUFiO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxZQUFmO0FBQUE7QUFFRSxpREFGRjtBQUdFLGlEQUFPLE1BQUssWUFBWixFQUF5QixNQUFLLE1BQTlCLEVBQXFDLFVBQVUsTUFBTSxVQUFyRDtBQUhGLE9BREY7QUFNRSwrQ0FORjtBQU9FO0FBQUE7QUFBQSxVQUFPLFNBQVEsVUFBZjtBQUFBO0FBRUEsaURBRkE7QUFHRSxpREFBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxVQUFVLE1BQU0sVUFBdkQ7QUFIRixPQVBGO0FBWUUsK0NBWkY7QUFhRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxXQUFoQyxFQUE0QyxTQUFTLE1BQU0sWUFBM0Q7QUFBQTtBQUFBO0FBYkY7QUFERixHQURGO0FBbUJELENBcEJEOztrQkF3QmUsUzs7Ozs7Ozs7O0FDM0JmOzs7Ozs7QUFFQSxJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsS0FBRCxFQUFXO0FBQzVCLFNBQ0U7QUFBQTtBQUFBLE1BQU0sUUFBTyxHQUFiO0FBQ0U7QUFBQTtBQUFBLFFBQU8sU0FBUSxPQUFmO0FBQUE7QUFFRSwrQ0FGRjtBQUdFLCtDQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLFVBQVUsTUFBTSxVQUFqRCxHQUhGO0FBSUU7QUFKRixLQURGO0FBT0U7QUFB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LEtBQW9CLE9BQXBCLEdBQThCLFFBQTlCLEdBQXlDLE9BQXpEO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBRSxNQUFNLE9BQVIsRUFBaUIsWUFBWSxFQUE3QixFQUFpQyxVQUFVLEVBQTNDLEVBQStDLE9BQU8sRUFBdEQsRUFBMEQsVUFBVSxFQUFwRSxFQUF3RSxPQUFPLEVBQS9FLEVBQWQ7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBTSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsUUFBcEIsR0FBK0Isc0RBQVksY0FBYyxLQUFLLFlBQS9CLEVBQTZDLFlBQVksS0FBSyxVQUE5RCxHQUEvQixHQUE4RyxxREFBVyxjQUFjLEtBQUssWUFBOUIsRUFBNEMsWUFBWSxLQUFLLFVBQTdELEdBQTNIO0FBQ0EsVUFBTSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUI7QUFBQTtBQUFBLFVBQUcsSUFBRyxVQUFOO0FBQWtCLGFBQUssS0FBTCxDQUFXO0FBQTdCLE9BQW5CLEdBQTZELElBQTNFO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLFVBQVI7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLFlBQWxCLEVBQStCLFNBQVMsS0FBSyxVQUE3QztBQUNHLGVBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsT0FBbkIsR0FBNkIsa0JBQTdCLEdBQWtEO0FBRHJELFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSSxJQUFHLFdBQVA7QUFBb0IsZUFBSyxLQUFMLENBQVc7QUFBL0IsU0FKRjtBQUtHLFlBTEg7QUFNRztBQU5ILE9BREY7QUFVRDs7Ozs7O2tCQUtZLEc7Ozs7O0FDcEZmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsbUJBQVMsTUFBVCxDQUFnQixrREFBaEIsRUFBeUIsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgTG9naW5Gb3JtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZGVudGlmaWVyXCI+XG4gICAgICAgICAgVXNlcm5hbWUvZW1haWw6XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJpZGVudGlmaWVyXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlVHlwZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVUeXBlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic3VibWl0QnRuXCIgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgIEVtYWlsKiAob3B0aW9uYWwpXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZVR5cGV9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgVXNlcm5hbWVcbiAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlVHlwZX0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICBQYXNzd29yZFxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVUeXBlfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic3VibWl0QnRuXCIgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtLmpzeCc7XG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuL1NpZ251cEZvcm0uanN4JztcblxuXG5jb25zdCBwb3N0SlNPTiA9ICh1cmwsIGRhdGEpID0+IHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsLFxuICAgIHR5cGU6ICdQT1NUJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgYXN5bmM6IHRydWUsXG4gIH0pO1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vZGU6ICdMb2dpbicsXG4gICAgICBpZGVudGlmaWVyOiAnJyxcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGVycm9yOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVR5cGUgPSB0aGlzLmhhbmRsZVR5cGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaE1vZGUgPSB0aGlzLnN3aXRjaE1vZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSAnTG9naW4nKSB7XG4gICAgICBkYXRhLmlkZW50aWZpZXIgPSB0aGlzLnN0YXRlLmlkZW50aWZpZXI7XG4gICAgICBkYXRhLnBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS51c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWU7XG4gICAgICBkYXRhLnBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZDtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsKSBkYXRhLmVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcG9zdEpTT04oYC8ke3RoaXMuc3RhdGUubW9kZX1gLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzcG9uc2UocmVzKTtcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVTdWJtaXRSZXNwb25zZShyZXMpIHtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICB9XG4gIGhhbmRsZVR5cGUoZSkge1xuICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XG4gICAgY29uc29sZS5sb2coZWwubmFtZSk7XG4gICAgY29uc29sZS5sb2coZWwudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZWwubmFtZV06IGVsLnZhbHVlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZSwgMCkpO1xuICB9XG5cbiAgc3dpdGNoTW9kZSgpIHtcbiAgICBjb25zdCBuZXdNb2RlID0gdGhpcy5zdGF0ZS5tb2RlID09PSAnTG9naW4nID8gJ1NpZ251cCcgOiAnTG9naW4nO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlOiBuZXdNb2RlLCBpZGVudGlmaWVyOiAnJywgdXNlcm5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgZXJyb3I6ICcnIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmb3JtID0gdGhpcy5zdGF0ZS5tb2RlID09PSAnU2lnbnVwJyA/IDxTaWdudXBGb3JtIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGhhbmRsZVR5cGU9e3RoaXMuaGFuZGxlVHlwZX0gLz4gOiA8TG9naW5Gb3JtIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGhhbmRsZVR5cGU9e3RoaXMuaGFuZGxlVHlwZX0gLz47XG4gICAgY29uc3QgZXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yID8gPHAgaWQ9XCJlcnJvck1zZ1wiPnt0aGlzLnN0YXRlLmVycm9yfTwvcD4gOiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibG9naW5Cb3hcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbHRBdXRoQnRuXCIgb25DbGljaz17dGhpcy5zd2l0Y2hNb2RlfT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RlID09ICdMb2dpbicgPyAnTmVlZCBhbiBhY2NvdW50PycgOiAnQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/J31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMSBpZD1cImZvcm1UaXRsZVwiPnt0aGlzLnN0YXRlLm1vZGV9PC9oMT5cbiAgICAgICAge2Zvcm19XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanN4JztcblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
