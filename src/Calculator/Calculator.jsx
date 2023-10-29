import React from 'react'
import "./Calculator.css"
import { useState } from 'react'

const Calculator = () => {

    const [display, setDisplay]= useState('')

    const addDisplay =(value)=>{

        setDisplay((previous)=>previous+value)

    }

    const controlClear =()=>{
        setDisplay('')
    }

    const controlDelete =()=>{

        setDisplay(previous => previous.slice(0,-1))
    }

    const controlcalculate =()=>{
        setDisplay((previous)=>{
            try{
                setDisplay(eval(previous))
            }
            catch(err){
                setDisplay("Error!!")
            }
        })
    }
  return (
    <div className='container'>
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="controls">
                <button className='bottons' onClick={controlClear}>C</button>
                <button className='bottons' onClick={()=>addDisplay(".")}>.</button>
                <button className='bottons' onClick={()=>addDisplay('%')}>MOD</button>
                <button className='bottons' onClick={controlDelete}>&larr;</button>
                <br />
                <button className='bottons' onClick={()=>addDisplay(1)}>1</button>
                <button className='bottons' onClick={()=>addDisplay(2)}>2</button>
                <button className='bottons' onClick={()=>addDisplay(3)}>3</button>
                <button className='bottons' onClick={()=>addDisplay("+")}>+</button>
                <br />
                <button className='bottons' onClick={()=>addDisplay(4)}>4</button>
                <button className='bottons' onClick={()=>addDisplay(5)}>5</button>
                <button className='bottons' onClick={()=>addDisplay(6)}>6</button>
                <button className='bottons' onClick={()=>addDisplay("-")}>-</button>
                <br />

                <button className='bottons' onClick={()=>addDisplay(7)}>7</button>
                <button className='bottons' onClick={()=>addDisplay(8)}>8</button>
                <button className='bottons' onClick={()=>addDisplay(9)}>9</button>
                <button className='bottons' onClick={()=>addDisplay("*")}>*</button>
                <br />
                <button className='bottons' onClick={()=>addDisplay('^')}>^</button>
                <button className='bottons' onClick={()=>addDisplay(0)}>0</button>
                <button className='bottons' onClick={()=>addDisplay('/')}>/</button>
                <button className='bottons' onClick={controlcalculate}>=</button>
                
                <br />





            </div>

          
        </div>
    </div>
  )
}

export default Calculator