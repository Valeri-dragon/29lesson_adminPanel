import { render } from "./render";
const sortUsers = () => {
  const tHead = document.querySelector(".table-dark");
  let isSort
  tHead.style.cursor = "pointer";
  tHead.addEventListener("click", (e) => {
      if (e.target.dataset.name) {
      console.log(e.target.dataset.name);
      userService
        .getSortUsers({
          name: e.target.dataset.name,
          value: isSort ? "asc" : "desc",
        })
        .then((users) => {
          console.log(users);
          render(users);
        });
    }
    isSort = !isSort;
  });
};
export default sortUsers;
