// Create a function in a second file, use export to export it
// 2. In your main file import and execute the function

import { add } from "./secondFileImport.js";

console.log(add(1, 2));

// 3. Write out a fat arrow function using the same line to return (as in no return keyword)
// 4. Add default parameters to the above function

const concatStrings = (a = "Hello", b = "everybody") => `${a} ${b}`;
console.log(concatStrings("Hello", "Jon"));
console.log(concatStrings());

// 5. Create an object that has a child object, that itself has a child object (3 levels).

const sale = {
  saleId: "A388554",
  quote: {
    quantity: 2,
    unitPrice: 20,
    product: {
      productName: "T-shirt",
      colour: "red",
    },
  },
};

// 6. Use object destructuring to pull out the parts at level 3
// 7. Add a default value to the above destructuring
const { productName = "Blank Product", colour = "Colour not selected" } =
  sale.quote.product;
console.log(productName, colour);

// 8. Destructure an array

const deliveryOptions = ["1st class", "2nd class", "One day delivery"];

const [item1, item2, item3] = deliveryOptions;

console.log(item1);

// 9. Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object. Use the spread operator.
// 11. Add a function to one of the objects, use the object method shorthand.

location = {
  street: "Berry Lane",
  town: "London",
  country: "UK",
};

customer = {
  firstName: "Joe",
  lastname: "Bloggs",
  fullname() {
    console.log(firstName, lastname);
  },
  ...location,
};

console.log(customer);

// 10. Send 5 arguments to a function and use the rest operator to group them
function collect(...nums) {
  console.log(nums);
}

collect(1, 2, 3, 4, 6, 4, 6, 4, 3);
