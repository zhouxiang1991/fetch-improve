"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _phantom = _interopRequireDefault(require("phantom"));

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
            _context.next = 3;
            return _phantom.default.create();

          case 3:
            instance = _context.sent;
            _context.next = 6;
            return instance.createPage();

          case 6:
            page = _context.sent;
            _context.next = 9;
            return page.open(url);

          case 9:
            if (!(type === 'html')) {
              _context.next = 15;
              break;
            }

            _context.next = 12;
            return page.property('content');

          case 12:
            content = _context.sent;
            _context.next = 19;
            break;

          case 15:
            if (!(type === 'text')) {
              _context.next = 19;
              break;
            }

            _context.next = 18;
            return page.property('plainText');

          case 18:
            content = _context.sent;

          case 19:
            _context.next = 21;
            return instance.exit();

          case 21:
            return _context.abrupt("return", content);

          case 22:
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