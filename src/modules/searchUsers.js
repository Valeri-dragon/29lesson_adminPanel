import { render } from "./render";
import { debounce } from "./helpers";
const searchUsers = () => {
  const searchInput = document.getElementById("search-input");
 
  const searchDebounce = debounce(() => {
    userService.getSearchUsers(searchInput.value).then((users) => {
      render(users);
    });
  }, 3000);
  
    searchInput.addEventListener("input", searchDebounce);
};
export default searchUsers;
