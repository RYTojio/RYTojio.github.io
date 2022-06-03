/*mouse click and if*/
const blackShiba = document.querySelector('.vis');
const tanShiba = document.querySelector('.notvis');
//event
console.log(blackShiba);
console.log(tanShiba);
/*if statement*/
function active() {
    if(tanShiba.classList.contains('notvis')) {
        tanShiba.classList.add('vis');
        tanShiba.classList.remove('notvis');
        blackShiba.classList.add('notvis');
        blackShiba.classList.remove('vis');
    }else{
        blackShiba.classList.add('vis');
        blackShiba.classList.remove('notvis');
        tanShiba.classList.add('notvis');
        tanShiba.classList.remove('vis');
    }
}
/* array */
let data = [
    {
        name: 'Sesame',
        rarity: 'Super rare'
    },
    {
        name: 'Red Sesame',
        rarity: 'Rare'
    },
    {
        name: 'Black Sesame',
        rarity: 'Rare'
    },
    {
        name: 'Cream',
        rarity: 'Rare'
    },
    {
        name: 'Black & Tan',
        rarity: 'Uncommon'
    },
    {
        name: 'Red',
        rarity: 'Common'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + item.rarity + '</div>';
});

info.innerHTML = details.join('\n');
/*end array*/