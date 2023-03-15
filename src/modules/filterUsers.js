import { render } from "./render";

const filterUsers = () => {
  const btnIsChild = document.getElementById("btn-isChildren");
  const btnIsPermission = document.getElementById("btn-isPermissions");
  const btnIsAll = document.getElementById("btn-isAll");

  btnIsChild.addEventListener('click', ()=>{
   userService.filterUsers('children').then((users) => {
          render(users);
        });
    
  });
  btnIsPermission.addEventListener('click', (e)=>{
   userService.filterUsers("permission").then((users) => {
     render(users);
   });
  });
  btnIsAll.addEventListener('click', (e)=>{
   userService.getUsers().then((users) => {
     render(users);
   });
  });

};
export default filterUsers;
