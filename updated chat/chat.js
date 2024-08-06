// const input = document.getElementById('message-box');
// const display = document.querySelector('#display');
// const messageContent = messageBox.value.trim();



// function send(){
//     const txt = document.createTextNode(input.value);
//     const par = document.createElement('div');
//     par.appendChild(txt);
//     display.appendChild(par);
//     input.value = '';

//     // const input = document.querySelector('input');
//     // const section = document.querySelector('section');

//     // if (messageContent !== '') {
//     //     // addMessageToChat(messageContent);
//     //     messageBox.value = '';
//     // }
//     // document.getElementById('display-side');
//     // const txt = document.createElement(input.value);
//     // const par = document.createTextNode('p');

//     // par.appendChild(txt);
//     // section.appendChild(par);
// }

// function addcontact(){
//     const name = prompt('enter name');
//     const addcontact = document.querySelector('#addcontact');

//         const number = prompt("enter number");
        
//         if(number < 0){
//             alert('invalid number');
//         }
//         else{
//             let history = [];
//             const output = document.getElementById('output');
//             output.innerHTML = name + number;
//             history.push(name);
//             updatename(name)
//         history.appendChild(name);
//         }
        
//     }
//     addcontact.addEventListener('click', addcontact);

// function updatename(name){
//     updatename.innerHTML = ''; 
//     for(var i = 0 ; i < history.length ; i++){
//          const name = document.createElement('p');
//          name.innerHTML = `${ i + 1}  ${getname(history[i])}`;
//     }
// }


const input = document.getElementById('message-box');
const display = document.querySelector('#display');
let history = [];

function send(){
    const messageContent = input.value.trim();
    if (messageContent !== '') {
        const txt = document.createTextNode(messageContent);
        const par = document.createElement('div');
        par.appendChild(txt);
        display.appendChild(par);
        input.value = '';
    }
}

function addContact(){
    const name = prompt('Enter name');
    if (name) {
        const number = prompt('Enter number');
        if (number && number >= 0) {
            history.push(name);
            updateNameList();
        } else {
            alert('Invalid number');
        }
    }
}

function updateNameList(){
    const output = document.getElementById('output');
    output.innerHTML = ''; 
    history.forEach((name, index) => {
        const nameElement = document.createElement('p');
         nameElement.textContent = `${name}`;
        output.appendChild(nameElement).style.cssText= "border-top: 1px solid white; border-bottom: 1px solid white;  margin: 9px; width: 370px; padding-left: 14px"
    });
}

