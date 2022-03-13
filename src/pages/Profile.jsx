import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="container">
      <Link to="/profiles" className="btn my-1">
        Back To Profiles
      </Link>

      <div className="profile-grid my-1">
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />

          <h1 className="large">John Doe</h1>
          <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <div className="icons my-1">
            <Link to="">
              <i className="fas ga-globe fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fas fa-twitter fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fas fa-facebook fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fas fa-linkedin fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fas fa-instagram fa-2x"></i>
            </Link>
          </div>
        </div>

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">John's Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            nisi quod explicabo sunt, eaque suscipit commodi, dicta quae
            voluptatibus libero sint unde vel illo alias pariatur necessitatibus
            accusantium tempora. Fugit.
          </p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            <div className="p-1">
              <i className="fas fa-check"></i> HTML
            </div>
            <div className="p-1">
              <i className="fas fa-check"></i> Css
            </div>
            <div className="p-1">
              <i className="fas fa-check"></i> JavaScript
            </div>
            <div className="p-1">
              <i className="fas fa-check"></i> Python
            </div>
          </div>
        </div>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experiences</h2>
          <div>
            <h3>Microsoft</h3>
            <p>Oct 2011 - Current</p>
            <p>
              <strong>Position: </strong> Senior Developer
            </p>
            <p>
              <strong>Description: </strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est quas nisi eaque corporis, quo
              ducimus.
            </p>
          </div>

          <div>
            <h3>Sun Microsystems</h3>
            <p>Oct 2004 - Nov 2010</p>
            <p>
              <strong>Position: </strong> Systems Admin
            </p>
            <p>
              <strong>Description: </strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est quas nisi eaque corporis, quo
              ducimus.
            </p>
          </div>
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Educations</h2>
          <div>
            <h3>Univercity of Washengton</h3>
            <p>Sep 1993 - Jun 1999</p>
            <p>
              <strong>Degree: </strong> Masters
            </p>
            <p>
              <strong>Field Of Study : </strong> Computer Sience
            </p>
            <p>
              <strong>Description: </strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est quas nisi eaque corporis, quo
              ducimus.
            </p>
          </div>
        </div>

        <div className="profile-github">
          <h2 className="text-primary my-1">
            <i className="fab fa-github"></i> Github Repos
          </h2>
          <div className="repo bg-white my-1 p-1">
              <div>
                  <h4><Link to=''>Repo One</Link></h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, eum!</p>
              </div>

              <div>
                  <ul>
                      <li className="badge badge-primary">Stars: 44</li>
                      <li className="badge badge-dark">Watchers: 22</li>
                      <li className="badge badge-light">Forks: 25</li>
                  </ul>
              </div>
          </div>
          <div className="repo bg-white my-1 p-1">
              <div>
                  <h4><Link to=''>Repo Two</Link></h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, eum!</p>
              </div>

              <div>
                  <ul>
                      <li className="badge badge-primary">Stars: 44</li>
                      <li className="badge badge-dark">Watchers: 22</li>
                      <li className="badge badge-light">Forks: 25</li>
                  </ul>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
