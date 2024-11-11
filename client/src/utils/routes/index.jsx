import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Navbar from "../../components/navbar";
import Employee from "../../pages/employee";
import Attendance from "../../pages/attendance";

const Routes = () => {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route path="/" element={<Dashboard />} />
          <Route path="employee" element={<Employee />} />
          <Route path="attendance" element={<Attendance />} />
          {/*
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} /> */}
        </Switch>
      </Navbar>
    </Router>
  );
};

export default Routes;
