import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import App from './components/container/app-container';
import StudentsList from './components/container/students-list';
import AddStudent from './components/container/add-student';
import Student from './components/container/student';
import NotFound from './components/container/not-found';

import { PATH_STUDENTS, PATH_ADD_STUDENT, PATH_STUDENT_DETAIL } from './constants';

const routing = () => {    
    return (
        <HashRouter>
          <App>
            <Switch>
              <Route exact path="/" component={StudentsList} />
              <Route exact path={`/${PATH_STUDENTS}`} component={StudentsList} />
              <Route path={`/${PATH_ADD_STUDENT}`} component={AddStudent} />
              <Route path={`/${PATH_STUDENT_DETAIL}/:id`} component={Student} />
              <Route path="*" component={NotFound} />
            </Switch>
          </App>
        </HashRouter>
    )
}

export default routing;