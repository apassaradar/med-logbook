import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Course } from './pages/Course'
import { CoursesOne } from './pages/AllCourses/CoursesOne';
import { CoursesTwo } from './pages/AllCourses/CoursesTwo';
import { CoursesThree } from './pages/AllCourses/CoursesThree';
import { CoursesFour } from './pages/AllCourses/CoursesFour';
import { CoursesFive } from './pages/AllCourses/CoursesFive';
import { CoursesSix } from './pages/AllCourses/CoursesSix';
import { CoursesSeven } from './pages/AllCourses/CoursesSeven';
import { CoursesEight } from './pages/AllCourses/CoursesEight';
import { CoursesNine } from './pages/AllCourses/CoursesNine';
import { CoursesTen } from './pages/AllCourses/CoursesTen';
import { CoursesEleven } from './pages/AllCourses/CoursesEleven';
import { CoursesTwelve } from './pages/AllCourses/CoursesTwelve';
import Profile from './pages/Profile';
import { Manage } from './pages/Manage';
import ManageCourses from './pages/AllManages/ManageCourses';
import ManageStudents from './pages/AllManages/ManageStudents';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Sidebar />
      <datetime />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/course' exact component={Course} />
        <Route path='/courses/courses1' exact component={CoursesOne} />
        <Route path='/courses/courses2' exact component={CoursesTwo} />
        <Route path='/courses/courses3' exact component={CoursesThree} />
        <Route path='/courses/courses4' exact component={CoursesFour} />
        <Route path='/courses/courses5' exact component={CoursesFive} />
        <Route path='/courses/courses6' exact component={CoursesSix} />
        <Route path='/courses/courses7' exact component={CoursesSeven} />
        <Route path='/courses/courses8' exact component={CoursesEight} />
        <Route path='/courses/courses9' exact component={CoursesNine} />
        <Route path='/courses/courses10' exact component={CoursesTen} />
        <Route path='/courses/courses11' exact component={CoursesEleven} />
        <Route path='/courses/courses12' exact component={CoursesTwelve} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/manage' exact component={Manage} />
        <Route path='/manage/courses' exact component={ManageCourses} />
        <Route path='/manage/students' exact component={ManageStudents} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
