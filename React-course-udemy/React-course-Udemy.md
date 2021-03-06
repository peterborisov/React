## Section 1: Getting Started

1. Introduction
2. What is React?
3. Join our Online Learning Community
4. Real-World SPAs & React Web Apps
5. Writing our First React Code
6. Why Should we Choose React?
7. React Alternatives(Angular, Vue)
8. Understanding Single Page Applications and Multi Page Applications<br/>
- SPA (only one HTML page. Content is rendered on Client)<br/>
Typically only one RactDOM.render() call
- MPA ( Multiple HTML pages, content is rendered on Server)<br/>
One ReactDOM.render() call per 'widget'
9. Course Outline
10. How to get the Most out of This Course
11. Useful Resources & Links
- https://reactjs.org/
- https://codepen.io/anon/pen/MELQaQ

## Section 2: Refreshing Next Generation JavaScript (Optional)
12. Module Introduction
13. Understanding "let" and "const"
14. Arrow Functions
15. Exports and Imports
16. Understanding Classes
17. Classes, Properties and Methods
- property are like variables attached to object
- methods are like functions attached to object
18. The Spread & Rest Operator
- spread(split up array to properties)
- rest(merge a list of arguments to array)
19. Destructuring
- extract array elements or object priperties and store them in variable
20. Reference and Primitive Types Refresher
21. Refreshing Array Functions(map() , filter() , reduce())
22. Wrap Up
23. Next-Gen JavaScript - Summary

## Section 3: Understanding the Base Features & Syntax
25. Module Introduction
26. The Build Workflow
- use dependency management tool(npm, yarn)
- use bundler(Webpack)
- use compiler(Babel)
- use developement server
27. Using Create React App
28. Understanding the Folder Structure
29. Understanding Component Basics
```
Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

import React, { Component } from 'react';
class App extends Component {
    render() {
        return (

        )
    }
}

export default App;
```
30. Understanding JSX
```
const element = <h1>Hello, world!</h1>;
```
31. JSX Restrictions
- class === className
- wrap into one root element per component
32. Creating a Functional Component
```
const cmp = () => { return <div>some JSX</div> }
```
- class-based components
```
class Cmp extends Component { render () { return <div>some JSX</div> } } 
```
33. Components & JSX Cheat Sheet
34. Working with Components & Re-Using Them
```
<Person />
```
35. Outputting Dynamic Content
36. Working with Props
-  allow you to pass data from a parent (wrapping) component to a child (embedded) component.
```
const person =(props) {
    return <p>i'm {props.name}, {props.age} years old</p>
}

<Person  name="Pete" age="26"/>
```
37. Understanding the "children" Prop
```
const person =(props) {
    return(
        <div>
             <p>i'm {props.name}, {props.age} years old</p>
             <p>{props.children}</p>
        </div>
    )
}

<Person  name="Pete" age="26">Th e child props text</Person>
```
38. Understanding & Using State
- state only work in extends Component
- state is used to change the component, well, state from within.
```
class App extends Component {
    state ={
        persons: [
            { name: 'Pete' } 
        ]
    }
    render(){
        return(
            <div className="App">
                <Person  name={this.state.persons[0].name}>Th e child props text</Person>
            </div>
        )
    }
}
```
39. Props & State
40. Handling Events with Methods
```
class App extends Component {
    state ={
        persons: [
            { name: 'Pete' } 
        ]
    }

    switchHandler = () => {}
    render(){
        return(
            <div className="App">
                <Person  name={this.state.persons[0].name}>Th e child props text</Person>
                <button onClick={this.switchHandler}>Switch</button>
            </div>
        )
    }
}
```
41. To Which Events Can You Listen?
42. Manipulating the State
```
switchHandler = () => {
    //DON'T do this this.state.persons[0].name = 'newName'
    this.setState({
        persons: [
            { name: 'newName'}
        ]
    })
}
```
43. Function Components Naming
```
Use:
const App = () => { ... }
Instead of:
const app = () => { ... }
```
44. Using the useState() Hook for State Manipulation
45. Stateless vs Stateful Components
- Stateless components are simple functional component without having a local state
- Stateful component can contains the state object and event handling function, user actions as well.
46. Passing Method References Between Components
47. Adding Two Way Binding
```
Person.js
return(
    <input type="text" onChange={props.changed}>
)

App.js
nameChangedHandler(event) => {
    this,setState({
        persons: [
            {name: event.target.value, age: 26}
        ]
    })
}

render() {
    <Person changed={this.nameChangeHandler}></Person>
}
```
48. Adding Styling with Stylesheets
49. Working with Inline Styles
```
render(){
    const style = {
        font: 'inherit',
        border: 1 px solid red
    }

    return (
        <button style={style}>
    )
}

```
50. [OPTIONAL] Assignment Solution
51. Useful Resources & Links

