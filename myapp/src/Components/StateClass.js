import React,{Component} from "react";
class StateClass extends React.Component{
    constructor()
    {
        super();
        this.state={
            message:'Chandrasekaran!!',
            buttonMessage:'Not Married'
        }
    }
    Changing(){
        this.setState({
            buttonMessage:'Married'
        });
        this.setState({
            message:'xxx!!'
        });
    }
    render()
    {
        return(
            <div>
                <h1 className="App">Hello Lohita {this.state.message}</h1>
                <button onClick={()=>this.Changing()} className="btn">{this.state.buttonMessage}</button>
            </div>
        )
    }
}
export default StateClass;