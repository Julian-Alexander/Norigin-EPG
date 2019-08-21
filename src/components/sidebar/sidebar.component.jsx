import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import LandingPage from '../landing/landing.component';
import useAssets from '../useAssets/useassets.component';

import './sidebar.styles.scss';

const SideBar = () => {
  const { assets } = useAssets('epg');

  return (
    <Sidebar.Pushable id='sidebar-pushable'>
      <Sidebar
        id='sidebar-style'
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin'
      >
        <Menu.Item as='a' id='star'>
          <Icon className='star icon' />
        </Menu.Item>
        <Menu.Item id='opaque'>
          <Icon />
        </Menu.Item>
        {assets.map(asset => (
          <Menu.Item as='a' key={asset.id + 's'} className='menu-item'>
            <img id='channel-logo' src={asset.images.logo} alt='logo' />
          </Menu.Item>
        ))}
      </Sidebar>

      <LandingPage />
    </Sidebar.Pushable>
  );
};

export default SideBar;
