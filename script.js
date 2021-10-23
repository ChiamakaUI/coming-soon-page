let submit = document.getElementsByClassName("icon")[0];

submit.addEventListener("click", submitForm);
let email = document.getElementById("mail");


function submitForm(e) {
  e.preventDefault();

    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let error = document.getElementsByClassName("error")[0];
     let errorMessage = document.getElementById("error_message");

  if (email.value == "") {
    alert("Please, enter an email address to proceed");
    return;
  } else {
    if (email.value.match(emailformat)) {
      alert("Thank you, we will send a mail as soon as we launch");
    } else {
        error.style.display = 'flex'
        errorMessage.style.display = "block";

        return
    }
  }
  error.style.display = "none";
  errorMessage.style.display = "none";
  email.value = "";
}
