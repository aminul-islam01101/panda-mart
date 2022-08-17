/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
// 2
const h3LightBlue = document.querySelectorAll('h3');
for (let i = 0; i < h3LightBlue.length; i += 1) {
    h3LightBlue[i].style.color = 'lightBlue';
}
// 3
const backPack = document.querySelector('#backpack');
backPack.style.backgroundColor = 'tomato';
// 4
const cards = document.querySelectorAll('.cards');
for (let i = 0; i < cards.length; i += 1) {
    const elements = cards[i];
    const card = elements.querySelectorAll('div');
    for (let j = 0; j < card.length; j += 1) {
        const element = card[j];
        element.classList.add('rounded-[30px]');
    }
}
// 6
const buyNowBtn = document.querySelectorAll('.btn');
function removeBtn(e) {
    e.preventDefault();
    this.parentNode.removeChild(this);
}

for (let i = 0; i < buyNowBtn.length; i += 1) {
    let btn;
    const elements = buyNowBtn[i];

    const parent = document.querySelectorAll('.cards');

    for (let j = 0; j < parent.length; j += 1) {
        if (elements.textContent.match(/buy now/i) && parent[j].contains(elements)) {
            btn = elements;
            btn.onclick = removeBtn;
        }
    }
}

// 7

const submitBtn = document.querySelector('#submit');
const email = document.querySelector('#email');
submitBtn.setAttribute('disabled', '');

email.addEventListener('keyup', () => {
    const values = email.value;
    if (values === 'email' && values !== '') {
        submitBtn.removeAttribute('disabled');
        submitBtn.addEventListener('click', () => {
            console.log('i am verified');
            email.value = '';
        });
    } else {
        submitBtn.setAttribute('disabled', 'true');
    }
});

// 8

const shoeCard = document.querySelectorAll('.cards');
let cardImage;
shoeCard.forEach((element, index, array) => {
    cardImage = array[0].querySelectorAll('img');
});

for (const image of cardImage) {
    image.addEventListener('mouseover', () => {
        cardImage[0].src = './images/shoes/shoe-3.png';
        cardImage[1].src = './images/shoes/shoe-1.png';
        cardImage[2].src = './images/shoes/shoe-2.png';
    });
}

// 9
const sectionElement = email.closest('section');

sectionElement.addEventListener('dblclick', () => {
    sectionElement.classList.toggle('bg-red-500');
});

// const elem = document.getElementById('email');

//  ✅ Get object of all {name: value}
// const attrs = elem.getAttributeNames().reduce((acc, name) => {
//   return {...acc, [name]: elem.getAttribute(name)};
// }, {});
// console.log(attrs);
const textArea = document.createElement('textarea');
const label = document.createElement('label');

sectionElement.appendChild(label);
sectionElement.appendChild(textArea);
textArea.cols = '50';
textArea.rows = '5';

const submitButton = document.createElement('input');
submitButton.type = 'button';
submitButton.value = 'Submit';
submitButton.className = 'btn bg-red-500 text-white w-40 ';
label.textContent = 'write a message';
sectionElement.appendChild(submitButton);
submitButton.addEventListener('click', () => {
    const message = document.createElement('p');
    message.textContent = textArea.value;

    sectionElement.insertBefore(message, textArea);
    if (textArea.value === '') {
        alert('please write something');
        message.remove();
    } else {
        message.textContent = textArea.value;
    }
});
