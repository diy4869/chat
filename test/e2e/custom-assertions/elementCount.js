<<<<<<< HEAD
// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count
  this.expected = count
  this.pass = function (val) {
    return val === this.expected
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}
=======
// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count
  this.expected = count
  this.pass = function (val) {
    return val === this.expected
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}
>>>>>>> 5b588de929942f33a910f4fddcdc84b55a2c691f
