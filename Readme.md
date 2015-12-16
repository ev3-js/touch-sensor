
# touch-sensor

[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

read information from EV3 touch sensor

## Installation

    $ npm install ev3-js-touch-sensor

## Usage

```js
var TouchSensor = require('ev3-js-touch-sensor')

```

## API

### TouchSensor(port)

- `port` - number of port where the touch sensor is connected

**Returns:** instance of TouchSensor

### .value
Set the touch sensor to mode TOUCH and get a value.

**Returns:** either 0 or 1 to indicate the state of the touch sensor

value | state
---|---
0 | not pressed
1 | pressed

## License

MIT

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/ev3-js-touch-sensor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ev3-js-touch-sensor
