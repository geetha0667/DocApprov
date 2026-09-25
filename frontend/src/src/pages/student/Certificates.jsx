import StudentLayout from "../../components/StudentLayout";
import "./Certificates.css";
import { Link } from "react-router-dom";

function Certificates() {
  return (
    <StudentLayout>

      <div className="certificates-header">
        <h1>Certificates</h1>
        <p>
          Find the certificate you need and check the required documents.
        </p>
      </div>

      <div className="certificate-search">
        <input
          type="text"
          placeholder="Search certificates..."
        />

        <button>Search</button>
      </div>

      <div className="certificates-list">

        <div className="certificate-item">
          <div>
            <h2>Bonafide Certificate</h2>

            <p>
              Certificate confirming that you are currently
              studying at the college.
            </p>

            <span>
              Processing time: 3 working days
            </span>
          </div>

          <Link to="/student/certificates/bonafide">
          <button>View Details</button>
</Link>
        </div>


        <div className="certificate-item">
          <div>
            <h2>Scholarship Certificate</h2>

            <p>
              Certificate required for scholarship applications.
            </p>

            <span>
              Processing time: 5 working days
            </span>
          </div>

          <button>View Details</button>
        </div>


        <div className="certificate-item">
          <div>
            <h2>Study Certificate</h2>

            <p>
              Certificate confirming your period of study
              at the college.
            </p>

            <span>
              Processing time: 3 working days
            </span>
          </div>

          <button>View Details</button>
        </div>


        <div className="certificate-item">
          <div>
            <h2>Character Certificate</h2>

            <p>
              Certificate stating the student's conduct
              during their period of study.
            </p>

            <span>
              Processing time: 5 working days
            </span>
          </div>

          <button>View Details</button>
        </div>

      </div>

    </StudentLayout>
  );
}

export default Certificates;