import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageProfile = () => {
	const { currentUser } = useContext(AppContext);
	return (
		<div className="flex gap-3">
			<img src="images/users/defaultProfile.jpg/" className="w-[7rem]" />
			<div>
				<p className="text-2xl">{currentUser.fullName}</p>
				<p>Login: {currentUser.login}</p>
				<p>Email: {currentUser.email}</p>
			</div>
		</div>
	);
};
