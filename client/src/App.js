import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Course } from './pages/Course'
import Patients from './pages/AllCourses/Patients';
import OPD from './pages/AllCourses/OPD';
import Conference from './pages/AllCourses/Conference';
import Emergency from './pages/AllCourses/Emergency';
import ObserveMajor from './pages/AllCourses/ObserveMajor'; 
import HelpMajor from './pages/AllCourses/HelpMajor';
import HelpObserveMinor from './pages/AllCourses/HelpObserveMinor';
import FirstAid from './pages/AllCourses/FirstAid';
import Stitches from './pages/AllCourses/Stitches';
import FoleyCath from './pages/AllCourses/FoleyCath';
import CVP from './pages/AllCourses/CVP';
import Resident from './pages/AllCourses/Resident';
import Profile from './pages/Profile';
import { Manage } from './pages/Manage';
import ManageCourses from './pages/AllManages/ManageCourses';
import ManageStudents from './pages/AllManages/ManageStudents';
import Login from './pages/Login';
import PatientsGrading from './pages/AllGrading/PatientsGrading';
import ObserveMajorGrading from './pages/AllGrading/ObserveMajorGrading';
import HelpMajorGrading from './pages/AllGrading/HelpMajorGrading';
import HelpObserveMinorGrading from './pages/AllGrading/HelpObserveMinorGrading';
import FirstAidGrading from './pages/AllGrading/FirstAidGrading';
import StitchesGrading from './pages/AllGrading/StitchesGrading';
import FoleyCathGrading from './pages/AllGrading/FoleyCathGrading';
import CVPGrading from './pages/AllGrading/CVPGrading';


function App() {
  return (
    <Router>
      <Sidebar />
      <datetime />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/course' exact component={Course} />
        <Route path='/courses/patients' exact component={Patients} />
        <Route path='/courses/opd' exact component={OPD} />
        <Route path='/courses/conference' exact component={Conference} />
        <Route path='/courses/emergency' exact component={Emergency} />
        <Route path='/courses/observemajor' exact component={ObserveMajor} />
        <Route path='/courses/helpmajor' exact component={HelpMajor} />
        <Route path='/courses/helpobserveminor' exact component={HelpObserveMinor} />
        <Route path='/courses/firstaid' exact component={FirstAid} />
        <Route path='/courses/stitches' exact component={Stitches} />
        <Route path='/courses/foleycath' exact component={FoleyCath} />
        <Route path='/courses/cvp' exact component={CVP} />
        <Route path='/courses/resident' exact component={Resident} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/manage' exact component={Manage} />
        <Route path='/manage/courses' exact component={ManageCourses} />
        <Route path='/manage/students' exact component={ManageStudents} />
        <Route path='/login' exact component={Login} />
        <Route path='/grading/patients' exact component={PatientsGrading} />
        <Route path='/grading/observemajor' exact component={ObserveMajorGrading} />
        <Route path='/grading/helpmajor' exact component={HelpMajorGrading} />
        <Route path='/grading/helpobserveminor' exact component={HelpObserveMinorGrading} />
        <Route path='/grading/firstaid' exact component={FirstAidGrading} />
        <Route path='/grading/stitches' exact component={StitchesGrading} />
        <Route path='/grading/foleycath' exact component={FoleyCathGrading} />
        <Route path='/grading/cvp' exact component={CVPGrading} />
      </Switch>
    </Router>
  );
}

export default App;
