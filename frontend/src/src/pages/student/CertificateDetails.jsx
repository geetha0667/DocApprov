import { Link } from "react-router-dom";
import StudentLayout from "../../components/StudentLayout";
import "./CertificateDetails.css";

function CertificateDetails() {
  return (
    <StudentLayout>

      <div className="certificate-details">

        <Link to="/student/certificates" className="back-link">
          ← Back to Certificates
        </Link>

        <div className="details-header">
          <h1>Bonafide Certificate</h1>
          <p>
            Certificate confirming that you are currently
            studying at the college.
          </p>
        </div>


        <div className="details-card">

          <h2>Required Documents</h2>

          <div className="document-list">

            <div className="document">
              <span>📄</span>
              <p>Application Form</p>
            </div>

            <div className="document">
              <span>📄</span>
              <p>Fee Receipt</p>
            </div>

            <div className="document">
              <span>🪪</span>
              <p>Student ID</p>
            </div>

          </div>

        </div>


        <div className="details-card">

          <h2>Documents to Upload</h2>

          <div className="upload-info">
            <p>Application Form</p>
            <button>Choose File</button>
          </div>

          <div className="upload-info">
            <p>Fee Receipt</p>
            <button>Choose File</button>
          </div>

        </div>


        <div className="details-card">

          <h2>Physical Documents</h2>

          <p className="info-text">
            Please bring the following documents to the office
            after your online request has been reviewed.
          </p>

          <div className="physical-document">
            🪪 Original Student ID
          </div>

          <div className="physical-document">
            ✍ Signed Application Form
          </div>

        </div>


        <div className="details-card">

          <h2>Office Information</h2>

          <div className="office-info">
            <p>
              <strong>Office:</strong> Student Section
            </p>

            <p>
              <strong>Processing Time:</strong> 3 working days
            </p>

            <p>
              <strong>Office Hours:</strong> 10:00 AM – 4:00 PM
            </p>
          </div>

        </div>


        <div className="apply-section">

          <Link to="/student/apply">
            <button className="apply-button">
              Apply for Certificate
            </button>
          </Link>

        </div>

      </div>

    </StudentLayout>
  );
}

export default CertificateDetails;