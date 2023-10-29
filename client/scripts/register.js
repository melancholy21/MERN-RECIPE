const firstname = document.querySelector("#fname");
const lastname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const register_button = document.querySelector(".button");

let user_fname;
let user_lname;
let user_email;
let user_passw;

const handleFnameChange = (e) => {
  user_fname = e.target.value;
};
const handleLnameChange = (e) => {
  user_lname = e.target.value;
};
const handleUserEmailChange = (e) => {
  user_email = e.target.value;
};
const handlePassWChange = (e) => {
  user_passw = e.target.value;
};

const handleRegister = async () => {
  try {
    const res = await axios.post("http://localhost:4200/register", {
      firstname: user_fname,
      lastname: user_lname,
      email: user_email,
      password: user_passw,
    });
    console.log(res.data);
    alert(res.data.message);
    window.location.href = "login.html";
  } catch (error) {
    alert(error.response.data.error);
    console.error(error);
  }
};
firstname.addEventListener("change", handleFnameChange);
lastname.addEventListener("change", handleLnameChange);
email.addEventListener("change", handleUserEmailChange);
password.addEventListener("change", handlePassWChange);

register_button.addEventListener("click", handleRegister);
