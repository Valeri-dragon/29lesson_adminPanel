import { render } from "./render";
const editUsers = () => {
  const tbody = document.getElementById("table-body");
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#form-name");
  const emailInput = document.querySelector("#form-email");
  const childrenInput = document.querySelector("#form-children");
  let permission;

  tbody.addEventListener("click", (e) => {
    if (e.target.closest(".btn-edit")) {
      const tr = e.target.closest("tr");
      const input = tr.querySelector("input[type=checkbox]");
      const id = tr.dataset.key;

      userService.getUser(id).then((user) => {
        nameInput.value = user.name;
        emailInput.value = user.email;
        childrenInput.checked = user.children;
        permission = user.permission;
        form.dataset.user = id;
      });
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.dataset.user) {
      const id = +e.target.dataset.user;
      if (nameInput.value !== "" && emailInput.value !== "") {
        const user = {
          name: nameInput.value,
          email: emailInput.value,
          children: childrenInput.checked,
          permission: permission,
        };
        console.log(user);
        userService.editUser(id, user).then(() => {
          userService.getUsers().then((user) => {
            render(user);
            form.reset();
            form.removeAttribute("data-user");
          });
        });
      } else {
        const span = document.createElement("span");
        span.textContent = `Поле не может быть пустым`;
        form.prepend(span);
        setTimeout(() => {
          span.textContent = "";
        }, 1500);
      }
    }
  });
};
export default editUsers;
