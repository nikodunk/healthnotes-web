import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPIN } from '../actions/items';


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
            <form style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{color: 'grey'}}>Already have an account?&nbsp;&nbsp;&nbsp;</p>
                <input
                  style={{
                    borderRadius: 5, 
                    border: '1px solid grey', 
                    padding: '10px',
                    margin: 5,
                    width: 180
                  }}
                  autoFocus
                  type="text"
                  onChange={this.props.handleUsernameChange}
                  value={this.props.phone}
                  placeholder="Phone"
                />
                <input
                  style={{
                    borderRadius: 5, 
                    border: '1px solid grey', 
                    padding: '10px',
                    margin: 5,
                    width: 180
                  }}
                  type="text"
                  onChange={this.props.handlePINChange}
                  value={this.props.pin}
                  placeholder="PIN"
                />
                <input
                  style={{ 
                    backgroundColor: 'lightgreen', 
                    padding: 8,
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontSize: 15,
                    fontWeight: 900,
                    textDecoration: 'none', 
                    color: 'white', 
                    cursor: 'pointer',
                    borderRadius: 7, 
                    margin: 10,
                    border: 'none',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                    width: 180
                  }}
                  type="submit"
                  value="Login"
                  onClick={this.check} />
                {this.state.passwordFalse ? <p style={{color: 'red'}}>Login or password wrong</p> : null }
            </form>
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