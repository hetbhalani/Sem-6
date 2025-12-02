var a = "a"

function foo(){
    let b = "c"
    a = "b"
    console.log(a)
}
foo()
console.log(a)
console.log(b)