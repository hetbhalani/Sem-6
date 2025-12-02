class a{
    b = "yes"
    c = "common"
    
    abc(){
        console.log("abc ni andar", this.b, this.c)
    }
}

const foo = new a()
foo.abc()