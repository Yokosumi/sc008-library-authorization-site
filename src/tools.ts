import { ICurrentUser } from "../src/interfaces";

export const isMemberOfAccessGroup = (
	currentUser: ICurrentUser,
	accessGroups: string
) => {
	const accessGroupItems = currentUser.accessGroups
		.split(",")
		.map((m) => m.trim());
	return accessGroupItems.includes(accessGroups);
};
