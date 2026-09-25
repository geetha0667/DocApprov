import StudentLayout from "../../components/StudentLayout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <StudentLayout>

      <div className="dashboard-header">
        <h1>Good morning! 👋</h1>
        <p>Manage your certificate requests easily.</p>
      </div>

      {/* Search */}
      <div className="certificate-search">
        <input
          type="text"
          placeholder="Search for a certificate..."
        />

        <button>Search</button>
      </div>

      {/* Status Summary */}
      <div className="status-section">

        <div className="status-box">
          <h3>2</h3>
          <p>Active Requests</p>
        </div>

        <div className="status-box">
          <h3>1</h3>
          <p>Action Required</p>
        </div>

        <div className="status-box">
          <h3>3</h3>
          <p>Completed</p>
        </div>

      </div>

      {/* Action Required */}
      <section className="dashboard-section">

        <h2>Action Required</h2>

        <div className="action-card">

          <div>
            <h3>Scholarship Certificate</h3>

            <p>
              Your application has been reviewed.
              Please bring the required physical documents
              to the Student Section.
            </p>

            <strong>Bring:</strong>

            <ul>
              <li>Original Student ID</li>
              <li>Signed Application Form</li>
            </ul>
          </div>

          <button>View Request</button>

        </div>

      </section>

      {/* Recent Requests */}
      <section className="dashboard-section">

        <h2>Recent Requests</h2>

        <div className="request-card">

          <div>
            <h3>Bonafide Certificate</h3>
            <p>Submitted on 15 September 2026</p>
          </div>

          <span className="status under-review">
            Under Review
          </span>

        </div>

        <div className="request-card">

          <div>
            <h3>Study Certificate</h3>
            <p>Submitted on 10 September 2026</p>
          </div>

          <span className="status ready">
            Ready for Collection
          </span>

        </div>

      </section>

      {/* Office Notice */}
      <section className="dashboard-section">

        <h2>Office Notice</h2>

        <div className="notice-card">
          <h3>📌 Student Section Notice</h3>

          <p>
            Please submit physical documents only during
            office working hours: 10:00 AM – 4:00 PM.
          </p>
        </div>

      </section>

    </StudentLayout>
  );
}

export default Dashboard;