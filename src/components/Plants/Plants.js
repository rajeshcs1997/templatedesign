import React from 'react';
import { Styles } from "./Styles";
import plant from '../.././asset/plant.png'

const Plants = () =>  {
  return (
    <div>
    	<h1 style={{fontFamily: 'Style Script', fontSize: '40px'}}>Our <span style={{color: 'green'}}>Plants</span> </h1>

    	<div style={Styles.card}>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
    	</div>
    	<div style={Styles.card}>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
	    	<div style= {Styles.cardcontent}>
	    		<img src={plant} alt="Girl in a jacket" width="120" height="120" />
	    		<div style={Styles.cardtext}>
	    			<span style={{fontWeight: 'bold'}}>Indoor Plants</span>
	    			<span>$75</span>
	    		</div>
	    	</div>
    	</div>
    	<button style={Styles.orderbutton}>View all Plants</button>
    </div>
  );
}

export default Plants;
