import { RoadmapType } from "@/context/types/index.types";

export const getActiveRoadmap = (
	roadmapList: RoadmapType[],
	activeRoadmapId: string | undefined
): RoadmapType | undefined => {
	return roadmapList.find(roadmap => roadmap.id === activeRoadmapId);
};
