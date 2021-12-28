import React from 'react';
import { Styles } from "./styles";
import head  from '../.././asset/head.jpg'

const Header = () =>  {
  return (
    <div style={{  
      backgroundImage: `url(${head})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={Styles.header}>
        <div style={{ marginTop: '40px',fontSize: '50px', color: 'white' ,fontFamily: 'Style Script', }}>Hyaaths</div>
        <div style={Styles.nav}>
          <p style={Styles.homep}>Home</p>
          <p style={Styles.navp}>About</p>
          <p style={Styles.navp}>Plants</p>
          <p style={Styles.navp}>Contacts</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px'}}>
        <h1 style={{color:'white', fontSize: '40px', width: '500px', fontFamily: 'Style Script',}}>make your horse alive</h1>
        <p style={{color:'white', width: '500px', fontFamily: 'Noto Sans'}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
        <button style={Styles.orderbutton}>Order Now</button>
      </div>
    </div>
  );
}

export default Header;
