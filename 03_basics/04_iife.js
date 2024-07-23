// Immediate Invoked Function Expressions (IIFE)

(function one() {
    // named IIFE
    console.log(`DB CONNECTED`);
}());   // semi-colon is required here

// Global scope cause pollution sometimes.. to combat that, IIFE is used as it gets executed immediately

( (name) => {   
    // simple IIFE
    console.log(`DB CONNECTED Again ${name}`);
} )('Prasoon');    // passing argument
