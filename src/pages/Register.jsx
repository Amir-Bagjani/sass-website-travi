import { Link } from "react-router-dom";
import "../styles/register.scss";
const Register = () => {
  return (
    <section className="container">
      <h1 className="large Email-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i>Create Your Account
      </p>

      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Name" />
          <small className="form-text">
            This site uses Gravatar, so if you want a Gravatar image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minLength={6} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm password" minLength={6} />
        </div>
        <p className="my-1">Already have an account? <Link to="/login">Sign In</Link></p>
      </form>
    </section>
  );
};

export default Register;
