import React from "react";
import { Link } from "react-router-dom";


const Posts = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">Welcome to the community</p>

      <div className="post-form">
        <div className="post-form-header bg-primary">
          <h3>Say something...</h3>
        </div>
        <form className="form my-1">
          <textarea placeholder="Create a post" cols="30" rows="5"></textarea>
          <button type="submit" className="btn btn-dark my-1">
            Submit
          </button>
        </form>
        <div className="posts">
          <div className="post bg-white my-1 p-1">
            <div>
              <Link to="/profile">
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                  className="round-img"
                />
                <h4>John Doe</h4>
              </Link>
            </div>

            <div>
              <p className="my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis dolor libero velit dicta fuga sunt quasi.
                Eos, error. Numquam, voluptatem! Quos placeat esse est quasi
                dolor non sequi iusto?
              </p>
              <button className="btn">
                  <i className="fas fa-thumbs-up"></i> 
                   <span>4</span>
              </button>
              <button className="btn">
                  <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to="/post" className="btn btn-primary">Discution</Link>
            </div>
          </div>

          <div className="post bg-white my-1 p-1">
            <div>
              <Link to="/profile">
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                  className="round-img"
                />
                <h4>John Doe</h4>
              </Link>
            </div>

            <div>
              <p className="my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis dolor libero velit dicta fuga sunt quasi.
                Eos, error. Numquam, voluptatem! Quos placeat esse est quasi
                dolor non sequi iusto?
              </p>
              <button className="btn">
                  <i className="fas fa-thumbs-up"></i> 
                   <span>4</span>
              </button>
              <button className="btn">
                  <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to="/post" className="btn btn-primary">Discution</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
