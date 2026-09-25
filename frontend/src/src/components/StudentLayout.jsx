import { Link } from "react-router-dom";
import "./StudentLayout.css";

function StudentLayout({ children }) {
  return (
    <div className="student-layout">
      <aside className="sidebar">
        <h1 className="logo">DocApprov</h1>
        <nav>
          <Link to="/student/profile">Profile</Link>
          <Link to="/student/certificates">
            MY Certificates
          </Link>
          <Link to="/student/requests">
            My Requests
          </Link>
        </nav>
        <button className="logout-button">
          Logout
        </button>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
export default StudentLayout;