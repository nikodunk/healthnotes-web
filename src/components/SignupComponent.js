import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.png'

class SignupComponent extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        
    }
  }
  
    componentDidMount() {

    }

  

    render() {
        
        return (

        <div style={{margin: 'auto', marginBottom: 50}}>
                  <div>
                      <img src={logo} style={{height: 100}} alt={'icon'} />
                      <h3 style={{margin: 0}} >soap dictate</h3>
                  </div>
                  <h1>Hate charting?</h1>
                  <h2>Had enough of typing your entire note? Why not take advantage of your walking time on rounds to get a jump on charting</h2>
                  <p style={{color: 'grey'}}>
                    Sign up for the private beta now.
                    <br/>
                    <ul style={{textAlign: 'left'}}>
                      <li>Dictate your notes</li>
                      <li>Copy into your EMR/EHR system</li>
                      <li>TouchID & AES-256-bit Secured</li>
                    </ul>
                    <br/>
                  </p>
                  <a style={{ 
                      fontSize: 20, 
                      backgroundColor: '#0196FD', 
                      padding: '10px', 
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      textDecoration: 'none', 
                      color: 'white', 
                      borderRadius: 7, 
                      margin: 5,
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} 
                      href='https://docs.google.com/forms/d/e/1FAIpQLSde8rRykYscLRUQp1g91YtpTExYLbKr9B1mShJ10RF7qFaSYg/viewform?usp=sf_link'>
                    Sign up now
                  </a>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
   
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);