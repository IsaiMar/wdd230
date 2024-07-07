const p1 = document.querySelector("#password1");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (p1.value !== p2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		p2.style.backgroundColor = "#fff0f3";
		p2.value = "";
		p2.focus();
	} else {
		message.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}