import { ChangeEvent, EventHandler, useEffect, useState } from "react";

function NewTodo({ todos, getSetTodos, close }) {
	const [todo, setTodo] = useState({ title: "", discription: "" });
	const cancel = () => {
		setTodo({ title: "", discription: "" });
		close();
	};
	const create = () => {
		getSetTodos(todo);
		console.log(todos);
		cancel();
	};
	return (
		<div className="h-full w-full pt-5 text-black bg-[#EDEACF] bg-opacity-95">
			<div className="mx-auto h-5/6 w-11/12">
				<div>
					Title
					<div>
						<input
							type="text"
							name="title"
							className=" mt-1 font-medium ring-0 focus:ring-0 outline-none"
							onInput={(event) =>
								setTodo({
									title: event.target.value,
									discription: todo.discription,
								})
							}
							value={todo.title}
							placeholder="Enter Title"
							required
						/>
					</div>
				</div>
				<div className="mt-4">
					Discription
					<div>
						<textarea
							name="discription"
							className=" mt-1 h-16 font-medium ring-0 focus:ring-0 outline-none"
							onInput={(event) =>
								setTodo({
									title: todo.title,
									discription: event.target.value,
								})
							}
							value={todo.discription}
							placeholder="Enter Discription"
							required
						/>
					</div>
				</div>
			</div>
			<div className="flex p-4">
				<button className="bg-red-200" onClick={cancel}>
					Cancel
				</button>
				<button className=" bg-green-200" onClick={create}>
					Create
				</button>
			</div>
		</div>
	);
}

export default NewTodo;
