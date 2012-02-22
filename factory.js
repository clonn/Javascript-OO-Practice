var util = require("util");

// create a Robot class
var Robot = function (name, age) {
    this.name = name;
    this.age = age;
    this.move = "stand up";

    // public function
    this.getName= function () {
        return name;
    };
    this.getAge= function () {
        return age;
    };
    this.setAge= function (age) {
        this.age = age;
    };

};

// Create new Robot
var r1d1 = new Robot("R1D1", 1000);
var r2d2 = new Robot("R2D2", 500);

// Change age
r2d2.setAge(10);

util.log("R1D1 object\n" + util.inspect(r1d1));
util.log("R2D2 object\n" + util.inspect(r2d2));
