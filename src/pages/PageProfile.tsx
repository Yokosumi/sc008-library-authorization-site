import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageProfile = () => {
	const { currentUser } = useContext(AppContext);
	return (
		<div>
			<p>Full name:{currentUser.fullName}</p>
			<p>Login:{currentUser.login}</p>
			<p>Email:{currentUser.email}</p>
		</div>
	);
};
