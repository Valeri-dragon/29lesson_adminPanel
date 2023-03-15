import { render } from "./render";
const changePermissions = () => {
  const tbody = document.getElementById("table-body");

  tbody.addEventListener("click", (e) => {
    if (e.target.closest("input[type=checkbox]")) {
      const tr = e.target.closest("tr");
      const input = tr.querySelector("input[type=checkbox]");
      const id = tr.dataset.key;
      userService
        .permissionUser(id, { permission: input.checked })
        .then((res) => {
          userService.getUsers().then((users) => {
            render(users);
          });
        });
    }});
};
export default changePermissions;
