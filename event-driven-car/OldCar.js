module.exports = function OldCar() {
  var _oilInterval = 1,
      _oil = 0;

  const INTERVAL = 500;

  var _addOilHandler,
      addOil,
      getCurrentOil,
      setOilInterval;

  _addOilHandler = function () {

    if(_oil >= 100) {

      _oil = 100;

    } else {

      _oil += _oilInterval;

      // call self again.
      setTimeout(function() {
        _addOilHandler(_oilInterval);
      }, INTERVAL);
    }

  };

  getCurrentOil = function () {
    return _oil;
  };

  setOilInterval = function (oilInterval) {
    _oilInterval = oilInterval;
    return this;
  };

  return {
    start: _addOilHandler,
    setOilInterval: setOilInterval,
    getCurrentOil: getCurrentOil
  };
};
