document.getElementById("pickupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmationMsg").style.display = "block";
    this.reset();
  });