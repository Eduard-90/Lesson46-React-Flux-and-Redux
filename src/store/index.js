import { legacy_createStore } from 'redux'

const couterReducer = (state = {coffee: 0, isLoggedIn: false}, action) => {
    if (action.type === 'incrementCoffee'){
        return {
           coffee: state.coffee + 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementCoffee'){
        return {
           coffee: state.coffee - 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increase'){
        return {
           coffee: state.coffee + action.number,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if(action.type === 'logIn'){
        return {
            coffee: state.coffee,
            isLoggedIn: true,
         }
    }
    return state
}

const store = legacy_createStore(couterReducer); 

export default store;