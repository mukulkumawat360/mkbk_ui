 import { useState } from "react"
import {retriveUserExistance} from "./LoginApiService"
import { useNavigate } from "react-router-dom"
import loginbg from '../Images/loginbg.svg';




  export default function  Loginpage(){
    
    const navigate = useNavigate();
    const [checkUser,UpdateUser] = useState(" Lets Check You Are Existing Of Not ")
    const [loginMessage,setloginMessage]=useState("");
    const[requestdata,UpdatedRequest]=useState({
      srno:"1",
      username:"",
      password:""
    })

    const handle=(name,value)=>{

      UpdatedRequest({
        ...requestdata,
        [name]:value
      });
  
    };

    function onSubmitClick(event){

console.log(requestdata);
      event.preventDefault();
    console.log(requestdata)
      retriveUserExistance(requestdata)
      .then((response)=>{
        UpdateUser(response.data);
        console.log(response);
      })
      .catch((error)=>console.log(error))
      .finally(()=>console.log("cleanup"))
if(checkUser=="Y"){
  console.log("Routing to next Stage");
  navigate("/welcome");
}else{
  setloginMessage("Username or Password is Wrong");
  navigate("/login");
}
    }



return(

    <>

<div>

<div className="container-fluid vh-100 overflow-auto">
  <div className="row vh-100 ">
    <div className="col-lg-6 bg-gray p-5 text-center">
      <h4 className="text-center fw-bolder fs-2">Register</h4>
      <p className="mb-3 fs-7">Register Now and Fell the New Digital World</p>
      
        <button className="btn fw-bold mb-5 btn-outline-success px-4 rounded-pill" onClick={()=>{navigate("/signup")}}>Sign Up</button>
     
      <div className="img-cover p-4">
        <img src={loginbg} alt="" />
      </div>
    </div>
    <div className="col-lg-6 p  vh-100">
      <div className="row d-flex vh-100">
        <div className="col-md-8 p-4 ikigui m-auto text-center align-items-center">
          <p>{loginMessage}</p>
          <h4 className="text-center fw-bolder mb-4 fs-2">Login</h4>
          <div className="input-group mb-4">
            <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-person" /></span>
            <input type="text" name="username" className="form-control ps-2 border-start-0 fs-7 inbg form-control-lg mb-0" placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1" onChange={({target})=>{handle(target.name,target.value)}} />
          </div>
          <div className="input-group mb-4">
            <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-lock" /></span>
            <input name="password" type="password" onChange={({target})=>{handle(target.name,target.value)}}  className="form-control ps-2 fs-7 border-start-0 form-control-lg inbg mb-0" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <button className="btn btn-lg fw-bold fs-7 btn-success  w-100" onClick={onSubmitClick}>Login</button>
          <p className="text-center py-4 fw-bold fs-8">Or Sign in with social platforms</p>
          <ul className="d-inline-block mx-auto">
            <li className="float-start px-3"><a href><i className="bi bi-facebook" /></a></li>
            <li className="float-start px-3"><a href><i className="bi bi-twitter" /></a></li>
            <li className="float-start px-3"><a href><i className="bi bi-linkedin" /></a></li>
            <li className="float-start px-3"><a href><i className="bi bi-google" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>  
</div>
    </>

)
};
