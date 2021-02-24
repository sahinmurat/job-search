"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _customErrorHandler = require("../helper/customErrorHandler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//firestore
var devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};
var prodConfig = {};
var config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

var Firebase =
/*#__PURE__*/
function () {
  function Firebase() {
    _classCallCheck(this, Firebase);

    //TODO: add initialize check :: if (firebase.apps.length === 0)
    _app["default"].initializeApp(config);

    console.log('firebase', _app["default"]);
    this.firebaseAuth = _app["default"].auth();
  } // register registerWithEmailAndPassword


  _createClass(Firebase, [{
    key: "register",
    value: function register(displayName, email, password) {
      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(this.firebaseAuth.createUserWithEmailAndPassword(email, password));

            case 3:
              this.firebaseAuth.currentUser.updateProfile({
                displayName: displayName
              });
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log("F. Error:", _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 6]]);
    } // sign in/up with google GoogleAuthProvider

  }, {
    key: "useGoogleProvider",
    value: function useGoogleProvider() {
      var googleProvider = new _app["default"].auth.GoogleAuthProvider();
      googleProvider.setCustomParameters({
        prompt: "select_account"
      });
      this.firebaseAuth.signInWithPopup(googleProvider);
    } // login  signInWithEmailAndPassword

  }, {
    key: "signIn",
    value: function signIn(email, password) {
      return regeneratorRuntime.async(function signIn$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.firebaseAuth.signInWithEmailAndPassword(email, password));

            case 3:
              _context2.next = 8;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", (0, _customErrorHandler.customErrorHandler)(_context2.t0));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 5]]);
    } //   // logout signOut
    //   signOut() {
    //     this.firebaseAuth.signOut();
    //   }
    //   // forgot password sendPasswordResetEmail
    //   async forgotPassword(email) {
    //     try {
    //       await this.firebaseAuth.sendPasswordResetEmail(email);
    //       window.location.href = "/";
    //     } catch (error) {
    //       return customErrorHandler(error);
    //     }
    //   }

  }]);

  return Firebase;
}();

var _default = new Firebase();

exports["default"] = _default;