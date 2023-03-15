import { render } from "./render";

const addUsers = () => {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#form-name");
  const emailInput = document.querySelector("#form-email");
  const childrenInput = document.querySelector("#form-children");
  const span = document.createElement("span");
  userService.getUsers().then((data) => {
    render(data);
    data.forEach((item) => {
      for (let key in item) {
        emailInput.addEventListener("input", () => {
          if (item.email === emailInput.value) {
            span.textContent = `Такой email есть в базе`;
            form.prepend(span);
            setTimeout(() => {
              span.textContent = "";
              emailInput.value = "";
            }, 1500);
          }
        });
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.dataset.user) {
      if (nameInput.value !== "" && emailInput.value !== "") {
        const user = {
          name: nameInput.value,
          email: emailInput.value,
          children: childrenInput.checked,
          permission: false,
        };
        userService.addUser(user).then(() => {
          userService.getUsers().then((users) => {
            render(users);
            form.reset();
          });
        });
      } else {
        span.textContent = `Заполните поля`;
        form.prepend(span);
        setTimeout(() => {
          span.textContent = "";
        }, 1500);
      }
    }
  });
};
export default addUsers;
