// reduce

const myNums = [1, 2, 3]

// regular function
const myTotal1 = myNums.reduce(function (accumulator, currentValue) {
    // console.log(`acc: ${accumulator} and currval ${currentValue}`);
    return accumulator + currentValue
}, 2)

// arrow function
const myTotal2 = myNums.reduce( (acc, curr) => acc+curr , 0)

console.log(myTotal2);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 9999
    }
]

const totalPrice= shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);