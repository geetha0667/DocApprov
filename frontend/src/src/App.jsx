import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import StudentDashboard from "./pages/student/Dashboard";
import Certificates from "./pages/student/Certificates";
import MyRequests from "./pages/student/MyRequests";
import OfficeDashboard from "./pages/office/Dashboard";
import OfficeRequests from "./pages/office/Requests";
import AdminDashboard from "./pages/admin/Dashboard";
import CertificateDetails from "./pages/student/CertificateDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Student */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/certificates" element={<Certificates />} />
        <Route path="/student/requests" element={<MyRequests />} />
        <Route path="/student/certificates/:id" element={<CertificateDetails />}
/>

        {/* Office */}
        <Route path="/office" element={<OfficeDashboard />} />
        <Route path="/office/requests" element={<OfficeRequests />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
     </Routes>
    </BrowserRouter>
  );
}
export default App;