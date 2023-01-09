 import React, {Component} from "react"
 import "./App.css";

 export default class App extends Component {
    btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cusor: "pointer",
        float: "right"
    };

    getStyle = () => {
       return {
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: "none"
       } 
    }
    
    render() {
        return(
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>Todo</h1>
                    </div>

                    <div style={this.getStyle()}>
                        <input type="checkbox" defaultChecked={false} />
                        리액트 공부
                        <button style={this.btnStyle}>x</button>
                    </div>

                    <div style={this.getStyle()}>
                        <input type="checkbox" defaultChecked={false} />
                        Typescript 공부
                        <button style={this.btnStyle}>x</button>
                    </div>
                </div>
            </div>
        )
    }
 }