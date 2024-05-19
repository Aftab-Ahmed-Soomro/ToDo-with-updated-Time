function myToDo() {
    let input = document.getElementById('input');
    let task = document.getElementById('task');
    let time = document.getElementById('time');

    let now = new Date();

    if (input.value.trim() == '') {
        Swal.fire({
            title: "Alert!",
            text: "Please input the required field!",
            icon: "warning",
          })
    }
    else {
        task.innerText += '⭕' + input.value + '\n\n';
        time.innerText += `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}\n\n`;
    }
}