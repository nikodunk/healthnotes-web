import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/items';


class ItemList extends Component {
    
    componentDidMount() {
        this.props.fetchData('https://healthnotes.herokuapp.com/1/getnotes/9177043031');

    }

    render() {
        
        return (

        <div>
            <ul>
                {this.props.items.notes ? 
                        Object.keys(this.props.items.notes).map((id) =>
                            <p>{this.props.items.notes[id][0]["name"]} – {this.props.items.notes[id][1]["note"]} </p>
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
        fetchData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
