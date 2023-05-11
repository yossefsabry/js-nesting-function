let user = {
  firstname: "yossef",
  secondname: "sabry",
  age: 17,
  active: true,
  Getphone: {
    firstnumber: "01060666626",
    secondnumber: "01026699490",
  },
  address: {
    egypt: "cario",
    southSinai: "eltour",
  },
  isage: function () {
    if (user.age >= 0) {
      console.log("you can eccass");
    } else {
      console.log("not availlble");
    }
  },
  isactive: function () {
    if (user.active == true) {
      console.log("hello user");
    } else {
      console.log("error happend");
    }
  },
};
console.log(user.isactive());
