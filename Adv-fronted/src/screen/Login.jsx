import React from "react";
import Input from "../components/Input";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { authenticate} from '../helpers/auth';
const Login = () => {
  const history = useHistory();
  const responseSuss = (response) => {
    axios({
      method: "POST",
      url: "http://localhost:2000/api/googlelogin",
      data: { tokenId: response.tokenId },
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      informParent(response);
      console.log(
        "fronted reponse by api",
        // response.data.token,
        response
        // response.data.user.address
      );
    });
    if (response) {
    }
  };

  const informParent = (response) => {
    authenticate(response, () => {
      console.log(response.data.user)
       if (response.data.user.company_name) {

      history.push("/dash");
    } else {
      history.push("/regi");
      console.log("error");
    }
    });
  };
  const ressponsefail = (res) => {
    console.log(res);
  };

  return (
    <div className="c-main-panel">
      <div>
        <h1>Advocate</h1>
      </div>
      <div className="c-main-panel__content">
        <GoogleLogin
          clientId="869974891832-a3dcrgcsipqqka0njjmq3od57rmrbe3e.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          onSuccess={responseSuss}
          onFailure={ressponsefail}
          cookiePolicy={"single_host_origin"}
          className="full-width"
          access_type="online"
          className="c-main-panel__title"
        />
        <h6>
          <span>or</span>
        </h6>

        <form className="form-group">
          <div className="form-group">
            <label>Email</label>
            <Input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>password</label>
            <label className="float-right text-primary small">remember me</label>
            <Input type="text"  className="form-control" />
          </div>
          <button className="c-button full-width">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
