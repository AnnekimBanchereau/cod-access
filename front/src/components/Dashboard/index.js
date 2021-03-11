import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import UsersList from './UsersList';
import ExercicesList from './ExercisesList';

import './styles.scss';

const Dashboard = () => (
  <section className="admin">
    <Switch>
      <Route path="/admin/utilisateurs">
        <UsersList />
      </Route>
      <Route path="/admin/exercices">
        <ExercicesList />
      </Route>
    </Switch>
  </section>
);

export default Dashboard;