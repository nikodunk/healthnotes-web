import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPIN } from '../actions/items';


class LoginComponent extends Component {
    
    constructor(props) {
    super(props);
    this.check = this.check.bind(this);
  }
  
    componentDidMount() {

    }

    check(e){
      e.preventDefault();
      this.props.sendPIN(8523, 9177043031);
      
    }

    render() {
        
        return (

        <div>
            <form>
                <input
                  autoFocus
                  type="text"
                  onChange={this.props.handleUsernameChange}
                  value={this.props.phone}
                />
                <input
                  type="text"
                  onChange={this.props.handlePINChange}
                  value={this.props.pin}
                />
                <input
                  type="submit"
                  value="Let's Go!"
                  onClick={this.check} />
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