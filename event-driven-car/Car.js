module.exports = function Car() {

  var Emitter = require('events').EventEmitter,
      emitter = new Emitter();

  var _oilInterval = 1,
      _oil = 0;

  const INTERVAL = 500;
  const FINISH_EVENT = 'add_oil_done';

  var _addOilHandler,
      addOil,
      setOilInterval;

  _addOilHandler = function () {

    if(_oil >= 100) {

      _oil = 100;
      emitter.emit(FINISH_EVENT, null, '[STATUS] Oil is full');

    } else {

      _oil += _oilInterval;

      // call self again.
      setTimeout(function() {
        _addOilHandler(_oilInterval);
      }, INTERVAL);
    }

  };

  addOil = function (callback) {
    emitter.on(FINISH_EVENT, callback);
    return this;
  };

  setOilInterval = function (oilInterval) {
    _oilInterval = oilInterval;
    return this;
  };

  return {
    start: _addOilHandler,
    setOilInterval: setOilInterval,
    addOil: addOil
  };
};
