import { Link } from "react-router-dom";

export default function Navbar() {
    return <>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          
       
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  className="navbar-brand">React Internship</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Contect">Contect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Service">Service</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
      </div>
    </div>

    </>


}