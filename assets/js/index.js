'use strict';

/*
const item = document.getElementById('item');
const button = document.getElementById('button');

let deg = 1;

setInterval(function () {
    deg = deg === 360 ? 1: ++deg;
        item.style.transform = `rotate(${deg++}deg)`;

}, 20);

button.onclick = function () {
    alert("button click stoPPP")

};
*/
///////////////////////////////////////////////////////////

/*const user = {
    name: "Name",
    surname: "Surname",
    age: 54,
    isMale: false,
    cat: null,

};

const jsonUser = JSON.stringify(user);
const parseUser = JSON.parse(jsonUser);*/

/*// PROMISE
const firstPromise = new Promise(function (resolve, request) {
    if(Math.random() * 10 > 5){
        resolve("Success")
    }
    request("Error");

});

firstPromise
    .then(data => console.log(data))
    .catch(err => {console.log(err)});*/



/*
////////////////
const firstPromise = new Promise(function (resolve, reject) {
    fetch('./user.json')
        .then(resolve)
        .catch(reject);

});

firstPromise
    .then(data => console.log(data))
    .catch(err => {console.log(err)});

// с неправельным адресом  в fetch ./user.json будет ощибка
// resolve  удача
// reject не удача
*/



////////////////////////////////////////////////////////////


/*// Пример с промесом, берём рандомное число
/!*const executor = function (resolve,reject) {
    const number = Math.random() * 10;
    if(number > 5){          // число должно быть
        resolve("Success")   // удача

    }else{
        reject(new Error(`value is ${number}` ))  // не удача
    }

};

const promise = new Promise(executor);

promise
    .then(console.log)
    .catch(console.error);*!/*/


// ПРИМЕР

/*const executor = function (resolve,reject) {

    const request = new XMLHttpRequest();
    request.open('GET',"user.json");
    request.send();
    request.onload = () => {
        resolve( JSON.parse(request.responseText));
    };
    request.onerror = () => {
      reject(new  Error(`${request.status} ${request.statusText}`))
    };



    const number = Math.random() * 10;

    if(number > 5){
        resolve("Success")

    }else{
        reject(new Error(`value is ${number}` ))
    }

};

const promise = new Promise(executor);

promise
    .then(appendUserItemToList)
    .catch(console.error);




const executor = function (resolve,reject) {

    const request = new XMLHttpRequest();

    request.onload = () => {
        resolve(request.responseText)
    };
    request.onerror = () => {
        reject(new Error(`${request.status} ${request.statusText}`))
    };

    request.open('GET', "user.json");
    request.send();
};


const loadUserPromise = new Promise(executor);

loadUserPromise
    .then(console.log)
    .catch(console.error);

function createUserItem(user) {
    const userItemContainer = document.createElement('div');
    userItemContainer.classList.add('userItem');

    const userFillNameElem = document.createElement('h3')
    userFillNameElem.classList.add('fullName');
    userFillNameElem.innerText = `${user.name} ${user.surname}`;

    const userAgeElem = document.createElement('h4');
    userAgeElem.classList.add("age");
    userAgeElem.innerText = user.age;

    userItemContainer.appendChild(userFillNameElem);
    userItemContainer.appendChild(userAgeElem);

    return userItemContainer;

}

function appendUserItemToList(user) {
    document.getElementById('userList').appendChild( createUserItem(user))

}*/




///////////////////////////////////////////////////////////////////////////////////////////////////



// ЗАМЕНЯЕМ ПРОМЕСЫ ФУНКЦИЕЙ fetch

fetch('./user.json')
    .then(response => response.json())
    .then(appendUserItemToList)
    .catch(console.error);



function createUserItem(user) {

    const userItemContainer = document.createElement('li');
    userItemContainer.classList.add('userItem');

    const userFullNameElem = document.createElement('h3');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;

    const userAgeElem = document.createElement('h4');
    userAgeElem.innerText = user.age;

    userItemContainer.appendChild(userFullNameElem);
    userItemContainer.appendChild(userAgeElem);

    return userItemContainer;

}

function appendUserItemToList(user) {
    document.getElementById('userList').appendChild( createUserItem(user))

}























