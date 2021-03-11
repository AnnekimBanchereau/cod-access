import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const DashboardMenu = ({}) => (
  <ul className="admin__menu">
    <li>
      <NavLink className="admin__menu__link" to="/admin/utilisateurs" exact activeClassName="admin__menu__link--active">
        Utilisateurs
      </NavLink>
    </li>
    <li>
      <NavLink className="admin__menu__link" to="/admin/exercices" exact activeClassName="admin__menu__link--active">
        Exercices
      </NavLink>
    </li>
  </ul>
);

export default DashboardMenu;