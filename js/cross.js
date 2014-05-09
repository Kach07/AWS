(function() {
  var Cross;

  Cross = (function() {
    function Cross() {
      this.vars();
      this.init();
    }

    Cross.prototype.vars = function() {};

    Cross.prototype.init = function() {
      var $circle, $circleLine, $circleProto, $div1, $div2, $div3, $div4, attr, circles, height, lineHeight, size, width, _i, _len, _results;
      $div1 = $("<div class='c-green-g' />");
      $div2 = $("<div class='c-green-g' />");
      $div3 = $("<div class='c-green-g' />");
      $div4 = $("<div class='c-green-g' />");
      $circle = $("<div class='' />");
      $circleLine = $("<div class='c-green-g' />");
      width = 2;
      height = 200;
      $div1.css({
        width: height,
        height: width,
        top: '50%',
        right: '100%',
        'margin-top': -(width / 2)
      });
      $div3.css({
        width: height,
        height: width,
        top: '50%',
        left: '100%',
        'margin-top': -(width / 2)
      });
      $div2.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': width / 2,
        top: '100%'
      });
      $div4.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': width / 2,
        bottom: '100%'
      });
      $circleLine.css({
        width: width,
        height: 0,
        left: '50%',
        'margin-left': -(width / 2),
        top: '50%'
      });
      $(document.body).append($circleLine);
      size = 20;
      $circle.css({
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        'margin-left': -(size / 2),
        'margin-top': -(size / 2),
        'border-radius': '50%',
        'opacity': 0,
        'border': "" + (size / 2) + "px solid #00FFC6"
      });
      $(document.body).append($div1);
      $(document.body).append($div2);
      $(document.body).append($div3);
      $(document.body).append($div4);
      $(document.body).append($circle);
      $div1.velocity({
        right: '50%',
        width: 0
      });
      $div3.velocity({
        left: '50%',
        width: 0
      });
      $div2.velocity({
        top: '50%',
        height: 0
      });
      $div4.velocity({
        bottom: '50%',
        height: 0
      });
      attr = {
        scale: 1.5,
        opacity: 1
      };
      $circle.velocity(attr, {
        delay: 300,
        duration: 200
      }).velocity({
        scale: 1
      }, {
        duration: 1000,
        easing: 'spring'
      });
      $circleProto = $circle.clone();
      circles = this.cloneCircles($circleProto);
      lineHeight = 200;
      attr = {
        scale: .1
      };
      $circle.velocity(attr, {
        delay: 100,
        duration: 1800
      });
      _results = [];
      for (_i = 0, _len = circles.length; _i < _len; _i++) {
        $circle = circles[_i];
        attr = {
          scale: this.rand(2, 8) / 10
        };
        _results.push($circle.velocity(attr, {
          duration: 0
        }).velocity({
          translateX: this.rand(-80, 80),
          'border-width': 0,
          opacity: 100,
          translateY: -2 * lineHeight + this.rand(-100, 100),
          scale: 1.15
        }, {
          delay: 1200 + this.rand(0, 1800),
          duration: 1200
        }));
      }
      return _results;
    };

    Cross.prototype.cloneCircles = function($proto) {
      var $new, circles, i, _i;
      circles = [];
      for (i = _i = 0; _i < 30; i = ++_i) {
        $new = $proto.clone();
        $(document.body).append($new);
        circles.push($new);
      }
      return circles;
    };

    Cross.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    return Cross;

  })();

  window.Cross = Cross;

}).call(this);
