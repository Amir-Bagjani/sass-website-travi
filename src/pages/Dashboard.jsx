import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="container">
        <h1 className="large text-primary">
            Dashboard
        </h1>
        <p className="lead">
            <i className="fas fa-user"> Welcome John Doe</i>
        </p>

        <div className="dash-buttons">
            <Link to="/edit-profile" className="btn btn">
                <i className="fas fa-user-circle text-primary"></i> Edit profile
            </Link>
            <Link to="/add-experience" className="btn btn">
                <i className="fab fa-black-tie text-primary"></i>  Add Experience
            </Link>
            <Link to="/add-education" className="btn btn">
                <i className="fas fa-graduation-cap text-primary"></i> Add Education 
            </Link>
        </div>

        <h2 className="my-2">Experience Credentials</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Company</th>
                    <th className="hide-sm">Title</th>
                    <th className="hide-sm">Years</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Microdoft</td>
                    <td className="hide-sm">Senior Developer</td>
                    <td className="hide-sm">Oct 2011 to Current</td>
                    <td>
                        <button className="btn btn-danger"> Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Sun Microsystems</td>
                    <td className="hide-sm">Senior Developer</td>
                    <td className="hide-sm">Oct 2004 to Nov 2010</td>
                    <td>
                        <button className="btn btn-danger"> Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        


        <h2 className="my-2">Education Credentials</h2>

        
        <table className="table">
            <thead>
                <tr>
                    <th>School</th>
                    <th className="hide-sm">Degree</th>
                    <th className="hide-sm">Years</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>University of Washington</td>
                    <td className="hide-sm">MAsters</td>
                    <td className="hide-sm">Oct 209 - June 1999</td>
                    <td>
                        <button className="btn btn-danger"> Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="my-2">
            <button className="btn btn-danger">
                <i className="fas fa-user-minus"></i> Delete My Account
            </button>
        </div>
            
    </section>
  )
}

export default Dashboard;