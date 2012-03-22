var Person = function (name, age) {
    var name,
        age,
        toString;

    this.name = name;
    this.age = age;

    this.toString = function () {
        return '[' + this.name + ',' + this.age + ']';
    };
};

var p = {};
Person.call(p, "Jason", 30);
console.log(p);

var a = new Person("Janet", 15);
console.log(a);
