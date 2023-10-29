const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login_button = document.querySelector(".button");

let user_email;
let user_password;

const handleEmailChange = (e) => {
  user_email = e.target.value;
};

const handlePasswordChange = (e) => {
  user_password = e.target.value;
};

const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:4200/login", {
      email: user_email,
      password: user_password,
    });
    console.log(res.data);
    alert(res.data.message);
    window.location.href = "index.html";
  } catch (error) {
    alert(error.response.data.error);
    console.error(error);
  }
};

email.addEventListener("change", handleEmailChange);
password.addEventListener("change", handlePasswordChange);
login_button.addEventListener("click", handleLogin);
