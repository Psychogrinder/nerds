var buttonFeedback = document.querySelector(".feedback");

var popup = document.querySelector(".feedback-popup");

var close = popup.querySelector(".cross");

var yourName = popup.querySelector("#your-name");

var yourEmail = popup.querySelector("#your-email");

var yourLetter = popup.querySelector("#your-letter");

var form = popup.querySelector("#feedback-form");

var storageLogin = localStorage.getItem("myLogin");

var storageEmail = localStorage.getItem("myEmail");

buttonFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-popup-show");

  if (storageLogin && storageEmail) {
    yourName.value = storageLogin;
    yourEmail.value = storageEmail;
    yourLetter.focus();
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-popup-show");
  popup.classList.remove("feedback-popup-error");
});

form.addEventListener("submit", function(event) {
  if (!yourName.value || !yourEmail.value || !yourLetter.value){
    event.preventDefault();
    popup.classList.remove("feedback-popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-popup-error");
  } else {
    localStorage.setItem("myLogin", yourName.value);
    localStorage.setItem("myEmail", yourEmail.value);
  }
});

window.addEventListener("keydown", function(event)
    {
  if(event.keyCode === 27) {
    if(popup.classList.contains("feedback-popup-show")) {
      popup.classList.remove("feedback-popup-show");
      popup.classList.remove("feedback-popup-error");
    }
  }
});
