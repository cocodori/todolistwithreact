import React, {useState} from "react"
import "./App.css";
import Form from "./components/Form";
import List from "./components/Lists";

export default function App() {
    console.log("App component")
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
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow log:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>할 일</h1>
                </div>

                <List todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
                
            </div>
        </div>
    )
}