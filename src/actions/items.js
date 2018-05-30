import axios from 'axios';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}


export function itemsPutDataSuccess(items) {
    return {
        type: 'ITEMS_PUT_DATA_SUCCESS',
        items
    };
}


export function fetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {console.log(items); dispatch(itemsFetchDataSuccess(items))})
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


export function putData(url, newItem) {
    return (dispatch) => {
        fetch(url, { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: newItem})
            }
          )
        .then((response) => {response.json()})
        .catch(() => dispatch(itemsHasErrored(true)));
    };
}



// post to https://healthnotes.herokuapp.com/2/login/9177043031/8523
export function sendPIN(PIN, phoneNo) {
    return dispatch => new Promise((resolve, reject) => {        
        console.log('https://healthnotes.herokuapp.com/2/login/'+ phoneNo +'/'+ PIN)
        axios.post('https://healthnotes.herokuapp.com/2/login/'+  phoneNo +'/'+ PIN)
            .then((response) => {
                    if (response.data === 'false'){ resolve(false)}
                    else { resolve(true) }
                })
    })
}