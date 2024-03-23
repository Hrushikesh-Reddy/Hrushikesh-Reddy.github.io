let b1 = document.getElementById("1");

let chance = 0;
let combs = [new Array(3), new Array(3), new Array(3)];
const arr = new Array(10), conv = {
    1:[0, 0], 2:[0, 1], 3:[0, 2], 4:[1, 0], 5:[1, 1], 6:[1, 2], 7:[2, 0], 8:[2, 1], 9:[2, 2]
};
let ctr = 0;
function incr(i){
    let elm = arr[i];
    if(chance % 2 == 0 && elm.innerHTML === ""){
        chance = 1;ctr++;
        combs[conv[i][0]][conv[i][1]] = "X";
        elm.innerHTML = "X";}
    else if(elm.innerHTML === ""){
        combs[conv[i][0]][conv[i][1]] = "O";
        chance = 0;ctr++;
        elm.innerHTML = "O";
    }
    if(ctr >= 4){tictactoe(combs);}
}

function changecolor(calc){
    for(let i in conv){
        if(calc.includes(String(conv[i]))){
            console.log(i, String(conv[i]))
            arr[i].style.backgroundColor = "#90ee90";}
    }
}

function tictactoe(combs){
    let x = 0, o = 0, calcx = [], calco = [];
    for(let i = 0 ; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(combs[i][j] === "X"){
                x++;
                calcx.push(String([i, j]));
            }
            else if(combs[i][j] === "O"){
                o++;
                calco.push(String([i, j]));
            }
        }
        if(x === 3){
            changecolor(calcx);
            return ;
        }
        else if(o === 3){
            changecolor(calcx);
            return ;
        }else{
            x = 0, o = 0, calco = [], calcx = [];
        }
    }
    for(let i = 0 ; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(combs[j][i] === "X"){
                x++;
                calcx.push(String([j, i]));
            }
            else if(combs[j][i] === "O"){
                o++;
                calco.push(String([j, i]));
            }
        }
        if(x === 3){
            changecolor(calcx);
            return ;
        }
        else if(o === 3){
            changecolor(calcx);
            return ;
        }else{
            x = 0, o = 0, calco = [], calcx = [];
        }
    }
    for(let i = 0; i < 3; i++){
        if(combs[i][i] == "X"){
            ++x;
            calcx.push(String([i,i]));
        }
        else if(combs[i][i] == "O"){
            ++o;
            calco.push(String([i,i]));
        }
    }
    if(x === 3){
        changecolor(calcx);
        return ;
    }else if(o === 3){
        changecolor(calcx);
        return ;
    }else{
        x = 0, o = 0, calco = [], calcx = [];
    }
    let up = 2, dn = 0;
    for(let i = 0; i < 3; i++){
        console.log(combs);
        console.log(up-i, dn+i)
        if(combs[up-i][dn+i] == "X"){
            ++x;
            calcx.push(String([up-i,dn+i]));
        }
        else if(combs[up-i][dn+i] == "O"){
            ++o;
            calco.push(String([up-i,dn+i]));
        }
        
    }
    if(x === 3){
        changecolor(calcx);
        return ;
    }else if(o === 3){
        changecolor(calco);
        return ;
    }else{
        return;
    }
}

for(let i = 1 ; i < 10; i++){
    arr[i] = document.getElementById(String((i)));
    arr[i].addEventListener("click", function(){incr(i)});
}

document.getElementById("reset").addEventListener("click", function(){
    for(let i = 1; i < 10; i++){
        arr[i].innerHTML = "";
        arr[i].style.backgroundColor = "lightyellow";
    }
    combs = [new Array(3), new Array(3), new Array(3)];
    chance = 0;
});