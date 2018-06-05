function average(list) {
  var sum = 0;

  for (var num of list) {
    //solved
    sum += num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));
