import './showView.styles.scss';
import { ShowData } from './showData/showData.component';
import { Footer } from '../footer/footer.component';

export function ShowView() {
  return (
    <div className="full-show">
      <ShowData />
      <Footer />
    </div>
  );
}
