import React from 'react';
import Form from '../Form';
import './style.scss';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    
    //Method run after the component output has been rendered to the DOM.
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
        <>
            <div className='wrapper'>
                <h1>it is {this.state.date.toLocaleTimeString()}</h1>
                < Form />
            </div> 
            <div className='wrapper'>
                <h1>it is {this.state.date.toLocaleTimeString()}</h1>
                < Form />
            </div> 
            <div className='wrapper'>
                <h1>it is {this.state.date.toLocaleTimeString()}</h1>
                < Form />
            </div> 
            <div className='wrapper'>
                <h1>it is {this.state.date.toLocaleTimeString()}</h1>
                < Form />
            </div>
        </>
        )
    }
}

export default MainSection;