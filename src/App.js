import React, { useState } from 'react'
import "./app.css"
const App = () => {
  const [number, setNumber] = useState("")
  const [circle, setCircle] = useState("")
  function handleCircle(event){
    setCircle(event.target.id)
  }
  function getNumber(event){
    number != 0 ? setNumber(prevValue => prevValue + event.target.id) : setNumber(event.target.id);
  }

  function deleteValue(){
    setNumber(String(number).slice(0, -1))
  }
  function calc(){
    setNumber(eval(number))
  }
  console.log(circle)
  return (
    <div className='app-container' style={circle == "circle1" ? {backgroundColor:"#3b4664", color:"white"} : circle == "circle2" ? {backgroundColor:"#E7E7E7", color:"black"}  : circle == "circle3" ? {backgroundColor:"#170629", color:"#e9d867"}: {} }>
      <div className='cal-container'>
        <div className='top-cal'>
          <h1>calc</h1>
          <div className='right-top-cal'>
            <p>THEME</p>
            <div className='cal-style'>
              <p>1 2 3</p>
              <div className='cal-style-square'>
                <div className='circle' id='circle1' onClick={handleCircle} style={circle == "circle1" ? {backgroundColor:"#d04031"} : {backgroundColor:"white"}}></div>
                <div className='circle' id='circle2' onClick={handleCircle} style={circle == "circle2" ? {backgroundColor:"#c85300"} : {backgroundColor:"white"}}></div>
                <div className='circle' id='circle3' onClick={handleCircle} style={circle == "circle3" ? {backgroundColor:"#02ded0"} : {backgroundColor:"white"}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className='cal-display' style={circle == "circle1" ? {backgroundColor:"#191f32"} : circle == "circle2" ? {backgroundColor:"#efefef"}  : circle == "circle3" ? {backgroundColor:"#1d0836"}: {} }>
          <h1>{number}</h1>
        </div>
        <div className='cal-body' style={circle == "circle1" ? {backgroundColor:"#252e42"} : circle == "circle2" ? {backgroundColor:"#d4cdce"}  : circle == "circle3" ? {backgroundColor:"#1d0836"}: {} }>
          <div className='cal-item' id="7" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>7</div>
          <div className='cal-item' id="8" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>8</div>
          <div className='cal-item' id="9" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>9</div>
          <div className='cal-item' onClick={deleteValue} style={circle == "circle1" ? {backgroundColor:"#647299", borderBottom:"4px solid #baaca2", color:"white"} : circle == "circle2" ? {backgroundColor:"#398088", borderBottom:"4px solid #baaca2", color:"white"}  : circle == "circle3" ? {backgroundColor:"#55067c", borderBottom:"4px solid #5c1873", color:"white"}: {} }>DEL</div>
          <div className='cal-item' id="4" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>4</div>
          <div className='cal-item' id="5" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>5</div>
          <div className='cal-item' id="6" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>6</div>
          <div className='cal-item' id="+" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>+</div>
          <div className='cal-item' id="1" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>1</div>
          <div className='cal-item' id="2" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>2</div>
          <div className='cal-item' id="3" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>3</div>
          <div className='cal-item' id="-" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>-</div>
          <div className='cal-item' id='.' onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>.</div>
          <div className='cal-item' id="0" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>0</div>
          <div className='cal-item' id="/" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>/</div>
          <div className='cal-item' id="*" onClick={getNumber} style={circle == "circle1" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2", color:"#4F505A"} : circle == "circle2" ? {backgroundColor:"#e9e3dc", borderBottom:"4px solid #baaca2"}  : circle == "circle3" ? {backgroundColor:"#321a51", borderBottom:"4px solid #5c1873"}: {} }>x</div>
          <div className='cal-item reset' onClick={() => setNumber("")} style={circle == "circle1" ? {backgroundColor:"#647299", borderBottom:"4px solid #baaca2", color:"white"} : circle == "circle2" ? {backgroundColor:"#398088", borderBottom:"4px solid #baaca2", color:"white"}  : circle == "circle3" ? {backgroundColor:"#55067c", borderBottom:"4px solid #5c1873", color:"white"}: {} }>RESET</div>
          <div className='cal-item equal' onClick={calc} style={circle == "circle1" ? {backgroundColor:"#D13F30", borderBottom:"4px solid #baaca2", color:"white"} : circle == "circle2" ? {backgroundColor:"#c85401", borderBottom:"4px solid #baaca2", color:"white"}  : circle == "circle3" ? {backgroundColor:"#00dece", borderBottom:"4px solid #5c1873", color:"white"}: {} }>=</div>
        </div>
      </div>
    </div>
  )
}

export default App
