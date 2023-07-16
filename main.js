window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    //Buttons Task Actions
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = '<i class="fas fa-edit"></i>';

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = '<i class="fas fa-trash-alt"></i>';

    //Các hoạt động tới nút edit và delete
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    //Xử lý trạng thái edit và save
    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerHTML.includes("fa-edit")) {
        task_edit_el.innerHTML = '<i class="fas fa-check"></i>';
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerHTML = '<i class="fas fa-edit"></i>';
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    //Hộp thoại xác nhận xóa
    task_delete_el.addEventListener("click", (e) => {
      const confirmDelete = confirm("Do you want to delete this task?");
      if (confirmDelete) {
        list_el.removeChild(task_el);
      }
    });
  });
});
