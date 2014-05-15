(function() {
  var Main;

  Main = (function() {
    function Main(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Main.prototype.vars = function() {
      this.$fast = $('#js-fast');
      this.$car1 = $('#js-car1');
      this.$car2 = $('#js-car2');
      this.$arrow1 = $('#js-arrow1');
      this.$arrow2 = $('#js-arrow2');
      this.$arrow3 = $('#js-arrow3');
      this.$arrow4 = $('#js-arrow4');
      this.$arrowWrap = $('#js-arrow-wrap');
      this.$robust = $('#js-robust');
      this.$robustShade1 = this.$robust.find('#js-robust-shade1');
      return this.$robustShade2 = this.$robust.find('#js-robust-shade2');
    };

    Main.prototype.init = function() {
      var $child, child, i, _i, _len, _ref;
      this.s = 1;
      this.$car1.velocity({
        right: '-40%',
        opacity: 2
      }, {
        duration: 400 * this.s
      });
      this.fastChilds = this.$fast.children();
      _ref = this.fastChilds;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        $child = $(child);
        $child = $child.find('#js-bit-inner');
        $child.velocity({
          rotateZ: 40
        }, {
          delay: (160 + (i * 15)) * this.s,
          duration: 100 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          delay: (60 + (i * 15)) * this.s,
          duration: 5000 * this.s,
          easing: 'quake'
        });
      }
      this.car2(700);
      this.arrows();
      this.throwFA(2200);
      this.shiftRobustArrow(3400);
      return this.fallRobust(3800);
    };

    Main.prototype.car2 = function(delay) {
      var $child, child, i, _i, _len, _ref, _results;
      this.$car2.velocity({
        left: '-40%',
        opacity: 1
      }, {
        delay: delay * this.s,
        duration: 400 * this.s
      });
      _ref = this.fastChilds;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        $child = $(child);
        $child = $child.find('#js-span');
        $child.css({
          'transform-origin': 'center top'
        });
        _results.push($child.velocity({
          rotateZ: 40
        }, {
          delay: (delay + 160 + (this.fastChilds.length - i) * 15) * this.s,
          duration: 100 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          delay: (60 + (this.fastChilds.length - i) * 15) * this.s,
          duration: 5000 * this.s,
          easing: 'quake'
        }));
      }
      return _results;
    };

    Main.prototype.fallRobust = function(delay) {
      return this.$robust.velocity({
        top: '100%',
        rotateZ: -50,
        marginTop: -55
      }, {
        delay: delay * this.s,
        easing: 'easeInQuad',
        duration: 300 * this.s
      }).velocity({
        rotateZ: 0
      }, {
        duration: 500 * this.s,
        easing: 'easeOutBounce'
      });
    };

    Main.prototype.shiftRobustArrow = function(delay) {
      this.$arrowWrap.velocity({
        translateX: -200
      }, {
        delay: delay * this.s
      });
      return this.$robustShade1.velocity({
        translateX: -200
      }, {
        delay: delay * this.s,
        complete: (function(_this) {
          return function() {
            _this.$robustShade2.hide();
            return _this.$fast.hide();
          };
        })(this)
      });
    };

    Main.prototype.throwFA = function(delay) {
      var $child, angle, i, _i, _results;
      _results = [];
      for (i = _i = 0; _i <= 1; i = ++_i) {
        $child = $(this.fastChilds[i]);
        $child.css({
          'transform-origin': 'center center',
          'position': 'absolute'
        });
        if (i === 1) {
          angle = 280;
          _results.push($child.velocity({
            rotateZ: angle / 5,
            left: '45%',
            top: '55%'
          }, {
            duration: 50 * this.s,
            easing: 'linear',
            delay: delay * this.s
          }).velocity({
            rotateZ: angle,
            left: '-10%',
            top: '110%'
          }, {
            duration: 1000 * this.s,
            easing: 'linear'
          }));
        } else {
          angle = 600;
          _results.push($child.velocity({
            rotateZ: angle / 10,
            left: '50%',
            top: '50%'
          }, {
            duration: 50 * this.s,
            easing: 'linear',
            delay: delay * this.s
          }).velocity({
            rotateZ: angle + helpers.rand(0, 40),
            left: '-10%',
            top: '20%'
          }, {
            duration: 1000 * this.s,
            easing: 'linear'
          }));
        }
      }
      return _results;
    };

    Main.prototype.arrows = function() {
      var angle, arrowAngle, delay, duration;
      arrowAngle = 20;
      delay = 1400;
      duration = 2000;
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      this.$arrow1.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: delay * this.s
      }).velocity({
        left: '70%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      this.$arrow2.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: (delay + 200) * this.s
      }).velocity({
        left: '10%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      this.$arrow3.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: (delay + 250) * this.s
      }).velocity({
        left: '20%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
      angle = 20;
      return this.$arrow4.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: (delay + 400) * this.s
      }).velocity({
        left: '50%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 1000);

}).call(this);
