import { Link } from 'react-router-dom';

function Navbar() {
  //read token
  let token;

  try {
    token = document.cookie.split(';').find(c => c.trim().startsWith('StaticWebAppsAuthCookie=')).split('=')[1];
  } catch (e) {
    token = null;
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">Team4</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback-form">Feedback Form</Link>
            </li>
            { token ?
              <li className="nav-item">
              <a href="/.auth/logout">LOGOUT</a>
              </li>
              :          
              <li className="nav-item">
              <a href="/.auth/login/github">LOGIN</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;