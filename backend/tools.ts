/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import express from "express";
import { ICurrentUser } from "../src/interfaces";

export const readJsonFile = (filePath: string) => {
	const jsonData = fs.readFileSync(filePath, "utf8");
	const jsonObject = JSON.parse(jsonData);
	return jsonObject;
};

export const extractPortNumber = (text: string) => {
	const regex = /(\d+)/;
	const match = text.match(regex);
	return match ? parseInt(match[0], 10) : 0;
};

export const clearConsole = (): void => {
	process.stdout.write("\x1Bc");
};

export const handleError = (res: express.Response, error: any) => {
	return res.status(500).json(error);
};

export const getCurrentUserFromUser = (user: any) => {
	return {
		fullName: `${user.firstName} ${user.lastName}`,
		accessGroups: user.accessGroups,
	};
};

export const isMemberOfAccessGroup = (
	currentUser: ICurrentUser,
	accessGroups: string
) => {
	const accessGroupItems = currentUser.accessGroups
		.split(",")
		.map((m) => m.trim());
	return accessGroupItems.includes(accessGroups);
};
