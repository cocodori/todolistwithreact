import React, { Component } from "react"
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

    state = {
        todoData: [
            {
                id: "1",
                title: "react study",
                completed: true
            },
            {
                id: "2",
                title: "typescript study",
                completed: false
            }
        ]
    }

    handleClick = (id) => {
        let newTodoData = this.state.todoData.filter(data => data.id !== id);
        this.setState({todoData: newTodoData});
    }

    render() {
        return (
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>Todo</h1>
                    </div>
                    {this.state.todoData.map(data => (
                        <div style={this.getStyle()} key={data.id}>
                            <input type="checkbox" defaultChecked={false} />
                            {data.title}
                            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}