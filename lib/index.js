/**
 * Imports
 */

var inherit = require('component-inherit')
var devices = require('ev3-js-devices')
var Device = require('ev3-js-device')

/**
 * Expose ColorSensor
 */

module.exports = TouchSensor['default'] = TouchSensor

/**
 * ColorSensor Device
 * @param {Number} port number of color sensor port
 */
function TouchSensor (port) {
  if (!(this instanceof TouchSensor)) {
    return new TouchSensor(port)
  }
  Device.call(this, devices(port))
}

inherit(TouchSensor, Device)

Object.defineProperties(TouchSensor.prototype, {
  value: {
    get: getValue
  }
})

/**
 * use color sensor to get a color
 * @return {string} state value of 0 or 1
 */
function getValue () {
  this.write('mode', 'TOUCH')
  return this.read('value0')
}
