import { Icon } from 'semantic-ui-react';
import './headerMenu.styles.scss';

export const HeaderMenu = () => (
  <div className="container">
    <div className="header-menu">
      <Icon className="large user" />
      <a className="icon-wrapper" href="/">
        <img className="menu-icons" src="nm.png" alt="logo" href="/" />
      </a>
      <Icon className="large search" />
    </div>
  </div>
);
