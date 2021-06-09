function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
   return function namedFunction() {
       console.log("my named function");
   };
}

function returnsAnAnonymousFunction() {
    return () => "my anonymous function";
}