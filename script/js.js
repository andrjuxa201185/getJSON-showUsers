document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector(".btn");
    const ul = document.querySelector('ul');
    let desc = document.querySelector('.description');
    const closeDesc = document.querySelector('.description .close');

    const getUsers = () => {
        const xhr = new XMLHttpRequest();
    
        xhr.open("GET", `../data/users.json`);
        xhr.send();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState != 4) return;
        
            if (xhr.status !== 200) {
                console.warn(`error ${xhr.status}`);
            } else {
                const users = JSON.parse(xhr.responseText);
                showUsers(users);
            }
        });
    };
    
    const showUsers = (users) => {    
        for (let i = 0; i < users.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = users[i].name;
            li.dataset.gender = users[i].gender;
            li.dataset.job = users[i].job;
            li.dataset.name = users[i].name;
            ul.appendChild(li);
        }
    };
    
    const showInfo = (li) => {
        let job = li.dataset.job;
        let gender = li.dataset.gender;
        let name = li.dataset.name;
        desc.querySelector('.job span').innerHTML = job;
        desc.querySelector('.gender span').innerHTML = gender;
        desc.querySelector('.name span').innerHTML = name;
        desc.classList.remove('d-none');
        li.appendChild(desc);
    };


    button.addEventListener("click", getUsers);

    ul.addEventListener("click", (e) => {
        const elem = e.target;
        if (elem.tagName == "LI"){
            showInfo(elem);
        }
    });

    closeDesc.addEventListener("click", function() {
        this.parentElement.classList.add("d-none");
    });    
});





