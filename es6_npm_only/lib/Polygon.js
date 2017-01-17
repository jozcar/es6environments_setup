"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function () {
  function Polygon(height, width) {
    _classCallCheck(this, Polygon);

    this.height = height;
    this.width = width;
  }

  _createClass(Polygon, [{
    key: "calcArea",
    value: function calcArea() {
      return this.height * this.width;
    }
  }, {
    key: "area",
    get: function get() {
      return this.calcArea();
    }
  }]);

  return Polygon;
}();

var square = new Polygon(10, 10);

console.log(square.area);