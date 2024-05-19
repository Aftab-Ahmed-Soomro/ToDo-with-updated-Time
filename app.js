let now = new Date();
let copyright = document.getElementById('copyright');
copyright.innerText = now.getFullYear();

function myToDo() {
    let now = new Date();
    let input = document.getElementById('input');
    let task = document.getElementById('task');
    let time = document.getElementById('time');
    let error = document.getElementById('error');
    
    if (input.value.trim() == '') {
        error.innerText = 'Please input the required field!';
    }
    else {
        task.innerText += '⭕' + input.value + '\n\n';
        time.innerText += `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}\n\n`;
        input.value = '';
        error.innerText = '';
    }
}