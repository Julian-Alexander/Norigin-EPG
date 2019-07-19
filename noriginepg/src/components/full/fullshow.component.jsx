import React from 'react';
import './fullshow.styles.scss';
import Show from '../show/show.component';
import Footer from '../footer/footer.component';

function FullShow() {
  return (
    <div className='full-show'>
      <Show />
      <Footer />
    </div>
  );
}

export default FullShow;
