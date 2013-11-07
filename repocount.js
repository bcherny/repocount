(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('uxhr'));
    }
    else if(typeof define === 'function' && define.amd) {
        define('repocount', ['uxhr'], factory);
    }
    else {
        root.repocount = factory(root.uxhr);
    }
}(this, function(uxhr) {
var repocount, _,
  __hasProp = {}.hasOwnProperty;

_ = {
  length: function(object) {
    var key, length;
    length = 0;
    for (key in object) {
      if (!__hasProp.call(object, key)) continue;
      ++length;
    }
    return length;
  }
};

repocount = (function() {
  repocount.prototype.options = {
    apis: {
      github: 'https://api.github.com/users/:id/repos'
    }
  };

  repocount.prototype.results = {};

  function repocount(identities, callback) {
    var api, identity, _push, _ref,
      _this = this;
    this.identities = identities;
    _push = function(api, result) {
      _this.results[api] = result;
      if (_.length(_this.results) === _.length(_this.identities)) {
        return callback(_this.results);
      }
    };
    _ref = this.identities;
    for (api in _ref) {
      identity = _ref[api];
      this.fetch(api, identity, _push);
    }
  }

  repocount.prototype.parse = function(api) {
    if ((this.options.apis != null) && (this.options.apis[api] != null)) {
      return this.options.apis[api].replace(':id', this.identities[api]);
    }
  };

  repocount.prototype.fetch = function(api, username, callback) {
    var page, result, url,
      _this = this;
    page = 1;
    result = [];
    url = this.parse(api);
    return setTimeout(function() {
      var _check;
      if (url) {
        _check = function(res) {
          res = JSON.parse(res);
          if (res.length) {
            result = result.concat(res);
            return _this.request(url, ++page, _check);
          } else {
            return callback(api, result);
          }
        };
        return _this.request(url, page, _check);
      }
    }, 0);
  };

  repocount.prototype.request = function(url, page, success) {
    return uxhr(url, {
      page: page
    }, {
      success: success
    });
  };

  return repocount;

})();

    return repocount;
}));
