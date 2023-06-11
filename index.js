function toggleDropdown() {
  var plusicon = document.getElementById("icon");
  var dropdown = document.getElementById("ans");
  plusicon.classList.toggle("gummo");
  dropdown.classList.toggle("t-none");
  console.log(dropdown.classList.value);
}

function toggletwo() {
  var plusicon = document.getElementById("icon-two");
  var dropdown = document.getElementById("ans-two");
  plusicon.classList.toggle("gummo");
  dropdown.classList.toggle("t-none");
  console.log(dropdown.classList.value);
}
