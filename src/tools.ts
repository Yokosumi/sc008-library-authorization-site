import { ICurrentUser, IFormFields } from "../src/interfaces";

export const isMemberOfAccessGroup = (
	currentUser: ICurrentUser,
	accessGroups: string
) => {
	const accessGroupItems = currentUser.accessGroups
		.split(",")
		.map((m) => m.trim());
	return accessGroupItems.includes(accessGroups);
};

export const fillProfileFormFieldsWithCurrentUserFields = (
	formFields: IFormFields,
	currentUser: ICurrentUser
) => {
	const names = currentUser.fullName.split(" "); // TODO: refactore to send firstName/lastName from backend
	formFields.firstName = names[0];
	formFields.lastName = names[1];
	formFields.login = currentUser.login;
	formFields.email = currentUser.email;
};
