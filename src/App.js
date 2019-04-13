import 'App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import Home from "screens/Home";

class App extends Component
{
    render()
    {
        return (
            <div className='App'>
                <Home key={this.props.round}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        round: state.buttonAction.round,
    };
};

export default connect(mapStateToProps)(App);
