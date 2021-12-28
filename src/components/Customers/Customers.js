import React from 'react';
import { Styles } from "./Styles";
import backimg  from '../.././asset/backimg.jpg'

const Contact = () =>  {
  return (
    <div>
    	<h1 style={{marginTop: '60px', fontFamily: 'Style Script', fontSize: '40px'}}> What Says Our <span style={{color: 'green'}}> Customer</span></h1>
    	<div style={Styles.content}>
    		<div style={Styles.card}>
    			<img src={backimg} alt="Girl in a jacket" style={{width: '100px', height: '100px', borderRadius: '50%', border: '3px solid grey', marginTop: '-86px'}}/>
    			<p style={{fontFamily: 'Noto Sans',}}>Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.</p>
    			<h4 style={{fontFamily: 'Noto Sans',}}>Name</h4>
    			<p style={{fontFamily: 'Noto Sans',}}>Place</p>
    		</div>
    		<div style={Styles.card}>
    			<img src={backimg} alt="Girl in a jacket" style={{width: '100px', height: '100px', borderRadius: '50%', border: '3px solid grey', marginTop: '-86px'}}/>
    			<p style={{fontFamily: 'Noto Sans',}}>Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.</p>
    			<h4 style={{fontFamily: 'Noto Sans',}}>Name</h4>
    			<p style={{fontFamily: 'Noto Sans',}}>Place</p>
    		</div>
    	</div>
    </div>
  );
}

export default Contact;
