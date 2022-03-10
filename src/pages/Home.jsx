import "../styles/home.scss"

const Home = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            Developer Connector
          </h1>
          <p className="lead">
            Create developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <a href="register" className="btn btn-primary">Sign Up</a>
            <a href="login" className="btn btn-primary">Login</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home