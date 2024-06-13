"use client";

import {
	RoadmapContextType,
	RoadmapStepType,
	RoadmapType,
	updateRoadmapDataNewDataType,
} from "@/context/types/index.types";
import { Children } from "@/types/index.types";
import React, { createContext, useState } from "react";
import PathnameHelper from "@/helpers/pathname.helper";
import { usePathname } from "next/navigation";
import { getActiveRoadmap } from "@/context/getActiveRoadmap";
import { updateRoadmapData as updateData } from "@/context/updateRoadmapData";
import { updateRoadmapOrder as updateOrder } from "@/context/updateRoadmapOrder";
import { updateRoadmapStepsData as updateStepsData } from "@/context/updateRoadmapStepsData";
import { updateStyles } from "@/context/updateRoadmapStyles";
import { EXAMPLE_ICON } from "../../public/icons/roadmapInfo";
import { filterRoadmapList } from "@/context/filterRoadmapList";
import { pushNewRoadmap } from "@/context/addRoadmap";
import { deleteStep } from "@/context/deleteRoadmapStep";

export const RoadmapContext = createContext<RoadmapContextType>({
	roadmapList: [],
	activeRoadmap: undefined,
	addRoadmap: () => {},
	deleteRoadmap: () => {},
	updateRoadmapData: () => {},
	updateRoadmapOrder: () => {},
	updateRoadmapStepsData: () => {},
	deleteRoadmapStep: () => {},
	updateRoadmapStyles: () => {},
});

const RoadmapContextProvider = ({ children }: Children) => {
	const pathname = usePathname();

	const [roadmapList, setRoadmapList] = useState<RoadmapType[]>([
		{
			id: "1",
			title: "DevOps 🚀",
			description:
				"DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity",
			steps: [
				{
					id: "1",
					title: "Learn a programming language",
					tags: ["Example tag", "tag 2"],
					daysDuration: null,
					editorContent: "",
					attachments: [],
					active: false,
					status: "not-started",
				},
			],
			duration: 1,
			icon: { name: "ICON 1", icon: EXAMPLE_ICON },
			styles: {
				mainColor: "#506CF0",
				secondaryColor: "#FF9900",
			},
			weeksRoadmapDuration: 3,
		},
	]);

	const activeRoadmapId = PathnameHelper.getRoadmapId(pathname);
	const activeRoadmap = getActiveRoadmap(roadmapList, activeRoadmapId);

	const addRoadmap = (roadmapName: string, roadmapDescription: string) => {
		pushNewRoadmap(roadmapName, roadmapDescription, setRoadmapList);
	};

	const deleteRoadmap = (roadmapId: string) => {
		filterRoadmapList(roadmapList, setRoadmapList, roadmapId);
	};

	const updateRoadmapData = (
		newData: updateRoadmapDataNewDataType,
		key: string
	) => {
		updateData(roadmapList, activeRoadmapId, newData, key, setRoadmapList);
	};

	const updateRoadmapOrder = (reorderedSteps: RoadmapStepType[]) => {
		updateOrder(roadmapList, activeRoadmapId, reorderedSteps, setRoadmapList);
	};

	const updateRoadmapStepsData = (
		stepId: string,
		newData: updateRoadmapDataNewDataType,
		key: string
	) => {
		updateStepsData(
			roadmapList,
			activeRoadmapId,
			stepId,
			newData,
			key,
			setRoadmapList
		);
	};

	const deleteRoadmapStep = (stepId: string) => {
		deleteStep(roadmapList, activeRoadmapId, stepId, setRoadmapList);
	};

	const updateRoadmapStyles = (
		updatedRoadmapStylesData: Record<string, string>,
		roadmapId: string
	) => {
		updateStyles(
			roadmapList,
			setRoadmapList,
			updatedRoadmapStylesData,
			roadmapId
		);
	};

	return (
		<RoadmapContext.Provider
			value={{
				roadmapList,
				activeRoadmap,
				addRoadmap,
				deleteRoadmap,
				updateRoadmapData,
				updateRoadmapOrder,
				updateRoadmapStepsData,
				deleteRoadmapStep,
				updateRoadmapStyles,
			}}
		>
			{children}
		</RoadmapContext.Provider>
	);
};

export default RoadmapContextProvider;
