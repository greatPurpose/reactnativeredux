import { combineReducers } from 'redux'

const INITIAL_STATE = {
    current: [],
    possible: ['Alice', 'Bob', 'Sammy']
};

const friendReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FRIEND': 
            const {
                current, possible,
            } = state;

            const addedFriend = possible.splice(action.payload, 1);
            current.push(addedFriend);

            const newstate = { current, possible };
            return newstate;

        default: 
            return state;
    }
};

export default combineReducers({ friends: friendReducer })

