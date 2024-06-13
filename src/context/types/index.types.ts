import { ReactNode } from "react";

export type RoadmapStepType = {
	id: string;
	title: string;
	tags: string[];
	daysDuration: number | null;
	editorContent: string;
	attachments: File[];
	active: boolean;
	status: string;
};

export type RoadmapType = {
	id: string;
	title: string;
	description: string;
	weeksRoadmapDuration: number;
	steps: RoadmapStepType[];
	styles: Record<"mainColor" | "secondaryColor", string>;
	duration: number;
	icon: Record<string, ReactNode>;
};

export type updateRoadmapDataNewDataType =
	| string
	| number
	| File
	| string[]
	| File[]
	| RoadmapStepType
	| RoadmapStepType[]
	| null
	| ReactNode
	| Record<string, ReactNode>;

export type RoadmapContextType = {
	roadmapList: RoadmapType[];
	activeRoadmap: RoadmapType | undefined;
	addRoadmap: (roadmapName: string, roadmapDescription: string) => void;
	deleteRoadmap: (roadmapId: string) => void;
	updateRoadmapData: (
		newData: updateRoadmapDataNewDataType,
		key: string
	) => void;

	updateRoadmapOrder: (reorderedSteps: RoadmapStepType[]) => void;
	updateRoadmapStepsData: (
		stepId: string,
		newData: updateRoadmapDataNewDataType,
		key: string
	) => void;

	deleteRoadmapStep: (stepId: string) => void;
	updateRoadmapStyles: (
		updatedRoadmapStylesData: Record<string, string>,
		roadmapId: string
	) => void;
};
