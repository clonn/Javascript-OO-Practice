var Car = require('./Car');
var bubu = new Car();

bubu.setOilInterval(10);
bubu.addOil(function (err, status) {
  console.log(status + ', [STATUS] callback mode');
}).start();

var OldCar = require('./OldCar');
var bubu = new OldCar();

bubu.setOilInterval(10);
bubu.start();

(function () {
  if (bubu.getCurrentOil() >= 100) {
    console.log('[STATUS] setTimeout Oil is full');
  } else {
    setTimeout(arguments.callee, 50);
  }
})();
