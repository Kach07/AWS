(function() {
  var Helpers;

  Helpers = (function() {
    function Helpers() {}

    Helpers.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    return Helpers;

  })();

  window.helpers = new Helpers;

}).call(this);
