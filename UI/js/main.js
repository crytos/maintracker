// Dialog popup
var dialog = document.querySelector(".dialog");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleDialog() {
    dialog.classList.toggle("show-dialog");
}

function windowOnClick(event) {
    if (event.target === dialog) {
        toggleDialog();
    }
}
trigger.addEventListener("click", toggleDialog);
closeButton.addEventListener("click", toggleDialog);
window.addEventListener("click", windowOnClick);

// Toggle more details of a request
function showMore(id) {
	var req_desc = document.getElementById(id)
	req_desc.lastElementChild.classList.toggle("detail");
}

// Toggle signup and signin form
function showSignup(form1,form2) {
	var auth = document.querySelector(".auth-type1");
	var auth2 = document.querySelector(".auth-type2");
	var form1 = document.getElementById(form1);
	var form2 = document.getElementById(form2);

	auth.classList.toggle("active");
	auth2.classList.toggle("active");

	form1.style.display = "none";
	form2.style.display = "block";
}
