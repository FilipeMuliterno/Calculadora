import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
        const [num, setNum] = useState(0);
        const [oldNum, setOldNum] = useState(0);
        const [operator, setOperator] = useState();

        function inputNum(e){
            var input=e.target.value
            if(num===0){
                setNum(input);
            }else
            setNum(num + input);
        }

        function clear(){
            setNum(0)
        }
        
        function porcentage(){
            setNum(num/100)
        }

        function changeSign(){
            if(num>0){
                setNum(-num);
            }else{
                setNum(Math.abs(num));
            }
        }

        function operatorHandler(e){
            var operatorInput=e.target.value;
            setOperator(operatorInput);
            setOldNum(num);
            setNum(0);
        }

        function calculate(){
            if(operator === "/"){
                setNum(oldNum / num);
            } else if (operator === "X"){
                setNum(oldNum * num);
            } else if (operator === "+"){
                setNum(parseFloat(oldNum) + parseFloat(num));
            } else if (operator === "-"){
                setNum(parseFloat(oldNum) - parseFloat(num));
            }
         
        }

    return (
        <div className='all'>
            <h1 className='title'>Calculadora</h1>
            <div className='container'>
                <h1 className='result'>{num}</h1>
                <button className='button orange clearButton' onClick={clear}>AC</button>
                <button className='button  green' onClick={porcentage}>%</button>
                <button className='button  green' onClick={operatorHandler} value="/">/</button>
                <button className='button' onClick={inputNum} value={7}>7</button>
                <button className='button' onClick={inputNum} value={8}>8</button>
                <button className='button' onClick={inputNum} value={9}>9</button>
                <button className='button  green'  onClick={operatorHandler} value="X">X</button>
                <button className='button' onClick={inputNum} value={4}>4</button>
                <button className='button' onClick={inputNum} value={5}>5</button>
                <button className='button' onClick={inputNum} value={6}>6</button>
                <button className='button  green' onClick={operatorHandler} value="-">-</button>
                <button className='button' onClick={inputNum} value={1}>1</button>
                <button className='button' onClick={inputNum} value={2}>2</button>
                <button className='button' onClick={inputNum} value={3}>3</button>
                <button className='button  green' onClick={operatorHandler} value="+">+</button>
                <button className='button' onClick={changeSign}>+/-</button>
                <button className='button' onClick={inputNum} value={0}>0</button>
                <button className='button' onClick={inputNum} value={"."}>.</button>
                <button className='button backGreen' onClick={calculate}>=</button>
                <h1 className='contact' >Contato Profissional</h1>
                <div className='social'>
                    <a target='_blank' rel="noopener noreferrer" className='icon icon-git' href='https://github.com/FilipeMuliterno'><i class="fa fa-github-square fa-3x" aria-hidden="true"></i> </a>    
                    <a target='_blank' rel="noopener noreferrer" className='icon icon-lkdn' href='https://www.linkedin.com/in/filipe-muliterno-2612401a2/'><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> </a>
                </div>
            </div>
        </div>
    )
}