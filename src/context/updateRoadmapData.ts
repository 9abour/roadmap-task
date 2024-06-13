import {
	RoadmapType,
	updateRoadmapDataNewDataType,
} from "@/context/types/index.types";

export const updateRoadmapData = (
	roadmapList: RoadmapType[],
	activeRoadmapId: string,
	newData: updateRoadmapDataNewDataType,
	key: string,
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>
) => {
	const roadmapListUpdated = roadmapList.map(roadmap => {
		if (roadmap.id === activeRoadmapId) {
			return {
				...roadmap,
				[key]: newData,
			};
		}

		return roadmap;
	});

	setRoadmapList(roadmapListUpdated);
};
