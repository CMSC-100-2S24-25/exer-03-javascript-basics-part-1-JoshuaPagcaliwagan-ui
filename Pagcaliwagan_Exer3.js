//Joshua O. Pagcaliwagan CMSC 100 C-1l 2023-00016 Feb 18,2025 Exer 3 JavaScript Basics
function check(a,b){//function to check password criteria, a is real password, b is password user input
    if(a !== b){//if a is not b
        return false;//false, passwords need to be the same
    }
    if(a.length<8){//if a is less than 8 chars
        return false;//false, must be at least 8 chars
    }
    //set to false first to check if password has at least upper and lowercase letter, and number
    let up = false;
    let low = false;
    let num = false;

    for(let i=0; i<a.length; i++){//for loop through traverse all characters
        let char=a[i];//set variable
        if (char>='A' && char<='Z'){//if there's uppercase
            up = true;//set to true
        } else if (char>='a' && char<='z'){//if there's lowercase
            low = true;//set to true
        } else if (char>='0' && char<='9'){//if there's number
            num = true;//set to true
        }}

    if(up == true && low == true && num == true){//if has upper and lowercase letters and number
        return true;//set to true
    } else {//if not
        return false;//set to false
    }
}

function revs(str){//function to reverse string
    let rev="";//set to empty string
    for(let i=str.length - 1; i>=0; i--){//start from last char, move backwards
        rev += str[i];//append to reversed
    }
    return rev;//return reversed string
}

function store(name, a, b){//function to keep password in object
    let val=check(a,b);//checks password first, then store in var
    let res={};//empty object
    res.name = name;//assign name
    
    if(val==true){//if password is valid
        res.newpass = revs(a);//calls function to reverse password, store in res.newpass
    } else{
        res.newpass = a;//if password is invalid, store original password in res.newpass
    }
    return res;//return result
}

//test runs
console.log(store("John", "Pass1234", "Pass1234"));
console.log(store("John", "Pass123", "Pass12345"));

