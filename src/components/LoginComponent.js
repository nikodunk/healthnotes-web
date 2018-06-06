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
      this.props.sendPIN(this.props.pin, this.props.phone)
        .then((res) => {
          console.log(res)
          if (res === 'true'){ console.log('password correct'); this.props.handleSubmit(e) }
          else{ console.log('password wrong' )}
        })
    }

    render() {
        
        return (

        <div style={{margin: 'auto', maxWidth: 800, textAlign: 'center'}}>
            <form>
                <p>phone&nbsp;&nbsp;
                  <input
                    autoFocus
                    type="text"
                    onChange={this.props.handleUsernameChange}
                    value={this.props.phone}
                  />
                </p>
                <p>pin&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    onChange={this.props.handlePINChange}
                    value={this.props.pin}
                  />
                </p>
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