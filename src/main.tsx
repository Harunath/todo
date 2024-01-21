import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodosUI from "./components/TodosUI.tsx";
import NewTodo from "./components/NewTodo.tsx";

const router = createBrowserRouter([
	{ path: "/", element: <TodosUI /> },
	{ path: "/addTodo", element: <NewTodo /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
	