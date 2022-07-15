import React from 'react'

export default function Calculadora() {
    var numero="";
    var a="";
    var b="";
    var op="";

    const agregarNumero = (event,id) => {
        console.log(id);
        console.log(event);

        if(op===""){
            numero=numero+document.getElementById(id).getAttribute("value"); 
            a= a + document.getElementById(id).getAttribute("value"); 
        }else{
            numero=numero+document.getElementById(id).getAttribute("value"); 
            b= b + document.getElementById(id).getAttribute("value"); 
        }
        
        document.getElementById("pantalla").setAttribute("value",numero);        
    };

    const agregarOperacion = (event,id) => {
        numero = numero + document.getElementById(id).getAttribute("value");
        op=document.getElementById(id).getAttribute("value");
        document.getElementById("pantalla").setAttribute("value",numero);
    };

    const calcularTotal = (event,id) => {
        if(op==="x"){
            document.getElementById("pantalla").setAttribute("value",parseFloat(a*b));
            a=parseFloat(a*b);
            numero=a;
            b="";
            op="";
        }
        if(op==="/"){
            document.getElementById("pantalla").setAttribute("value",parseFloat(a/b));
            a=parseFloat(a/b);
            numero=a;
            b="";
            op="";
        }
        if(op==="+"){
            document.getElementById("pantalla").setAttribute("value",parseFloat(a+b));
            a=parseFloat(a+b);
            numero=a;
            console.log(a);
            b="";            
            op="";
        }
        if(op==="-"){
            document.getElementById("pantalla").setAttribute("value",parseFloat(a-b));
            a=parseFloat(a-b);
            numero=a;
            b="";
            op="";
        }
    };

   

    return (
        <div class="flex flex-col items-center content-center  h-96 w-96 bg-pink-400 rounded-box m-10 shadow-md">
            <input disabled id="pantalla" class="pantalla h-16 bg-green-100 w-5/6 max-w-5/6 rounded-box mt-5"></input>
            <div class="base w-full m-6 flex flex-col items-center">
                <div class="numeros flex flex-row justify-between w-4/5 m-1">
                    <button onClick={event => agregarNumero(event,"1")} class="btn w-1/5 rounded-box " id="1" name='1' value={1}>1</button>
                    <button onClick={event =>agregarNumero(event,"2")} class="btn w-1/5 rounded-box " id="2" name='2' value={2}>2</button>
                    <button onClick={event => agregarNumero(event,"3")} class="btn w-1/5 rounded-box " id="3" name='3' value={3}>3</button>
                    <button onClick={event => agregarOperacion(event,"divide")} class="btn w-1/5 rounded-box" name='/' value={"/"} id="divide" >/</button>
                </div>
                <div class="numeros flex flex-row justify-between w-4/5 m-1">
                    <button onClick={event => agregarNumero(event,"4")} class="btn w-1/5 rounded-box " name='4' id="4" value={4}>4</button>
                    <button onClick={event => agregarNumero(event,"5")} class="btn w-1/5 rounded-box " name='5' id="5" value={5}>5</button>
                    <button onClick={event => agregarNumero(event, "6")} class="btn w-1/5 rounded-box " name='6' id="6" value={6}>6</button>
                    <button onClick={event => agregarOperacion(event, "por")} class="btn w-1/5 rounded-box " name='x' id="por" value={"x"}>x</button>
                </div>
                <div class="numeros flex flex-row justify-between w-4/5 m-1">
                    <button onClick={event => agregarNumero(event,"7")} class="btn w-1/5 rounded-box " id="7" name='7' value={7}>7</button>
                    <button onClick={event => agregarNumero(event,"8")} class="btn w-1/5 rounded-box " id="8" name='8' value={8}>8</button>
                    <button onClick={event => agregarNumero(event,"9")} class="btn w-1/5 rounded-box " id="9" name='9' value={9}>9</button>
                    <button onClick={event => agregarOperacion(event,"menos")} class="btn w-1/5 rounded-box " name='-' id="menos" value={"-"}>-</button>
                </div>
                <div class="numeros flex flex-row justify-between w-4/5 m-1">
                    <button onClick={event => agregarNumero(event,"0")} id="0" class="btn w-1/5 rounded-box " name='0' value={0}>0</button>
                    <button onClick={event => agregarNumero(event,"punto")} id="punto" class="btn w-1/5 rounded-box " name='.' value={"."}>.</button>
                    <button onClick={event => agregarOperacion(event,"mas")} id="mas" class="btn w-1/5 rounded-box " name='+' value={"+"}>+</button>
                    <button onClick={event => calcularTotal(event,"igual")} id="igual" class="btn w-1/5 rounded-box " name='=' value={"="}>=</button>
                </div>
            </div>

        </div>
    )
}