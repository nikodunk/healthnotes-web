import React, { Component } from 'react';
import { connect } from 'react-redux';
import demo from '../assets/demo.gif'

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

        <div style={{}}>
                  <img src={demo} style={{height: 600, borderRadius: 40}} alt={'demo'} />
                  <h2>Hate charting?</h2>
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