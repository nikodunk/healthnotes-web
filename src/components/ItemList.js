import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, sendPIN } from '../actions/items';


class ItemList extends Component {
    
    componentDidMount() {
        this.props.fetchData('https://healthnotes.herokuapp.com/1/getnotes/' + this.props.phone);

    }

    render() {
        return (
        <div style={{margin: 'auto', maxWidth: 800}}>
            <ul>
                {this.props.items.notes ? 
                        Object.keys(this.props.items.notes).map((id) =>
                            <div>
                                <p>Slot {parseInt(id, 10)+1}</p>
                                <textarea
                                    style={{height: '300px', width: '90%', borderRadius: 5, border: '1px solid grey', padding: 5}}
                                    value={this.props.items.notes[id][1]["note"]} />
                                <br /><br /><br />
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
