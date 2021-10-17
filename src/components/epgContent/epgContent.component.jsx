import { useState } from 'react';
import { Icon, Menu, Sidebar, Button } from 'semantic-ui-react';
import { ProgrammeSchedule } from '../programmeSchedule/programmeSchedule.component';
import { useAssets } from '../useAssets/useAssets.component';
import { Footer } from '../footer/footer.component';

import './epgContent.styles.scss';

export const EPGContent = () => {
  const { assets } = useAssets('epg');
  const [scroll, setScroll] = useState(false);

  const handleClickNow = () => {
    setScroll(true);
  };

  return (
    <>
      <Sidebar.Pushable id="sidebar-pushable">
        <Sidebar
          id="sidebar-style"
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item as="a" id="star">
            <Icon className="star icon" />
          </Menu.Item>
          <div id="opaque">
            <Icon />
          </div>
          {assets.map((asset) => (
            <Menu.Item as="a" key={asset.id + 's'} className="menu-item">
              <img id="channel-logo" src={asset.images.logo} alt="logo" />
            </Menu.Item>
          ))}
        </Sidebar>
        <ProgrammeSchedule scroll={scroll} />
      </Sidebar.Pushable>
      {!scroll && (
        <Button className="ui orange now-button" size="tiny" onClick={handleClickNow}>
          NOW
        </Button>
      )}
      <Footer />
    </>
  );
};
