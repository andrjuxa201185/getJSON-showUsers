const getData = () => {
    const xhr = new XMLHttpRequest();
    const userName = "andrjuxa201185";

    // xhr.open("GET", '../data/data.txt');
    xhr.open("GET", `http://api.github.com/users/${userName}`);
    xhr.send();
    
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState != 4) return;
    
        if (xhr.status !== 200) {
            console.warn(`error ${xhr.status}`);
        } else {
            const phones = JSON.parse(xhr.responseText);
            console.log(phones);
            // createPhone(phones[0]);
        }
    });
};

const showInfo = ({avatarUrl, name}) => {
    
}

// const createPhone = ({imageUrl, name}) => {
//     document.body.insertAdjacentHTML("afterend", `<div><img src="${imageUrl}"></div><h1>${name}</h1>`);
// };

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", getData);
    console.log(getData);
});



