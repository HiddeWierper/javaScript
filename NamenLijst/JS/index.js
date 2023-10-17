function getFirstname() {
  const firstName = document.getElementById("naam").value;
  const addName = document.getElementById("addName");
  addName.disabled = firstName === "" ? true : false;
  return firstName;
}

function getLastname() {
  const lastName = document.getElementById("achternaam").value;
  const addName = document.getElementById("addName");
  addName.disabled = lastName === "" ? true : false;
  return lastName;
}

function removeName(event) {
  event.target.remove();
}
function printName() {
  const firstName = getFirstname();
  const lastName = getLastname();

  if (firstName === "" || lastName === "") {
    alert("Voer zowel voornaam als achternaam in.");
    return;
  }

  document.getElementById("naam").value = "";
  document.getElementById("achternaam").value = "";

  const ul = document.getElementById("nameList");
  const li = document.createElement("li");
  const fullName = firstName + " " + lastName;
  const node = document.createTextNode(fullName);
  li.appendChild(node);

  li.addEventListener("click", removeName);

  ul.appendChild(li);
  console.log(fullName);

  const addName = document.getElementById("addName");
  addName.disabled = true;
}

function removeAll() {
  const element = document.getElementById("nameList");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
