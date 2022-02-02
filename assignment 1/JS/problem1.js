function removeWhiteSpace() {
    let newString = "";
    let string = document.getElementById('pro1').value;
     for (let char of string) if (char != " ") newString += char;
  
    // another method is { newString = string.replaceAll(" ", ""); }
    // document.getElementById("pro1").value = newString;
    alert(newString);
  }

  function replaceWord() {
      let string = document.getElementById('pro11').value;
      let replacement = document.getElementById('pro111').value;
      let newString = string;
  
    newString = newString.replace("there", replacement);
    alert(newString);
  }

  function findIndex() {
      let word = document.getElementById('pro121').value;
      let string = document.getElementById('pro12').value;
    alert(string.indexOf(word));
  }