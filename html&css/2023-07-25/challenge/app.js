const loginBtn = document.querySelector(".login-btn");

const loginBtnHandler = () => {
  const userId = document.querySelector(".user-id");
  const userPwd = document.querySelector(".user-password");

  const idErrorMsg = document.querySelector(".id-error");
  const pwdErrorMsg = document.querySelector(".pwd-error");

  if (userId.value.trim() === "") {
    userId.classList.add("focus");
    idErrorMsg.classList.remove("hidden");
  } else {
    userId.classList.remove("focus");
    idErrorMsg.classList.add("hidden");
  }

  if (userPwd.value.trim() === "" && userId.value.trim() !== "") {
    userPwd.classList.add("focus");
    pwdErrorMsg.classList.remove("hidden");
  } else {
    userPwd.classList.remove("focus");
    pwdErrorMsg.classList.add("hidden");
  }
};

loginBtn.addEventListener("click", loginBtnHandler);
