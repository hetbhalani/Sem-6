let n = 5
let temp = n
for(let i = 1; i<=n; i++){
    for(let j = 1; j<i; j++){
        process.stdout.write(" ")
    }
    for(let k = i; k<=n; k++){
        if(i%2==0){
            process.stdout.write("@ ")
        }
        else{
            process.stdout.write("* ")
        }
    }
    console.log()
}