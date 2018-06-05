function rollDice(num) {

  var res = 'Choose a number';
  var randomNumber;
  var arr = [];

  if (num !== undefined && Number(num)) {

    res = 'Rolled ' + num + ' dice: ';

    for ( var i = 0; i < num; i++) {
      randomNumber = Math.floor(Math.random() * (7-1) + 1);
      arr.push(randomNumber);
    }

    return res += arr.join(', ');

  }

  return res;

}


var args = process.argv.slice(2);
console.log(rollDice(args[0]));