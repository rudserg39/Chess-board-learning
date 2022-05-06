import { Link } from 'react-router-dom';
import TimeSettings from '../../components/TimeSettings';
import SideSettings from '../../components/SideSettings';
import CoordsSettings from '../../components/CoordsSettings';
import Button from '../../components/Button';
import './style.css';

const Settings = () => (
  <div className="settings">
    <TimeSettings />
    <hr />
    <SideSettings />
    <hr />
    <CoordsSettings />
    <Link to="/Chess-board-learning/">
      <Button text="Back" />
    </Link>
  </div>
);

export default Settings;
