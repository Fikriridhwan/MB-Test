const fs = require('fs')

const initialize = (blacklist) =>{
    try{
        list = fs.readFileSync(blacklist, 'utf8')
        list = list.toString().split("\n")
        for(i in list) {
            list[i] = list[i].split(" ")
        }
        return list
    }catch(e){
        return []
    }
    
}

const check_blacklist = (name,phone_number) =>{
    try{
        result = true
        blacklist = initialize('blacklist.txt')
        for(i in blacklist) {
            if(blacklist[i][0]  == name && blacklist[i][1]  == phone_number ){
                result = false
            }else{
                result = true
            }
        }
        return result
    }catch(e){
        return []
    }
    
}
console.log(check_blacklist('Melisa',2908345))

const array2 = initialize('blacklist.txt')
console.log(array2[0][0])


