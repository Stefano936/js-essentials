// 0 - Bajar repo, hacer hola mundo console.log

// 2 - Funciones:

function add(firstOperator, secondOperator){
    console.log('Sumando', firstOperator, secondOperator);
    return firstOperator + secondOperator;
}

function subtract(firstOperator, secondOperator){
    console.log('Restando', firstOperator, secondOperator);
    return firstOperator - secondOperator;
}

function divide(firstOperator, secondOperator){
    console.log('Dividiendo', firstOperator, secondOperator);
    return firstOperator / secondOperator;
}

function multiply(firstOperator, secondOperator){
    console.log('Multiplicando', firstOperator, secondOperator);
    return firstOperator * secondOperator;
}

console.log(subtract(5,3))
console.log(add(5,3))
console.log(divide(5,3))
console.log(multiply(5,3))

// 3 - Funcion
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

function dress(temperature, isRaining){
    if (isRaining){
        return "Voy con paraguas☂️"
    }
    else if(temperature < 10){
        return "Voy en auto🚗"
    }
    else if(temperature > 30){
        return "Ir de Short🩳"
    }
    else if (temperature = 30){
        return "Voy de lentes🕶"
    }
}

console.log(dress(20, false))

// 4 - Funcion
function calculate(operation, firstOperator, secondOperator){
    switch(operation){
        case 'add':
            return add(firstOperator, secondOperator)
        case 'subtract':
            return subtract(firstOperator, secondOperator)
        case 'divide':
            return divide(firstOperator, secondOperator)
        case 'multiply':
            return multiply(firstOperator, secondOperator)
        default:
            return 'Operacion no valida'
    }
}

console.log(calculate("add", 3, 2))

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])

function eating(name, foods) {
    let food = foods[Math.floor(Math.random() * foods.length)] 
    return `${name} esta comiendo:${food} `
}
console.log(eating("XD", ['Hamburguesa🍔','Papas Fritas🍟','Pata de Pollo 🍗',] ))

// 6 - Funcion
function finalCountDown(count){
    for(let x = count;x >= 0; x--){
        console.log(x)
        if(x == 0){
            console.log("Despegueee")
        }
    }
}

finalCountDown(10)

// 7 - Funcion
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
function getGrade(score) {
    switch (true) {
        case (score >= 0 && score <= 40):
            return 'D';
        case (score >= 41 && score <= 60):
            return 'R';
        case (score >= 61 && score <= 74):
            return 'B';
        case (score >= 75 && score <= 84):
            return 'BMB';
        case (score >= 85 && score <= 96):
            return 'MB';
        case (score >= 97 && score <= 100):
            return 'S';
        default:
            return 'Operacion no valida';
    }
}

console.log(getGrade(50));

// 8 - Funcion
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles
function fillCart(person, articlesCollection){
    person.cart = articlesCollection
    return person
}

console.log(fillCart({name: 'Pepe', cart: []},[{article: '👟', amount: 1, price: 25}]))

// 9 - Funcion
function countBanana(inventory){
    let count = 0
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === '🍌') {
            count++;
        }
    }
    return `Hay una en total ${count} bananas`
}

console.log(countBanana(['🥑','🍌','🥭', '🍌']))

// 10 - Function
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
function getTotal(articlesTotal){
    let total = 0;
    articlesTotal.forEach(article => {
        total += article.price * Number(article.quantity);
    });
    return "El total del pedido es de: " + total + " pesos" 
}

console.log(getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]))

