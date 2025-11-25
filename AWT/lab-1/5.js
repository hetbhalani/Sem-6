let n = 5
let temp = n
for(let i = 0; i<=n; i++){
    temp = n
    for(let j = n; j>i; j--){
        process.stdout.write(" ")
    }
    for(let k = 0; k<i; k++){
        process.stdout.write(temp-- + " ")
    }
    console.log()
}