export class UserService {
  url = "http://localhost:4545/users/";

  getUsers() {
    return fetch(this.url).then((response) => response.json());
  }
  // senData(url, method, obj) {
  //   return fetch(url, {
  //     method: method,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(obj),
  //   }).then((response) => response.json());
  // }

  addUser(user) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
    //this.senData(this.url, "POST", user);
  }
  removeUser(id) {
    return fetch(this.url + id, {
      method: "DELETE",
    }).then((response) => response.json());
    //this.senData(this.url + id, "DELETE");
  }
  permissionUser(id, data) {
    return fetch(this.url + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
   // this.senData(this.url + id, "PATCH", data);
  }
  getUser(id) {
    return fetch(this.url + id).then((response) => response.json());
  }
  editUser(id, user) {
    return fetch(this.url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
    //this.senData(this.url + id, "PUT", user);
  }
  filterUsers(filterOption) {
    return fetch(`${this.url}?${filterOption}=true`).then((response) =>
      response.json()
    );
  }
  getSortUsers(sortOption) {
    return fetch(
      `${this.url}?_sort=${sortOption.name}&_order=${sortOption.value}`
    ).then((response) => response.json());
  }
  getSearchUsers(str) {
    return fetch(`${this.url}?name_like=${str}`).then((response) =>
      response.json()
    );
  }
}
