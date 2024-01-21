import { useEffect, useState } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import axios from "axios";

function TodosUI() {
	const [todos, setTodos] = useState([]);
	const [displayPopUp, setDisplayPopUp] = useState(true);
	useEffect(() => {
		fetch("http://localhost:3000/todos").then(async (response) => {
			const data = await response.json();
			setTodos(data);
		});
	}, []);
	const close = () => {
		setDisplayPopUp(true);
		console.log("Close function");
	};

	const getSetTodos = (todo: any) => {
		axios.post("http://localhost:3000/todos", todo);
	};
	return (
		<div className="flex flex-col bg-black text-white h-screen w-screen pt-4">
			<div className="mx-auto w-fit text-2xl font-bold font-serif">
				Your ToDo's
			</div>
			<div className=" relative flex flex-col gap-4 mx-auto h-full min-w-[250px] max-w-[400px] p-4 bg-yellow-50">
				{todos.map((todo) => (
					<Todo title={todo.title} discription={todo.discription} />
				))}

				<div className="h-10">
					<button
						onClick={() => setDisplayPopUp(false)}
						className="w-fit p-2 bg-blue-100 font-semibold text-lg text-gray-500">
						Add new
					</button>
				</div>
				<div
					className=" absolute h-full w-full left-0 top-0"
					hidden={displayPopUp}>
					<NewTodo todos={todos} getSetTodos={getSetTodos} close={close} />
				</div>
			</div>
		</div>
	);
}

export default TodosUI;
