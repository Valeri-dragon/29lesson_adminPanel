export const render = (users) => {
  const tbody = document.getElementById("table-body");
tbody.innerHTML = ""
  users.forEach((user) => {
    const { id, name, email, children, permission } = user;
    tbody.insertAdjacentHTML(
      "beforeend",
      `
  <tr data-key="${id}">
                                <th scope="row">${id + 1}</th>
                                <td>${name}</td>
                                <td>${email}</td>
                                <td>${children ? "Есть" : "Нет"}</td>
                                <td>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch"
                                            id="form-children" ${
                                              permission ? "checked" : ""
                                            }>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-warning btn-edit">
                                            <i class="bi-pencil-square"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger btn-remove">
                                            <i class="bi-person-x"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
 `
    );
  });
};
