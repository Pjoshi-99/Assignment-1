function reverseString() {
    let string = document.getElementById("pro3").value;
    let reversed = "";
  
    for (i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    alert(reversed);
  }