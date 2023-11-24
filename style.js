function findMax() {
    
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);

    
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numeric values for both numbers.");
      return;
    }

    var maxNumber = Math.max(number1, number2);
    document.getElementById('result').innerHTML = `The maximum number is: ${maxNumber}`;
  }