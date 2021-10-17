import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

export const Footer = () => (
  <div className='footer'>
    <Link to='/'>
      <Icon className='large home' alt='home' />
    </Link>
    <Link to='/'>
      <Icon className='large youtube play' alt='play' />
    </Link>
    <Link to='/'>
      <Icon className='large list' alt='list' />
    </Link>
    <Link to='/'>
      <Icon className='large undo alternate' alt='rewind' />
    </Link>
    <Link to='/'>
      <Icon className='large map outline' alt='catalog' />
    </Link>
  </div>
);
