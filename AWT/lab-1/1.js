let a = 2
let b = 10
let flag = 0

for(let i = a; i<b; i++){
    flag = 0
    for(let j = 2; j<i; j++){
        if(i%j == 0){
            flag = 1
            break
        }
    }
    if(!flag){
        console.log(i)
    }
}

