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
                  <p style={{color: 'grey'}}>
                    Sign up for the private beta now.<br/><br/>
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
                      margin: 5}} 
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