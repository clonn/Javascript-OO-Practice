var Person = function (name, age) {
    var name,
        age,
        year,
        // constance.
        FULL_YEAR = 1911,
        // private function.
        countYear;

    name = name;
    age = age;

    // private function.
    countYear = function () {
        year = age + FULL_YEAR;
    };

    // public function.
    this.toString = function () {
        return '[' + name + ',' + age + ',' + year + ']';
    };
    this.getName = function () {
        return name;
    };
    this.getAge = function () {
        return age;
    };
    this.getYear = function () {
        return year;
    }
};

var p = {};
Person.call(p, "Jason", 30);
console.log(p.age);
// undefined.
console.log(p.getAge());
// 30

var a = new Person("Janet", 15);
console.log(a.age);
// undefined.
console.log(a.getAge());
// 15
