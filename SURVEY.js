var bgmusicSound = new Audio("elev.m4a");

function script() {
  var lastname = document.getElementById("lastname").value;
  var firstname = document.getElementById("firstname").value;
  var middleinitial = document.getElementById("middleinitial").value;
  var section = document.getElementById("section").value;
  var grade = document.getElementById("grade").value;
  var acadexp = document.getElementById("acadexp").value;
  var supportivecm = document.getElementById("supporrtivecm").value;
  var motivate = document.getElementById("motivate").value;
  var favesub = document.getElementById("favesub").value;
  var teacherencourage = document.getElementById("teacherencourage").value;
  var scihirate = document.getElementById("scihirate").value;
  var whatwillumiss = document.getElementById("whatwillumiss").value;

  localStorage.setItem("lastname", lastname);
  localStorage.setItem("firstname", firstname);
  localStorage.setItem("middleinitial", middleinitial);
  localStorage.setItem("section", section);
  localStorage.setItem("grade", grade);
  localStorage.setItem("acadexp", acadexp);
  localStorage.setItem("supportivecm", supportivecm);
  localStorage.setItem("motivate", motivate);
  localStorage.setItem("favesub", favesub);
  localStorage.setItem("teacherencourage", teacherencourage);
  localStorage.setItem("scihirate", scihirate);
  localStorage.setItem("whatwillumiss", whatwillumiss);

  alert('Submitted successfully!🙄💅✨');
}

function RESET() {
  localStorage.clear();
  alert('Successfully reset!🍰💌🧸');
}

function music(btn) {
bgmusicSound.play();
}
