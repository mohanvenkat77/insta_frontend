import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
const NewPost = () => {
  const nav = useNavigate();
  const [err,setErr]=useState(false)
  const [fname,setfname]=useState();
  const [post, setPost] = useState({
    name: "",
    location: "",
    description: "",
    likes: 0,
    date: moment().format("DD MMM YYYY")
  });
  const [postImage,setPostImage]=useState('')
  const changehandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const clickHandler = () => {
    // if(!post.PostImage || !post.name || !post.location || !post.description ) {
    //     return setErr(!err)
    // }
    const {date,name,location,description}=post
    axios
      .post("https://insta-backend-v2uf.onrender.com/user",{date,name,location,description,PostImage:postImage.toString()})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    nav("/posts");
  };



  const handleImageProduct = (e) => {
    const file = e.target.files[0];
    setfname(e.target.value)
    transformFile(file);
    // setvalue(false);
  };


  const transformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPostImage(reader.result);
      };
    } else {
      setPostImage("");
    }
  };



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          height: "200px",
          width: "500px",
          border: "2px solid #707070",
          display: "flex",
        }}
      >
        <div style={{ paddingTop: "25px", paddingLeft: "20px" }}>
     
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<input
          id="files"
            type="file"
            name="PostImage"
            accept="image/*,video/*"
            onChange={handleImageProduct}
            style={{display:'none'}}
          />
          <input type='text' placeholder={fname ? fname : "no file choosen"} style={{width:'350px'}} />
           <label for="files" class="btn" style={{border:'1px solid #707070',backgroundColor:'#f0f0f0',width:'100px',height:'30px'}}>Browse</label>
</div>
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              justifyContent: 'space-between',
              width: "450px",

            }}
          >
            <input
              type="text"
              placeholder="Author"
              style={{
                width: "180px",
                borderRadius: "5px",
                border: "1px solid #707070",
              }}
              onChange={changehandler}
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Location"
              style={{
                width: "180px",
                borderRadius: "5px",
                border: "1px solid #707070",
              }}
              onChange={changehandler}
              name="location"
              required
            />
          </div>
          <div
            style={{
              paddingTop: "10px",
              width: "450px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Description"
              style={{
                width: "450px",
                borderRadius: "5px",
                border: "1px solid #707070",
              }}
              onChange={changehandler}
              name="description"
              required
            />
          </div>
          {err ? (
            <>
            <h6 style={{color:"red",display:'flex',justifyContent:'center'}}>*every field is required</h6>
            </>
          ): (null)}
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                border: "1px solid #707070",
                borderRadius: "5px",
                width: "100px",
              }}
              onClick={clickHandler}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
