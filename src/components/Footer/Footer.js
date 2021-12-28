import React from 'react';
import { Styles } from "./Styles";
import backimg  from '../.././asset/backimg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () =>  {
  return (
    <div style={Styles.content}>
    	<h1 style={{color: '#fff', fontFamily: 'Style Script', fontSize: '40px'}}>Hyaaths</h1>
    	<div style={Styles.footercontent}>
    		<div>
    			<FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/>
    			<p>Lorem ipsum simply dummy text</p>
    		</div>
    		<div>
    			<FontAwesomeIcon icon={faPhoneAlt} size="2x"/>
    			<p>+02 1234567890</p>	
    		</div>
    		<div>
    			<FontAwesomeIcon icon={faEnvelope} size="2x"/>
    			<p>test@gmail.com</p>	
    		</div>
    	</div>
    	<h1 style={{marginTop: '50px', marginBottom: '20px'}}>FOLLOW US</h1>
    	<div>
    		<FontAwesomeIcon icon={faFacebookF} size="2x" style={{marginBottom: '30px'}}/>
    		<FontAwesomeIcon icon={faTwitter} size="2x" style={{marginLeft: '30px', marginRight: '30px', marginBottom: '30px'}}/>
    		<FontAwesomeIcon icon={faInstagram} size="2x" style={{marginBottom: '30px'}}/>
    	</div>
    	<p style={{fontSize: '15px'}}>All Rights Reserve By Free Html Templets</p>	
    </div>
  );
}

export default Footer;
