import { RoadmapType } from "@/context/types/index.types";

class RoadmapContextHelper {
	static getActiveRoadmap(roadmapList: RoadmapType[], roadmapId: string) {
		const activeRoadmap = roadmapList.find(roadmap => roadmap.id === roadmapId);

		return activeRoadmap;
	}
}

export { RoadmapContextHelper };
