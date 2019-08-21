import React from 'react';
import { Icon } from 'semantic-ui-react';
import './headermenu.styles.scss';

const HeaderMenu = () => (
  <div className='container'>
    <div className='header-menu'>
      <Icon className='large user' />
      <img className='menu-icons' src='nm.png' alt='logo' />
      <Icon className='large search' />
    </div>
  </div>
);

export default HeaderMenu;
