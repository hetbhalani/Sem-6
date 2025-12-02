function greet(name, callback){
    callback();
    console.log(name);
}

function morning(){
    console.log("Good morning");
}

greet("VK", morning)