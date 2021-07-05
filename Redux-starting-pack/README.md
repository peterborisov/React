# React-Redux

### Three Core Concepts
> **Store** - hold the state of application.<br>
The store of whole app is stored in an object tree within a single store<br>

> **Action** - describes the changes in the state of the application.<br>
The only way to change the state is to emit an action, an object describing what happened.

> **Reducer** carries out the state transition depending on the action.<br>
To specify how the state tree is transformed by actions, you write pure reducers.<br>
Reducer(previousState, action) => newState

### Actions
> The only way app can interact with the store.<br>
Carry some info from app to the redux store.<br>
Plain JS objects.<br>
Have 'type' property that indicates the type of action being performed.(tipically string)<br>

**Action creator** is function that return action
```
const MY_ACTION = 'MY_ACTION';
const someAction = () => {
    return {
        type: 'MY_ACTION',
        info: 'First redux action'
    }
}
```
**Async Actions**
> Asynchronous API calls to fetch data from an end point and use that in application.


### Reducers
> Specify how the app's state changes in response to actions send to the store.<br>
Function that accept state and action as arguments and returns the next state of the application.<br>
Can declare multiple reducers.<br>
CAn combine reducers.<br>

```
//(previousState, action) => newState

const initialState = {
    numOfItems: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case MY_ACTION: return {
            //Make copy of state
            ...state,
            //And than update number of items
            numOfItems: state.numOfItems + 1
        }
        default: return state
    }
}
```


### Store
> One store for entire application.<br>
Holds app state.<br>
Allow access to state via getstate().<br>
Allow state to be updated via dispatch(action)<br>
Register listener via subscribe(listener)<br>

### Middleware
> Is the suggested way to extend Redux with custom functionality.<br>
Provides a third-party extension point between dispatching an action and the moment it reaches the reducer.<br>
Use middleware for logging, crash reporting, etc.<br>
npm i redux-logger