function receivesAFunction(callback){
     callback()
}

function returnsANamedFunction(){
    return function moo () {
        console.log("I am a cow");
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("Anything you say");
}