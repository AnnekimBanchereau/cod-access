import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Menu = ({
  toggleMenu,
  mobileMenuVisibility,
}) => (
  <nav className="header-wrapper__menu" role="navigation" aria-label="principal">
    <button
      className="header-wrapper__menu__toggle-btn"
      type="button"
      aria-expanded={mobileMenuVisibility}
      aria-controls="menu-toggle-area"
      onClick={toggleMenu}
    >
      <span className="sr-only">Menu</span>
      <span className="header-wrapper__menu__toggle-btn__stripe" />
      <span className="header-wrapper__menu__toggle-btn__stripe" />
      <span className="header-wrapper__menu__toggle-btn__stripe" />
    </button>
    <ul
      id="menu-toggle-area"
      className={classNames('header-wrapper__menu__list', {
        'header-wrapper__menu__list--visible': mobileMenuVisibility,
      })}
    >
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/" exact activeClassName="header-wrapper__menu__list__link--active">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/challenges" exact activeClassName="header-wrapper__menu__list__link--active">
          Challenges
        </NavLink>
      </li>
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/documentations" exact activeClassName="header-wrapper__menu__list__link--active">
          Documentations
        </NavLink>
      </li>
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/a-propos" exact activeClassName="header-wrapper__menu__list__link--active">
          À propos
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact activeClassName="header-wrapper__menu--active">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

Menu.propTypes = {
  toggleMenu: PropTypes.func,
  mobileMenuVisibility: PropTypes.bool,
};

Menu.defaultProps = {
  toggleMenu: () => { },
  mobileMenuVisibility: false,
};

export default Menu;