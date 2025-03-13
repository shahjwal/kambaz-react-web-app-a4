import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{paddingLeft: "30px"}}>
      <h3>Signup</h3>

      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mt-1 mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2 mt-2"
            style={{marginBottom: "5px"}}>
            Signup </Link>
       <Link  to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
);}
