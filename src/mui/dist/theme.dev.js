"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAdmin = require("react-admin");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _yellow = _interopRequireDefault(require("@material-ui/core/colors/yellow"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myTheme = (0, _merge["default"])({}, _reactAdmin.defaultTheme, {
  palette: {
    primary: _yellow["default"],
    secondary: _yellow["default"],
    error: _red["default"],
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(',')
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        color: 'yellow' // Some CSS

      }
    }
  }
});
var _default = myTheme;
exports["default"] = _default;