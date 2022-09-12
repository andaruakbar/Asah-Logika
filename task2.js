// let members = [1, 2, 4, 3, 3];
// let family = 5;
// let memberInBus = 0;
// let bus = 0;

function allBus(members, family) {
  let sum = members.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (family !== members.length) {
    return "Input must be equal with count of family";
  } else if (sum % 4 !== 0) {
    memberInBus = sum / 4;
    bus = Math.ceil(memberInBus);
    return bus;
  } else {
    return sum / 4;
  }
}

console.log(allBus([1, 2, 4, 3, 3], 5));
console.log(allBus([2, 3, 4, 4, 2, 1, 3, 1], 8));
console.log(allBus([1, 5], 5));
