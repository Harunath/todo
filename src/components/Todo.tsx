import { useState } from "react";

function Todo({ title, discription }) {
	const [hideDiscription, setHideDiscription] = useState(true);
	return (
		<div
			className=" bg-red-100 text-black flex px-4 gap-x-4"
			onClick={() => setHideDiscription(!hideDiscription)}>
			<div className="w-full">
				<p className="w-fit mx-auto font-semibold">{title}</p>
				<div hidden={hideDiscription}>
					<p>{discription}</p>
				</div>
			</div>
		</div>
	);
}

export default Todo;
