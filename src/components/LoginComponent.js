import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPIN } from '../actions/items';
import logo from '../assets/logo.png'

class LoginComponent extends Component {
    
    constructor(props) {
    super(props);
    this.check = this.check.bind(this);
    this.state = {
        passwordFalse: false
    }
  }
  
    componentDidMount() {

    }

    check(e){
      e.preventDefault();
      this.props.sendPIN(this.props.pin, this.props.phone)
        .then((res) => {
          if (res === true){ this.setState({passwordFalse: false}); console.log('password correct'); this.props.handleSubmit(e) }
          else{ this.setState({passwordFalse: true}); console.log('password wrong' )}
        })
    }

    render() {
        
        return (

        <div style={{maxWidth: 200}}>
            <div>
                      <img src={logo} style={{height: 100}} alt={'icon'} />
                      <h1>soap dictate</h1>
            </div>
            <p style={{color: 'grey'}}>If you have an account, please login below.</p>
            <form>
                <p>Phone&nbsp;&nbsp;
                  <input
                    style={{borderRadius: 5, border: '1px solid grey', padding: 5}}
                    autoFocus
                    type="text"
                    onChange={this.props.handleUsernameChange}
                    value={this.props.phone}
                  />
                </p>
                <p>PIN&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    style={{borderRadius: 5, border: '1px solid grey', padding: 5}}
                    type="text"
                    onChange={this.props.handlePINChange}
                    value={this.props.pin}
                  />
                </p>
                <p>
                  <input
                    style={{ 
                      fontSize: 20, 
                      backgroundColor: '#0196FD', 
                      padding: '10px', 
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      textDecoration: 'none', 
                      color: 'white', 
                      borderRadius: 7, 
                      margin: 10,
                      border: 'none'}}
                    type="submit"
                    value="Login"
                    onClick={this.check} />
                </p>
                {this.state.passwordFalse ? <p style={{color: 'red'}}>Login or password wrong</p> : null }
            </form>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendPIN: (PIN, phone) => dispatch(sendPIN(PIN, phone))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);