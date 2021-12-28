import React from 'react';
import { Styles } from "./Styles";
import map from '../.././asset/map.jpg'

const Contact = () =>  {
  return (
    <div>
    	<h1 style={{marginTop: '100px', fontFamily: 'Style Script', fontSize: '40px'}}> Contact <span style={{color: 'green'}}> us</span></h1>
    	<div style={Styles.container}>
    		<div style={{width: '40%'}}>
    			<form>
					  <input style={Styles.inputfield} type="text" id="fname" name="fname" placeholder="Your name"  /><br/><br/>
					  <input style={Styles.inputfield} type="text" id="number" name="number" placeholder="Phone number" /><br/><br/>
					  <input style={Styles.inputfield} type="text" id="email" name="email" placeholder="Email" /><br/><br/>
					  <textarea style={Styles.inputfield} type="text-area" id="area" name="area" placeholder="Message" /><br/><br/>
					  <input style={Styles.orderbutton} type="submit" value="Send" />
					</form> 
    		</div>
    		<img style={{borderRadius: '15px',}} src={map} alt="Girl in a jacket" width="40%" height= '67%'/>
    	</div>
    </div>
  );
}

export default Contact;
