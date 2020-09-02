var person = {
    firstName: 'Zaid',
    lastName: 'Binjabi',
    age: '24',
    information: function() {
        return (
            this.firstName + ' ' + this.lastName + ', ' + this.age + 'Years Old.'
        );
    },
};

function print_25() {
    var i = 0;
    var chars = ['a', 'b', 'c', 'd'];
    var stringP = [];
    for (i; i < 50; i++) {
        let random = Math.floor(Math.random() * (4 - 0)) + 0;
        stringP += chars[random];
    }
    return stringP + ' ' + stringP.length;
}
// var random1 = Math.random();
// console.log(Math.floor(random1 * 4));
// console.log(random1 * 4);
// console.log(random1);

arroww = function() {
    return 'hi';
};

URL1 = () => document.documentURI;
baseURI1 = () => document.domain;

const hero = {
    name: 'superHero',
    alis: 'ability',
};

const takeProperty = 'name';
console.log(hero);
console.log(hero.name);
console.log(hero[takeProperty]);

const priceInput = document.querySelector('[name=price]');
const quantity = document.querySelector('[name=quantity]');
const cost = document.querySelector('.cost');
const quantityLabel = document.querySelector('.quantityLabel');

culcTotalCost = function() {
    const total = priceInput.value * quantity.value;
    quantityLabel.innerText = '(' + [quantity.value] + ')';
    cost.innerText = '$' + total.toFixed(2);
};

priceInput.addEventListener('input', culcTotalCost);
quantity.addEventListener('input', culcTotalCost);

culcTotalCost();
// let pricesLearen = {
//     price: (any = document.querySelector('[name=price]').value),
//     quantity: (any = document.querySelector('[name=quantity]').value),
//     cost: (any = document.querySelector('.cost')),
//     quantityLabel: (any = document.querySelector('.quantityLabel')),

//     culcTotalCost: function() {
//         const total = this.price * this.quantity;
//         this.cost.innerText = '$' + total.toFixed(2);
//     },
// };
// console.log(pricesLearen.culcTotalCost());