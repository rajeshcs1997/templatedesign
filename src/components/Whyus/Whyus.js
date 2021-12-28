import React from 'react';
import { Styles } from "./Styles";
import plant from '../.././asset/plant.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faCreditCard, faHandshake } from '@fortawesome/free-solid-svg-icons'

const Whyus = () =>  {
  return (
    <div>
    	<h1 style={{fontFamily: 'Style Script', fontSize: '40px', marginTop: '100px'}}> Why choose <span style={{color: 'green'}}> us</span> </h1>
    	<div style={Styles.content}>
    		<div style={{width: '40%'}}>
    			<FontAwesomeIcon icon={faTruck} size="6x" color="green"/>
    			<h3 style={{fontFamily: 'Noto Sans',}}>Free delivery</h3>
    			<p style={{fontFamily: 'Noto Sans',}}>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. </p>
    		</div>
    		<div style={{width: '40%'}}>
    			<FontAwesomeIcon icon={faCreditCard} size="6x" color="green"/>
    			<h3 style={{fontFamily: 'Noto Sans',}}>Safe payment</h3>
    			<p style={{fontFamily: 'Noto Sans',}}>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. </p>
    		</div>
    	</div>
    	<div style={{marginTop: '80px'}}>
    		<FontAwesomeIcon icon={faHandshake} size="6x" color="green"/>
  			<h3 style={{fontFamily: 'Noto Sans',}}>Satisfied Customers</h3>
  			<p style={{margin: '0 300px 0 300px', fontFamily: 'Noto Sans'}}>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. </p>
  		</div>
    </div>
  );
}

export default Whyus;
