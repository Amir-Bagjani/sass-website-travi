import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="container">
      <div className="alert alert-danger">Invalid credentials</div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i>Sign into your Account
      </p>

      <form className="form">
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minLength={6} />
        </div>
        <input type="submit" value="Sign In" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;
