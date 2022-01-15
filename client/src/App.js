import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Course } from './pages/Courses/Course'
import { CoursesOne } from './pages/Courses/CoursesOne';
import { CoursesTwo } from './pages/Courses/CoursesTwo';
import { CoursesThree } from './pages/Courses/CousesThree';
import { CoursesFour } from './pages/Courses/CoursesFour';
import { CoursesFive } from './pages/Courses/CoursesFive';
import { CoursesSix } from './pages/Courses/CoursesSix';
import { CoursesSeven } from './pages/Courses/CoursesSeven';
import { CoursesEight } from './pages/Courses/CoursesEight';
import { CoursesNine } from './pages/Courses/CoursesNine';
import { CoursesTen } from './pages/Courses/CoursesTen';
import { CoursesEleven } from './pages/Courses/CoursesEleven';
import { CoursesTwelve } from './pages/Courses/CoursesTwelve';
import Profile from './pages/Profile';
import Manage from './pages/Manage';
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
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
