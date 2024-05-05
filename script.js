const input = document.getElementById('inputbox');
const list = document.getElementById('list');
const button = document.getElementById('button');
const form = document.querySelector('form');
const alert = document.getElementById('alert');



function addTask(){
    if(inputbox.value === ''){
        alert.innerHTML = 'Enter a Task First'
        alert.className = 'shake-horizontal'
        setTimeout(function(){
            alert.innerHTML = ''
            alert.className = ''
        },2500)
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '❌';
        span.id = 'close'
        li.appendChild(span);
        let span2 = document.createElement('span');
        span2.innerHTML = '✏️';
        span2.id = 'edit';
        li.appendChild(span2);

        
    }
    inputbox.value = '';
    saveData();
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    addTask();
})

list.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.id === "close"){
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.id === "edit") {
        const li = e.target.parentElement;
        const text = li.firstChild.textContent.trim();
        inputbox.value = text;
        li.remove();
        inputbox.focus();
    }

},false)


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function reload(){
    list.innerHTML = localStorage.getItem("data");
}
reload();
// localStorage.removeItem("data");