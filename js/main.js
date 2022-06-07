let email = document.getElementsByName("email")[0];
let password = document.getElementsByName("password")[0];
let emailError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");
let submit = document.getElementsByName("submit")[0];
let eye = document.querySelectorAll("i")[3];
let userInfo = new Object();
document.forms[0].onsubmit = function (e) {
	let emailValid = false;
	let passwordValid = false;
	if (email.value.length > 0 && email.value.indexOf("@") > 0) {
		emailValid = true;
	} else {
		email.parentElement.classList.add("error");
		emailError.style.display = "inline-block";
		setTimeout(() => {
			emailError.style.display = "none";
			email.parentElement.classList.remove("error");
		}, 4000);
	}
	if (password.value.length <= 18 && password.value.length > 3) {
		passwordValid = true;
	} else {
		password.parentElement.classList.add("error");
		passwordError.style.display = "inline-block";
		setTimeout(() => {
			passwordError.style.display = "none";
			password.parentElement.classList.remove("error");
		}, 4000);
	}
	if (passwordValid === false || emailValid === false) {
		e.preventDefault();
	} else {
		userInfo.email = email.innerText;
		userInfo.password = password.innerText;
	}
	let userInfo = new Object({
		userEmail: email,
		userPassword: password,
	});
	return userInfo;
};
eye.addEventListener("click", () => {
	if (password.type === "password") {
		password.setAttribute("type", "text");
		eye.className = "fas fa-eye-slash show";
	} else {
		password.setAttribute("type", "password");
		eye.className = "fas fa-eye show";
	}
});
