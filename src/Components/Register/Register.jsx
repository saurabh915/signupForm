import React, { useState } from "react";
import './Register.css'
function Register() {

  const [formData, setFormData] = useState({
    fname: "",
    lname:"",
    email: "",
    password:"",
    cpassword:""
    
  });
  const [errors, setErrors] = useState({
    fname: "",
    lname:"",
    email: "",
    password:"",
    cpassword:""
  });

  const handleChange = (event) => {
    console.log(formData)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = (event) => {
   
    event.preventDefault();
    let hasError = false;
    const newErrors = {
      fname: "",
        lname:"",
        email: "",
        password:"",
        cpassword:""
    };

    if (formData.fname === "") {
      hasError = true;
      newErrors.fname = "First Name is required";
    }
    if (formData.lname === "") {
      hasError = true;
      newErrors.lname = "Last Name is required";
    }
    if (formData.password === "") {
      hasError = true;
      newErrors.password = "Password is required";
    }
    if (formData.cpassword === "") {
      hasError = true;
      newErrors.cpassword = "confirm Password is required";
    }
    if (formData.email === "") {
      hasError = true;
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);
    if (!hasError) {
      console.log("Form submitted successfully");
      setFormData({
        fname: "",
        lname:"",
        email: "",
        password:"",
        cpassword:""
      });
    }
  };
  return (
    <>

       
  <div className="forms mask d-flex align-items-center h-70 ">
    <div className="container h-680">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" >
            <div className="card-body p-5">
              <div className='l1' ></div>
              <h2 className=" text-center mb-5">Register</h2>
              <div className='l2' ></div>
              <form onSubmit={validateForm}>

                <div className="form-outline mb-4  mt-1">
                  <div className='fullName'>
                  <div className="leftside  ">
                    {errors.fname && <p style={{ color: "red" ,fontSize:"9px"}}>{errors.fname}</p>}
                      <input value={formData.fname}
        onChange={handleChange}  name="fname" type="text" id="form3Example1cg" className="form-control form-control-lg"  placeholder="First Name" style={{width :"215px"}}/>
                </div>
                <div className="rightside  ">
        {errors.lname && <p style={{ color: "red" ,fontSize:"9px",wordWrap:"no-wrap"}}>{errors.lname}</p>}
                  <input  name="lname" type="text" value={formData.lname}
        onChange={handleChange} id="form3Example1cg" className="form-control form-control-lg" placeholder="Last Name" style={{width :"215px"}}/>
                
                </div>
                </div>
                  </div>
                
                  {errors.email && <p style={{ color: "red",fontSize:"9px"}}>{errors.email}</p>}
                <div className="form-outline mb-4">
                  <input value={formData.email}
        onChange={handleChange} name="email"type="email" id="form3Example3cg" className="form-control form-control-lg"  placeholder="Email"  />
                
                </div>
                {errors.password && <p style={{ color: "red" ,fontSize:"9px"}}>{errors.password}</p>}
                <div className="form-outline mb-4">
                  <input value={formData.password}
        onChange={handleChange} name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Password"/>
                
                </div>
                {errors.cpassword && <p style={{ color: "red" ,fontSize:"9px"}}>{errors.cpassword}</p>}
                <div className="form-outline mb-4">
                  <input value={formData.cpassword}
        onChange={handleChange} name="cpassword" type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Confirm Password" />
                 
                </div>

                <div className=" form-check d-flex align-items-center mb-5">
                  <input name="cb" className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I accept the <a href="#!" className="text-body"><u style={{color:
                    "green",textDecoration:"none"}}>Terms of Use </u>& <u style={{color:
                      "green",textDecoration:"none"}}>Privacy Policy</u></a>
                  </label>
                </div>

                <div className="btposition d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-success btn-block btn-lg  text-body2" onClick={validateForm}>Register Now</button>
                </div>

              
              </form>
  <p className="text-center lp  mt-5 mb-0 " style={{color:"white"}}> Already have an Account? <a href="#!"
                    className="fw-bold text-body2"><u> Sign in</u></a></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Register