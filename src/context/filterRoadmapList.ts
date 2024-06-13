import { RoadmapType } from "@/context/types/index.types";

export const filterRoadmapList = (
	roadmapList: RoadmapType[],
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>,
	roadmapId: string
) => {
	const filteredList = roadmapList.filter(roadmap => roadmap.id !== roadmapId);

	setRoadmapList(filteredList);
};
