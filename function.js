function greet(person = 'Guest') {
    console.log(`Hi, ${person}!`);
}

greet();



function add(a = 0, b = 0) {
    console.log(a + b);
}

add();
add(5);
add(5, 10)


function totalPrice(price = 0, quantity = 1) {
    console.log(`Total: ${price * quantity} taka`);
}

totalPrice(100, 5);

totalPrice(200);



function introduce(name = 'Unknown', dept = 'Assigned') {
    console.log(`Name: ${name}, Department: ${dept}`);
}


introduce('salauddin', 'CST');
introduce('Hasan');
introduce()



function isLoggedIn(status = false) {
  console.log(`User logged in: ${status}`);
}

isLoggedIn(true);
isLoggedIn();


function makeOrder(item = 'Burger', quantity = 1) {
    console.log(`You ordered ${quantity} ${item}  `);
}

makeOrder('Pizz', 2);
 