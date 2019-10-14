var password = document.querySelector("#password")
var showPasswordCheckBox = document.querySelector("#show-password")

changePasswordInputType(!showPasswordCheckBox.checked)

showPasswordCheckBox.addEventListener('change', function(event) {
	changePasswordInputType(!event.target.checked)
})

function changePasswordInputType(isPassword) {
	if (isPassword) password.type = 'password'
	else password.type = 'text'
}