import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as tools from "../tools";

export const PageWelcome = () => {
	const { books, users, currentUser } = useContext(AppContext);

	return (
		<>
			<p>There are {books.length} books.</p>
			{tools.isMemberOfAccessGroup(currentUser, "administrators") && (
				<p>There are {users.length} users.</p>
			)}
		</>
	);
};
