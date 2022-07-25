const FORM = document.getElementById('form');
const TASKLI = document.getElementById('tasks');

FORM.onsubmit = function (e){
    e.preventDefault();
    addTask(document.getElementById('text').value);
    form.reset();
}

    function addTask(info){
        var container = document.createElement('div');
        var novatask = document.createElement('input');
        var task_label = document.createElement('label');
        var text = document.createTextNode(info);

        novatask.setAttribute('type', 'checkbox');
        novatask.setAttribute('id', info);
        task_label.setAttribute('for', info);
        task_label.appendChild(text);
        container.classList.add('item');
        container.appendChild(novatask);
        container.appendChild(task_label);
        
        TASKLI.appendChild(container);
    }