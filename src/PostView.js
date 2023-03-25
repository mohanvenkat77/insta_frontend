import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  icon  from './icon.png'
import { AiOutlineCamera } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import iphone from './iphone.png'
// import car from '../..public/images/car.jpg'
export default function PostView() {

  const nav=useNavigate()
  const [dataa, setdata] = useState([]);
const [statuss,setStatus]=useState(false)
const [error,setError]=useState()
  useEffect(() => {
    fetch("https://insta-backend-v2uf.onrender.com/user")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => {
        setError(err)
        setStatus(true)
      });
  }, []);

  if(statuss === true){
    return <h1>{error}</h1>
  }

  const clickHandler=()=>{
nav('/newpost')
  }

  return (
    <div>
      <div className="Nav">
        <hr/>
        <nav className="navbar">
          <a className="navbar-brand d-flex " href="#">
            <img src={icon} style={{marginLeft:'100px',marginRight:'5px',color:'green',height:'40px',width:'auto'}}/>
            <p className="heading">InstaClone</p>
          </a>
          <AiOutlineCamera onClick={clickHandler} style={{fontSize:'30px',marginRight:'50px'}}/>
        </nav>
        <hr />

      { statuss ? (
        <>
    
        <h1>{error}</h1>
        </>
      ) :
      (
        <>
 

      {
      dataa.reverse().map((x,index)=> (
        <div key={index}>
                <div className="card mx-auto mb-3" style={{ width: "400px", }}>
                <div className="d-flex justify-content-between m-2">
                  <div>
                    <p className="name">{x.name}</p>
                    <p className="location" style={{color:'#707070'}}>{x.location}</p>
                  </div>
                  <BsThreeDots />
                </div>
                 <img className="img" src={x.PostImage}  alt="Card image cap" />
                <div className="d-flex justify-content-between m-2">
                  <div>
                 <div className="w-100 d-flex justify-content-between  ">
                 <AiOutlineHeart />
                    <TbBrandTelegram />
                 </div>
                 <div className="location">{x.likes} likes</div>
                  </div>
                  <div>
                    <p className="location">{x.date}</p>
                  </div>
                </div>
              <div className="name m-2">{x.description}</div>
             
              </div>
      </div>
      )).reverse()
      }
      </>
      )
      
      }

      </div>
    </div>
  );
}
