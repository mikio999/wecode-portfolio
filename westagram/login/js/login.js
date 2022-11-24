// 로그인 javascript
const inputId = document.querySelector("#user-id");
const inputPassword = document.querySelector("#user-password");
const loginBtn = document.querySelector("#login_btn");
const loginValidation = document.querySelector(".validLogin");

function loginActivate() {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (
    idValue.length > 0 &&
    idValue.indexOf("@") > -1 &&
    passwordValue.length > 4
  ) {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
    loginBtn.style.opacity = 1;
  } else {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "default";
    loginBtn.style.opacity = 0.5;
  }
}

function validationAlert() {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (
    idValue.length > 0 &&
    idValue.indexOf("@") > -1 &&
    passwordValue.length > 4
  ) {
    alert("로그인 성공!");
    loginBtn.onclick = true;
  } else {
    alert("로그인 실패!");
    loginBtn.onclick = false;
  }
}
function init() {
  inputId.addEventListener("keyup", loginActivate);
  inputPassword.addEventListener("keyup", loginActivate);
  loginBtn.addEventListener("click", validationAlert);
}

init();
