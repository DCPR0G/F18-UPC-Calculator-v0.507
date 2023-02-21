"use strict"

// CARGAR CALCULADORA //

const calculator = document.querySelector(".container-calc");

addEventListener("load",()=>{
    calculator.style.opacity = 1
});

// ERRORES DEL SISTEMA //

let err500 = "ERR 500"
let err510 = "ERR 510"
let err520 = "ERR 520"
let err530 = "ERR 530"
let err540 = "ERR 540"
let err550 = "ERR 550"
let NAN = "NaN"

// PANTALLA //

const mainScreen = document.querySelector(".tipping");

// VALOR ACTUAL //

let actualValue = [``,``,``];

//- - - - - - - - - - - - BOTONES NÚMEROS - - - - - - - - - - - -//

const botonesNumeros = document.querySelectorAll(".button-num");

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",()=>{
        countPowRoot = 1
        setTimeout(() => {
            boton.blur(actualValue);
        }, 1);

        if(mainScreen.innerHTML[22] == `E` || mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
            mainScreen.innerHTML= ``
            actualValue = [``,``,``];
        }
    

        else if (actualValue[1] == ``){

            actualValue[0] += boton.value
                            
            if(boton.value == 1){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }
        }

        else if((actualValue[1] == `^` && actualValue[0] != ``)||(actualValue[1] == `√` && actualValue[0] != ``)){
            
            actualValue = [``,``,``];
            mainScreen.innerHTML = ``;

            arrowsButtons.forEach(arrow => {
                arrow.style.display = `none`
            })
            screenRoot.innerHTML = ``;
            screenPower.innerHTML = ``;

            countPowRoot = 1;

            for (let i = 0; i < err550.length; i++){
                if (err550[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-ERR510">${err550[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${err550[i]}</p>`
                }
            }
        }

        else if(actualValue[1] == `^` && actualValue[0] == ``){

            actualValue[2] += boton.value

            mainScreen.innerHTML = ``

            let actualValue0String = `${actualValue[2]}`

            for(let i = 0; i < actualValue0String.length; i++){
                if( actualValue0String[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                }
                else if( actualValue0String[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                }
                else {
                    mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                }
            }
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
        }

        else {

            actualValue[2] += boton.value

            if(boton.value == 1){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }

        }
        verifyTippingOnOff();
        verifyLength();
    })
});

//- - - - - - - - - - - - BOTONES OPERADORES - - - - - - - - - - - -//

let OPcount = ``;

const botonesOperadores = document.querySelectorAll(".button-op");

botonesOperadores.forEach(botonOP => {
    botonOP.addEventListener("click",()=>{

        actualValue[1] += botonOP.value

        verifyOP();

        if(OPcount.length < 1){
            return
        }
        
        else if(mainScreen.innerHTML[22] == `E`){
            mainScreen.innerHTML= ``
            actualValue = [``,``,``];
        }

        else if(botonOP.value == `+`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--plus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `-`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--minus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `/`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--division-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `x`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--multiplication-sign">${botonOP.value}</p>`
        }


        else if(botonOP.value == `^`){
            if (actualValue[2] == `` && actualValue[1] == `^`){

                mainScreen.innerHTML = ``

                actualValue[2] = actualValue[0]
                actualValue[0] = ``

                let actualValue0String = `${actualValue[2]}`
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">${botonOP.value}</p>`
            }
        }


        else if(botonOP.value == `√`){
            if (actualValue[2] == ``){
                mainScreen.innerHTML = ``
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--root-sign">${botonOP.value}</p>`

                actualValue[2] = actualValue[0]
                actualValue[0] = ``

                let actualValue0String = `${actualValue[2]}`
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
            }
        }
        verifyTippingOnOff();
        verifyLength();
    })
});

//- - - - - - - - - - - - - - - BOTON AC - - - - - - - - - - - - - - -//

const buttonAC = document.querySelector(".AC-button");