## Section 4: Working with Lists and Conditionals
52. Module Introduction
53. Rendering Content Conditionally
```
Use ternary operator in render > return method.

state ={
    showPersons: false;
}

tooglePersonHandler = () => {
    const doesShow = this.state.showPErsons;
    this.setState({ showPersond: !doesShow })
}

return(
    <button onClick={this.tooglePersonHandler}></button>
    {this.state.showPErson === true ?
        <div>
        </div> : null
    }
)
```
54. Handling Dynamic Content "The JavaScript Way"
```
Take logic outside render > return method.

state ={
    showPersons: false;
}

let persons = null;

if(this.state.showPersons){
    persons = (
        <div>
        </div> 
    )
}

return(
    <button onClick={this.tooglePersonHandler}></button>
    {persons}
)
```
55. Outputting Lists (Intro)
56. Outputting Lists
 ```
 Use .map() to loop array.

state ={
    persons: [
        {name: 'one'},
        {name: 'two'},
        {name: 'three'}
    ]
}

let persons = null;

if(this.state.showPersons){
    persons = (
        <div>
        {this.state.persons.map(el => {
            return <Person name={el.name}/>
        })}
        </div> 
    )
}

return(
    <button onClick={this.tooglePersonHandler}></button>
    {persons}
)
```
57. Lists & State
```
state ={
    persons: [
        {name: 'one'},
        {name: 'two'},
        {name: 'three'}
    ]
}

deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    //Set state of persons to new/updated persons
    this.state({persons: persons})
}

if(this.state.showPersons){
    persons = (
        <div>
        {this.state.persons.map((el, index) => {
            return <Person 
            click={this.deletePersonHandler(index)}
            name={el.name}/>
        })}
        </div> 
    )
}
```
58. Updating State Immutably
```

deletePersonHandler = (personIndex) => {
    //Spread operator create new array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    //Set state of persons to new/updated persons
    this.state({persons: persons})
}
```
59. Lists & Keys
```
if(this.state.showPersons){
    persons = (
        <div>
        {this.state.persons.map((el, index) => {
            return <Person 
            click={this.deletePersonHandler(index)}
            name={el.name}
            key={person.id}/>
        })}
        </div> 
    )
}
```
60. Flexible Lists
```
nameChangedHandler = ( event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    })

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
        persons: [
            {persons: persons}
        ]
    })
}

if(this.state.showPersons){
    persons = (
        <div>
        {this.state.persons.map((el, index) => {
            return <Person 
            click={this.deletePersonHandler(index)}
            name={el.name}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id )}/>
        })}
        </div> 
    )
}
```
61. Wrap Up

## Section 5: Styling React Components & Elements
64. Module Introduction
65. Outlining the Problem Set
66. Setting Styles Dynamically
67. Setting Class Names Dynamically
```
const classes = ['red', 'blue'].join(' ');

<p className={classes></p>
```
68. Adding and Using Radium
```
render() {
    const style = {
        ':hover': {
            color: black
        }
    }
}
```
69. Using Radium for Media Queries
```
import Radium from 'radium';

const style = {
    '@media (min-width: 500px)'{
        width:'450px'
    }
}

export default Radium(myComponent)
```
70. Introducing Styled Components
71. More on Styled Components
72. Styled Components & Dynamic Styles
73. Working with CSS Modules
```
CSS Modules are a relatively new concept (you can dive super-deep into them here: 
https://github.com/css-modules/css-modules). 
With CSS modules, you can write normal CSS code and make sure, 
that it only applies to a given component.

Using CSS Modules in create-react-app Projects: 
https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2

More information about CSS Modules: 
https://github.com/css-modules/css-modules

```
74. CSS Modules & Media Queries
75. More on CSS Modules

## Section 6: Debugging React Apps
77. Module Introduction
78. Understanding Error Messages
79. Finding Logical Errors by using Dev Tools & Sourcemaps
80. Working with the React Developer Tools
81. Using Error Boundaries (React 16+)
82. Wrap Up
83. Useful Resources & Links
```
Error Boundaries:
https://reactjs.org/docs/error-boundaries.html
Chrome Devtool Debugging: 

https://developers.google.com/web/tools/chrome-devtools/javascript/
```
## Section 7: Diving Deeper into Components & React Internals
84. Module Introduction
85. A Better Project Structure
86. Splitting an App Into Components
87. Comparing Stateless and Stateful Components
```
In a component, state is data we import — typically to show the user —
that is subject to change.
Stateful components are keeping track of changing data, 
while stateless components print out what is given to them via props, 
or they always render the same thing.
```
88. Class-based vs Functional Components
<img src='./assets/class-vs-func-component.png' width='500'>

89. Class Component Lifecycle Overview
- only available in class-based components
<img src='./assets/lifecycle-component.png' width='500'>

90. Component Creation Lifecycle in Action
