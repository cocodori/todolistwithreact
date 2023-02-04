import React, {useState} from "react"
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

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

    return (
        <div>
            <div>
                <div>
                    <h1>Todo</h1>
                </div>

                <List todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
                
            </div>
        </div>
    )
}