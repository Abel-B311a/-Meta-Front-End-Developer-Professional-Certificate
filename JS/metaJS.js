// console.log(`Hello World!`);
// var catName = `pepper`;

// function letterFinder(word, match) {
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] == match) {
//       console.log("Found the", match, "at", i);
//     } else {
//       console.log(`no match found at`, i);
//     }
//   }
// }
// letterFinder(`test`, `t`);

// function consoleStyler(color, background, fontSize, txt) {
//   var message = "%c" + txt;
//   var style = `color: ${color};`;
//   style += `background: ${background};`;
//   style += `font-size: ${fontSize};`;
//   console.log(message, style);
// }
// consoleStyler(
//   (color = red),
//   (background = black),
//   (fontSize = 15),
//   (txt = `Hellow Abel`)
// );

class Chisness {
  // name of a class start in uppercase
  constructor(segetoMeter, chisoMeter) {
    // constructor function, to assign past parameters to future object properties
    this.segetoMeter = segetoMeter;
    this.chisoMeter = chisoMeter;
  }
  chisCheker() {
    // just the name of the method needed. no need to state `function`
    if (this.segetoMeter < 20 && this.chisoMeter > 80) {
      return `a certified Chis!`;
    } else {
      return `a certified Shwaye!`;
    }
  }
}
// you can now start building objects. (instantiate the object i.e. instances of a given class)
var faya = new Chisness(19, 81); // using new
// you can access properties from the newly created object.
console.log(`Faya is`, faya.chisCheker());
var aman = new Chisness(33, 67);
console.log(`Aman is`, aman.chisCheker());

// Task 1: Code a Person class
class Person {
  constructor(name = `Tom`, age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    return this.energy + 10;
  }
  doSomethingFun() {
    return this.energy - 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp = this.xp + 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker(0, 10, `Bob`, 21, 110);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker(100, 30, `Alice`, 30, 120);
  manager.doSomethingFun();
  return manager;
}
