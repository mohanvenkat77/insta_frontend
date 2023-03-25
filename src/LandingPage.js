import React from 'react'
import img from './lens.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const nav=useNavigate()
    const clickHandler=() => {
        nav('/posts')
    }
  return (
    <div style={{width:"100%",display:"flex",justifyContent:'center'}}>
      <img src={img} alt="Land"  style={{marginTop:'10vh',height:'80vh',width:'25vw'}}/>
      <div style={{margin:"auto 100px"}}>
        <h1  style={{color:'#006238'}}>10x Team 04</h1>
        <button className='btn' style={{color:'#006238',opacity:'1',border:'2px solid '}} onClick={clickHandler}>Enter</button>
      </div>
    </div>
  )
}

export default LandingPage