buttonAC.addEventListener("click",()=>{
    actualValue = [``,``,``];
    screensInUse = [false,false,false,false,false];
    resultScreen5.innerHTML = ``;
    resultScreen4.innerHTML = ``;
    resultScreen3.innerHTML = ``;
    resultScreen2.innerHTML = ``;
    resultScreen1.innerHTML = ``;
    mainScreen.innerHTML = ``;
    saveResults = [false,false,false,false,false];
    OPcount = ``;
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    });
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;
    countPowRoot = 1
})

//- - - - - - - - - - - - - - - BOTON ENTER - - - - - - - - - - - - - - -//

const buttonENTER = document.querySelector(".button-enter");

addEventListener("keypress",()=>{
    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
    OPcount = ``;
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    });
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;
    countPowRoot = 1
})

buttonENTER.addEventListener("click",()=>{
    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
    OPcount = ``;
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    });
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;
    countPowRoot = 1
})

//- - - - - - - - - - - - - - - CALCULAR - - - - - - - - - - - - - - -//

let result

const calculate = (num1,op,num2) => {

    if (num1 == ``){
        num1 = 0;
    }

    else if(op == ``){
        op = `+`
        num2 = 0;
    }

    else if(num2 == ``){
        num2 = 0;
    }

    if (op == `+`){
        result = parseFloat(num1) + parseFloat(num2);
        putInScreen(Math.round(result)); 
        saveResult(Math.round(result));
    }
    else if (op == `-`){
        result = parseFloat(num1) - parseFloat(num2);
        let resultString = result.toString()
        if (resultString.includes("-")){
            putInScreen("N"); 
            saveResult("N");
        }
        else{
            putInScreen(result); 
            saveResult(result);
        }
    }
    else if (op == `x`){
        result = parseFloat(num1) * parseFloat(num2);
        putInScreen(Math.round(result)); 
        saveResult(Math.round(result));
    }
    else if (op == `/`){
        result = parseFloat(num1) / parseFloat(num2);
        let resultString = result.toString()
        if (resultString.includes(".")){
            putInScreen("^"+Math.round(result)); 
            saveResult(Math.round(result));
        }
        else{
            putInScreen(result); 
            saveResult(result);
        }
    }
    else if (op == `^`){
        result = Math.pow(parseFloat(num2),parseFloat(num1));
        putInScreen(Math.round(result)); 
        saveResult(Math.round(result));
    }
    else if (op == `√`){
        result = Math.pow(parseFloat(num2), 1/parseFloat(num1));
        let resultString = result.toString();
        if (resultString.includes(".")){
            putInScreen("^"+Math.round(result)); 
            saveResult(Math.round(result));
        }
        else{
            putInScreen(result); 
            saveResult(result);
        }
    }
}

//- - - - - - - - - - - - - - - PUT IN SCREENS - - - - - - - - - - - - - - -//

const resultScreen1 = document.querySelector(".result1");
const resultScreen2 = document.querySelector(".result2");
const resultScreen3 = document.querySelector(".result3");
const resultScreen4 = document.querySelector(".result4");
const resultScreen5 = document.querySelector(".result5");

let screensInUse = [false,false,false,false,false];

