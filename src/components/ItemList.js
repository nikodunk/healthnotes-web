import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, sendPIN } from '../actions/items';


class ItemList extends Component {
    
    componentDidMount() {
        this.props.fetchData('https://healthnotes.herokuapp.com/1/getnotes/' + this.props.phone);

    }

    render() {
        
        return (

        <div>
            <ul>
                {this.props.items.notes ? 
                        Object.keys(this.props.items.notes).map((id) =>
                            <div>
                                <p>Slot {parseInt(id)+1}</p>
                                <textarea
                                    style={{height: '300px', width: '90%', margin: '10px'}}
                                    value={this.props.items.notes[id][1]["note"]} />
                                <hr />
                            </div>
                        )
                : null}
            </ul>
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
        fetchData: (url) => dispatch(fetchData(url)),
        sendPIN: (PIN, phone) => dispatch(sendPIN(PIN, phone))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
