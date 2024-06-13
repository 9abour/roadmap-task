import { RoadmapType, RoadmapStepType } from "@/context/types/index.types";

export const updateRoadmapOrder = (
	roadmapList: RoadmapType[],
	activeRoadmapId: string,
	reorderedSteps: RoadmapStepType[],
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>
) => {
	const updatedRoadmapList = roadmapList.map(roadmap => {
		if (roadmap.id === activeRoadmapId) {
			return { ...roadmap, steps: reorderedSteps };
		}

		return roadmap;
	});

	setRoadmapList(updatedRoadmapList);
};
