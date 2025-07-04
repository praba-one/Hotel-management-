document.getElementById("enrollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message");

  message.textContent = `Thank you, ${name}, for enrolling! We’ll contact you soon.`;
  message.style.color = "green";

  this.reset();
});