const putInScreen = (res) =>{

    let resString = res.toString()

    if(resString == "Infinity"){
        pullDownScreens();
        for (let i = 0; i < err510.length; i++){
            if (err510[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-ERR510">${err510[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${err510[i]}</p>`
            }
        }
    }

    else if (resString == "N"){
        pullDownScreens();
        for (let i = 0; i < err520.length; i++){
            if (err520[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-ERR520">${err520[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${err520[i]}</p>`
            }
        }
    }

    else if(resString.length > 8){
        pullDownScreens();
        for (let i = 0; i < err540.length; i++){
            if (err540[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-ERR510">${err540[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${err540[i]}</p>`
            }
        }
    }

    else if (screensInUse[0] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[0] = true;
        screensInUse[4] = false;
    }
    else if (screensInUse[1] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[1] = true;
    }
    else if (screensInUse[2] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[2] = true;
    }
    else if (screensInUse[3] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[3] = true;
    }
    else if (screensInUse[4] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[4] = true;
        screensInUse[0] = false;
        screensInUse[1] = false;
        screensInUse[2] = false;
        screensInUse[3] = false;
    }
    verifyTippingOnOff();
}

const pullDownScreens = ()=>{
    resultScreen5.innerHTML = resultScreen4.innerHTML;
    resultScreen4.innerHTML = ``;
    resultScreen4.innerHTML = resultScreen3.innerHTML;
    resultScreen3.innerHTML = ``;
    resultScreen3.innerHTML = resultScreen2.innerHTML;
    resultScreen2.innerHTML = ``;
    resultScreen2.innerHTML = resultScreen1.innerHTML;
    resultScreen1.innerHTML = ``;
}

//- - - - - - - - - - - - - - - SAVE RESULTS - - - - - - - - - - - - - - -//

let saveResults = [false,false,false,false,false];

const saveResult = (res)=>{
    pullDownResults();
    if (saveResults[0] == false){
        saveResults[0] = res;
    }
    else if (saveResults[1] == false){
    pullDownResults();
        saveResults[1] = saveResults[0];
        saveResults[1] = res;
    }
    else if (saveResults[2] == false){
    pullDownResults();
        saveResults[2] = saveResults[1];
        saveResults[2] = res;
    }
    else if (saveResults[3] == false){
    pullDownResults();
        saveResults[3] = saveResults[2];
        saveResults[3] = res;
    }
    else if (saveResults[4] == false){
    pullDownResults();
        saveResults[4] = saveResults[3];
        saveResults[4] = res;
    }
}

const pullDownResults = () =>{
    saveResults[4] = false;
    saveResults[4] = saveResults[3];
    saveResults[3] = false;
    saveResults[3] = saveResults[2];
    saveResults[2] = false;
    saveResults[2] = saveResults[1];
    saveResults[1] = false;
    saveResults[1] = saveResults[0];
    saveResults[0] = false;
}

//- - - - - - - - - - - - - - - BOTÓN DEL - - - - - - - - - - - - - - -//

const buttonDEL = document.querySelector(".button-delete");

buttonDEL.addEventListener("click",()=>{
    mainScreen.innerHTML = ``
    actualValue = [``,``,``];
    OPcount = ``
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    })
    countPowRoot = 1
    verifyTippingOnOff();
})

//- - - - - - - - - - - - - - - BOTÓNES TAKE - - - - - - - - - - - - - - -//

const takeButtons = document.querySelectorAll(".button-take");

takeButtons.forEach(buttonTK => {
    buttonTK.addEventListener("click",()=>{

        if(mainScreen.innerHTML[22] == `E`){
            mainScreen.innerHTML= ``
            actualValue = [``,``,``];
        }

        else if (buttonTK.value == 1){
            let saveResultsString = saveResults[0].toString()

            if (saveResults[0] == false){
                return
            }
            else if (saveResults[0] == Infinity || saveResults[0] == "N" || isNaN(saveResults[0])){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[0];
                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[0]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if(actualValue[0] == `` && actualValue[1] == `√`){
                actualValue[2] += saveResults[0]
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[0]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[0]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[0]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 2){
            let saveResultsString = saveResults[1].toString()
            if (saveResults[1] == false){
                return 
            }
            else if (saveResults[1] == Infinity || saveResults[1] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[1]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[1]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[1]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[1]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[1]
            }
            for (let i = 0; saveResultsString.length > i ; i++){

                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 3){
            let saveResultsString = saveResults[2].toString()
            if (saveResults[2] == false){
                return 
            }
            else if (saveResults[2] == Infinity || saveResults[2] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[2]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[2]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[2]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[2]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[2]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 4){
            let saveResultsString = saveResults[3].toString()
            if (saveResults[3] == false){
                return 
            }
            else if (saveResults[3] == Infinity || saveResults[3] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[3]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[3]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[3]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[3]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[3]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 5){
            let saveResultsString = saveResults[4].toString()
            if (saveResults[4] == false){
                return 
            }
            else if (saveResults[4] == Infinity || saveResults[4] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[4]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[4]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[4]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[4]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[4]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }
        verifyLength();
        verifyTippingOnOff();
    })
})

//- - - - - - - - - - - - - COMPROBAR LARGO PANTALLA MAIN - - - - - - - - - - - - -//

const verifyLength = ()=>{
    let actualValueString = `${actualValue[0]}${actualValue[1]}${actualValue[2]}`

    if (actualValueString.length >= 11){
        mainScreen.innerHTML = ``
        actualValue = [``,``,``];
        for(let i = 0; i < err500.length; i++){
            mainScreen.innerHTML += `<p class="tipping-on">${err500[i]}</p>`
        }
        arrowsButtons.forEach(arrow => {
            arrow.style.display = `none`
        })
        screenRoot.innerHTML = ``;
        screenPower.innerHTML = ``;

        countPowRoot = 1;
        verifyTippingOnOff();
    }
}

//- - - - - - - - - - - COMPROBAR NUM OPERADORES - - - - - - - - - - -//

const verifyOP = () => {

    OPcount = actualValue[1]

    if (OPcount.length > 1){
        mainScreen.innerHTML = ``;
        actualValue = [``,``,``];
        OPcount = ``;
        for(let i = 0; i < err530.length; i++){
            mainScreen.innerHTML += `<p class="tipping-on">${err530[i]}</p>`
        };
        arrowsButtons.forEach(arrow => {
            arrow.style.display = `none`
        });
        screenRoot.innerHTML = ``;
        screenPower.innerHTML = ``;
        countPowRoot = 1
        verifyTippingOnOff();
    }
}

//- - - - - - - - - - AMBOS BOTONES DE ABAJO (LOS ROTATORIOS) - - - - - - - - -//

const arrowsButtons = document.querySelectorAll(".arrows-buttons");

//- - - - - - - - - - BOTÓN POTÉNCIA - - - - - - - - -//

const powerButton = document.querySelector(".button-op-advanced--power");
const screenPower = document.querySelector(".power-tipping-container");

const arrowsPower = document.querySelectorAll(".arrows-p");

let countPowRoot = 1

powerButton.addEventListener("click",()=>{

    actualValue[0] = countPowRoot

    if(mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
        mainScreen.innerHTML= ``
        actualValue = [``,``,``];
    }

    else if (actualValue[1] == `^`){
        arrowsPower.forEach(arrowP => {
            arrowP.style.display = "block"
        })
        if (countPowRoot < 10 && countPowRoot > 0){
            let countPowRootString = countPowRoot.toString();
            screenPower.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString}</p>`
        }
        else if(countPowRoot >= 10 && countPowRoot < 100){
            let countPowRootString = countPowRoot.toString();
            screenPower.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
        }
        else{
            screenPower.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
        }
    }
    verifyTippingOnOff();
})

arrowsPower.forEach(arrowP => {
    arrowP.addEventListener("click",()=>{

        if (arrowP.innerHTML == 1){

            if(countPowRoot > 1){
                countPowRoot --;
                actualValue[0] = countPowRoot;
                let countPowRootString = countPowRoot.toString();
                if(countPowRoot < 10){
                    screenPower.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenPower.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenPower.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }

        else if (arrowP.innerHTML == 2){

            if(countPowRoot < 99){
                countPowRoot ++
                actualValue[0] = countPowRoot
                let countPowRootString = countPowRoot.toString()
                if(countPowRoot < 10){
                    screenPower.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenPower.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenPower.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }
        verifyTippingOnOff();
    })
})

//- - - - - - - - - - BOTÓN RAÍZ - - - - - - - - -//

const rootButton = document.querySelector(".button-op-advanced--root");
const screenRoot = document.querySelector(".root-tipping-container");

const arrowsRoot = document.querySelectorAll(".arrows-r");

rootButton.addEventListener("click",()=>{

    actualValue[0] = countPowRoot

    if(mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
        mainScreen.innerHTML= ``
        actualValue = [``,``,``];
    }

    else if (actualValue[1] == `√`){

        arrowsRoot.forEach(arrowR => {
            arrowR.style.display = "block"
        })
        if (countPowRoot < 10){
            let countPowRootString = countPowRoot.toString();
            screenRoot.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString}</p>`
        }
        else if(countPowRoot >= 10 && countPowRoot < 100){
            let countPowRootString = countPowRoot.toString();
            screenRoot.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
        }
        else{
            screenRoot.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
        }
    }
    verifyTippingOnOff();
})

arrowsRoot.forEach(arrowR => {
    arrowR.addEventListener("click",()=>{

        if (arrowR.innerHTML == 1){

            if(countPowRoot > 1){
                countPowRoot --;
                actualValue[0] = countPowRoot;
                let countPowRootString = countPowRoot.toString();
                if(countPowRoot < 10){
                    screenRoot.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenRoot.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenRoot.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }

        else if (arrowR.innerHTML == 2){

            if(countPowRoot < 99){
                countPowRoot ++;
                actualValue[0] = countPowRoot;
                let countPowRootString = countPowRoot.toString();
                if(countPowRoot < 10){
                    screenRoot.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenRoot.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenRoot.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }
        verifyTippingOnOff();
    })
})

//- - - - - - - - - - ELEMENTOS A CAMBIAR A MODO OSCURO - - - - - - - - -//

//- - - - - - - - - - BOTONES, TEXTOS Y BASES - - - - - - - - -//

const basesBasic = document.querySelectorAll(".base-basic");
const basesBasicTK = document.querySelectorAll(".base-basic-buttonTK");

const rotaryButtons2Base = document.querySelectorAll(".rotary-button2--base");
const rotaryButtons2OvalBack = document.querySelectorAll(".oval-back");
const rotaryButtons2OvalMain = document.querySelectorAll(".oval-main");
const rotaryButtons2OvalCenter = document.querySelectorAll(".oval-center");

const rotaryButtons1 = document.querySelectorAll(".rotary-button");

const buttonUpperPanel1 = document.querySelector(".upper-panel--down-button-base-basic--button1");
const buttonUpperPanel2 = document.querySelector(".upper-panel--down-button-base-basic--button2");
const buttonUpperPanelHEX = document.querySelector(".upper-panel--down-button-base-basic--button3");

const textsPanel = document.querySelectorAll(".text-panel");
const upperTextsPanel = document.querySelectorAll(".upper-panel-text");

//- - - - - - - - - - BOTÓN BRT - - - - - - - - -//

const BRTbutton = document.querySelector(".rotary-button-brt");

let BRTon = 0

BRTbutton.addEventListener("click",()=>{
    if (BRTon == 0){
        BRTbutton.style.transform = "rotate(-120deg)";

        //- - - - - - - - - - BOTONES UPPER PANEL - - - - - - - - -//

        buttonUpperPanel1.setAttribute("ID","upper-panel--down-button-base-basic--button1-night");
        buttonUpperPanel2.setAttribute("ID","upper-panel--down-button-base-basic--button2-night");
        buttonUpperPanelHEX.setAttribute("ID","upper-panel--down-button-base-basic--button3-night");

        //- - - - - - - - - - TEXTOS - - - - - - - - -//

        textsPanel.forEach(textPanel => {
            textPanel.classList.add("text-panel-night")
        });

        upperTextsPanel.forEach(upperTextPanel => {
            upperTextPanel.classList.add("upper-panel-text-night")
        });

        //- - - - - - - - - - BOTONES CUADRADOS y ENTER - - - - - - - - -//

        botonesNumeros.forEach(boton => {
            boton.classList.add("button-square-night")
        });
        botonesOperadores.forEach(botonOP => {
            botonOP.classList.add("button-square-night")
        });
        buttonDEL.classList.add("button-square-night");
        buttonENTER.classList.add("button-square-night");
        buttonAC.classList.add("button-square-night");

        //- - - - - - - - - - BOTONES TAKE - - - - - - - - -//

        takeButtons.forEach(buttonTK => {
            buttonTK.classList.add("button-take-night")
        });

        //- - - - - - - - - - BASE BOTONES - - - - - - - - -//

        basesBasic.forEach(baseBasic => {
            baseBasic.classList.add("base-basic-night")
        });

        basesBasicTK.forEach(baseBasicTK => {
            baseBasicTK.setAttribute("ID","base-basic-buttonTK-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS DERECHA - - - - - - - - -//

        rotaryButtons1.forEach(rotaryButton1 => {
            rotaryButton1.classList.add("rotary-button-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS ABAJO - - - - - - - - -//

        rotaryButtons2Base.forEach(rotaryButton2Base => {
            rotaryButton2Base.classList.add("rotary-button2--base-night")
        });

        rotaryButtons2OvalBack.forEach(rotaryButton2OvalBack => {
            rotaryButton2OvalBack.classList.add("oval-back-night")
        });

        rotaryButtons2OvalMain.forEach(rotaryButton2OvalMain => {
            rotaryButton2OvalMain.classList.add("oval-main-night")
        });

        rotaryButtons2OvalCenter.forEach(rotaryButton2OvalCenter => {
            rotaryButton2OvalCenter.classList.add("oval-center-night")
        });

        BRTon = 1
    }
    else{
        BRTbutton.style.transform = "rotate(-45deg)";


        //- - - - - - - - - - BOTONES UPPER PANEL - - - - - - - - -//

        buttonUpperPanel1.removeAttribute("ID","upper-panel--down-button-base-basic--button1-night");
        buttonUpperPanel2.removeAttribute("ID","upper-panel--down-button-base-basic--button2-night");
        buttonUpperPanelHEX.removeAttribute("ID","upper-panel--down-button-base-basic--button3-night");

        //- - - - - - - - - - TEXTOS - - - - - - - - -//

        textsPanel.forEach(textPanel => {
            textPanel.classList.remove("text-panel-night")
        });

        upperTextsPanel.forEach(upperTextPanel => {
            upperTextPanel.classList.remove("upper-panel-text-night")
        });


        //- - - - - - - - - - BOTONES CUADRADOS y ENTER - - - - - - - - -//

        botonesNumeros.forEach(boton => {
            boton.classList.remove("button-square-night")
        });
        botonesOperadores.forEach(botonOP => {
            botonOP.classList.remove("button-square-night")
        });
        buttonDEL.classList.remove("button-square-night");
        buttonENTER.classList.remove("button-square-night");
        buttonAC.classList.remove("button-square-night");

        //- - - - - - - - - - BOTONES TAKE - - - - - - - - -//

        takeButtons.forEach(buttonTK => {
            buttonTK.classList.remove("button-take-night")
        });

        //- - - - - - - - - - BASE BOTONES - - - - - - - - -//

        basesBasic.forEach(baseBasic => {
            baseBasic.classList.remove("base-basic-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS DERECHA - - - - - - - - -//

        rotaryButtons1.forEach(rotaryButton1 => {
            rotaryButton1.classList.remove("rotary-button-night")
        });

        basesBasicTK.forEach(baseBasicTK => {
            baseBasicTK.removeAttribute("ID","base-basic-buttonTK-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS ABAJO - - - - - - - - -//

        rotaryButtons2Base.forEach(rotaryButton2Base => {
            rotaryButton2Base.classList.remove("rotary-button2--base-night")
        });

        rotaryButtons2OvalBack.forEach(rotaryButton2OvalBack => {
            rotaryButton2OvalBack.classList.remove("oval-back-night")
        });

        rotaryButtons2OvalMain.forEach(rotaryButton2OvalMain => {
            rotaryButton2OvalMain.classList.remove("oval-main-night")
        });

        rotaryButtons2OvalCenter.forEach(rotaryButton2OvalCenter => {
            rotaryButton2OvalCenter.classList.remove("oval-center-night")
        });

        BRTon = 0
    }
    verifyTippingOnOff();
})

const verifyTippingOnOff = () => {

    if (BRTon == 1){
        let tippingsOn = document.querySelectorAll(".tipping-on")
        tippingsOn.forEach(t => {
            t.style.textShadow =  `0 0 3px rgb(47, 255, 75)`
        })
    }
    else{
        let tippingsOn = document.querySelectorAll(".tipping-on")
        tippingsOn.forEach(t => {
            t.style.textShadow =  `none`
        })
    }
}