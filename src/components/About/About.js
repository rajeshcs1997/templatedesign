import React from 'react';
import { Styles } from "./Styles";
import plant from '../.././asset/backimg.jpg'

const About = () =>  {
  return (
    <div style={Styles.container}>
    	<img src={plant} alt="Girl in a jacket" width="50%"/>
    	<div style={{width: '50%'}}>
    		<h1 style={{fontFamily: 'Style Script', fontSize: '40px'}}>About <span style={{color: 'green'}}>us</span> </h1>
    		<p style={{fontFamily: 'Noto Sans',}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
        <button style={Styles.orderbutton}>Read More</button>
    	</div>
    </div>
  );
}

export default About;
