import logo from './logo.svg';
import './App.css';
import Colorcards from './Components/Cards';

function App() {
  return (
    <div class="toStyle" style={{
      display:"flex"
    }}>
    <Colorcards color="Green" code="#38bb15" />

    <Colorcards color="Pink" code="#ff6563"/>

    <Colorcards color="Black" code="#000000" />

    <Colorcards color="Red" code="#c90b0b"/>

    <Colorcards color="Orange" code="#ff7f00" />

    <Colorcards color="Yellow" code="#fff500"/>

    <Colorcards color="Light Grey" code="#cccccc" />

    <Colorcards color="Purple" code="#7e40a1"/>

    <Colorcards color="Brown" code="#c14811" />

    <Colorcards color="Cyan" code="#00ffff"/>

    <Colorcards color="cadetblue" code="#5f9ea0" />

    <Colorcards color="chocolate" code="#d2691e"/>

    <Colorcards color="darkgreen" code="#006400" />

    <Colorcards color="deeppink" code="#ff1493"/>

    </div>
    
  );
}

export default App;