import {
	RoadmapType,
	updateRoadmapDataNewDataType,
} from "@/context/types/index.types";

export const updateRoadmapStepsData = (
	roadmapList: RoadmapType[],
	activeRoadmapId: string,
	stepId: string,
	newData: updateRoadmapDataNewDataType,
	key: string,
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>
) => {
	const updatedRoadmapList = roadmapList.map(roadmap => {
		if (roadmap.id === activeRoadmapId) {
			const updatedSteps = roadmap.steps.map(step => {
				if (step.id === stepId) {
					return {
						...step,
						[key]: newData,
					};
				}

				return { ...step };
			});

			return {
				...roadmap,
				steps: updatedSteps,
			};
		}

		return { ...roadmap };
	});

	setRoadmapList(updatedRoadmapList);
};
