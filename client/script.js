const cat = document.querySelector(".toggle");
const show = document.querySelector(".show");

cat.addEventListener("mouseover", () => {
  cat.style.height = "300px";
  show.classList.add("cat-flex");
  show.classList.remove("hidden");
});
cat.addEventListener("mouseout", () => {
  cat.style.height = "5rem";
  show.classList.remove("cat-flex");
  show.classList.add("hidden");
});

/* const email = document.querySelector("#email")
const password = document.querySelector("#password")

let user_email = ""
let user_password = ""

email.addEventListener("change", (e) => {
    user_email = e.target.value
})
password.addEventListener("change", () => {
    user_password = e.target.value
})

const button = document.querySelector(".button")


const handleLogin = async () => {
    try {
        const res = await axios.post("http://localhost:6969/login", {
            email:user_email,
            password:user_password
        })
        console.log(res.data);
    } catch (error) {
        console.log(error.message);
    }
}

button.addEventListener("click", async () => {
   handleLogin()
}) */
