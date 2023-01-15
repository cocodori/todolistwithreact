import React, {useState} from "react"
import "./App.css";

export default function App() {
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cusor: "pointer",
        float: "right"
    };

    const getStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none"
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData);
    }

    const handleSubmit = (e) => {
        // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
        e.preventDefault();

        // 새로운 할 일 데이터
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };

        // 원래 있던 state에 newTodo를 추가하기
        setTodoData(prev => [...prev, newTodo]);
        setValue("");
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }

            return data;
        });

        setTodoData(newTodoData);
    };

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>Todo</h1>
                </div>
                {todoData.map(data => (
                    <div style={getStyle(data.completed)} key={data.id}>
                        <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)} />
                        {data.title}
                        <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                    </div>
                ))}

                <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        style={{ flex: "10", padding: "5px" }}
                        placeholder="해야 할 일을 입력하세요."
                        value={value}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="입력"
                        className="btn"
                        style={{ flex: '1' }}
                    />
                </form>
            </div>
        </div>
    )
}