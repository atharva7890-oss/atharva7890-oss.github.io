function submitForm() {
let name = document.getElementById("name").value;
document.getElementById("response").innerText =
"Thank you " + name + "! We will contact you soon.";
return false;
}
