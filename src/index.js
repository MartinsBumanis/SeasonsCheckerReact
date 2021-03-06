import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
    constructor(props){
        super(props); // this is a ceremonial thing to do every time

        this.state = {lat: null, errorMessage: '' }; //initiate states

        window.navigator.geolocation.getCurrentPosition( //built in browser functionality to get position
            (position) => {
                this.setState({lat: position.coords.latitude}) //sets lattitude to state
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    render(){
    if(this.state.errorMessage && !this.state.lat){
    return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
    return <div>Latitude: {this.state.lat}</div>
    }

    
    return <div>Loading</div>
    
    }; 
};


ReactDOM.render(<App />, document.querySelector('#root'));