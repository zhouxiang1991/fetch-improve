"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _phantom = _interopRequireDefault(require("phantom"));

var _chainAssert = _interopRequireDefault(require("chain-assert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(url) {
    var type,
        instance,
        page,
        content,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'html';

            _chainAssert.default.url(url, 'url');

            _chainAssert.default.string(type, 'type');

            _context.next = 5;
            return _phantom.default.create();

          case 5:
            instance = _context.sent;
            _context.next = 8;
            return instance.createPage();

          case 8:
            page = _context.sent;
            _context.next = 11;
            return page.open(url);

          case 11:
            if (!(type === 'html')) {
              _context.next = 17;
              break;
            }

            _context.next = 14;
            return page.property('content');

          case 14:
            content = _context.sent;
            _context.next = 21;
            break;

          case 17:
            if (!(type === 'text')) {
              _context.next = 21;
              break;
            }

            _context.next = 20;
            return page.property('plainText');

          case 20:
            content = _context.sent;

          case 21:
            _context.next = 23;
            return instance.exit();

          case 23:
            return _context.abrupt("return", content);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;