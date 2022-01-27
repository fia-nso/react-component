// import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/profilePhotot';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Address';

function App() {
  return (
    <div>
      <FullName />
      <ProfilePhoto />
      <Adress />
    </div>
  );
}

export default App;
