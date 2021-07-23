import React, { useState } from "react";
import Input from "../components/Input";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";

const registration = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    company_name: "",
    company_web: "",
    company_profile: "",
    company_etcname: "",
  });

  const responseSuss = () => {
    const value = localStorage.getItem("user");
    const ok = JSON.parse(value);
    alert(ok._id);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register = (e) => {
    e.preventDefault()
    
    const name = localStorage.getItem("user");
    const value = JSON.parse(name);
    alert(value);
    const {
      company_name,
      company_web,
      company_profile,
      company_etcname,
    } = user;
    if (company_name) {
      axios({
        method: "POST",
        url: "http://localhost:2000/api/inforegister",
        data: { token: value, user },
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status==200) {
          console.log("ok");
          history.push("/dash");
        }
      });
    }
  };

  return (
    <div className="c-main-panel">
  
      <div>
        <h1>Advocate</h1>
      </div>
      <div className="c-main-panel__content">
        <form className="form-group">
          <div className="form-group">
            <label>Company Name</label>
            <Input
              type="text"
            
              name="company_name"
              value={user.company_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Comapany Web</label>
            <Input
              type="text"
              name="company_web"
              value={user.company_web}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <label>Company Profile</label>
          <div className="form-group">
            <Input
              type="text"
              
              name="company_profile"
              value={user.company_profile}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Company Etc</label>
            <Input
              type="text"
            
              name="company_etcname"
              value={user.company_etcname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button className="c-button full-width" onClick={Register}>
            {" "}
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default registration;
