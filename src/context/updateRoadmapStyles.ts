import { RoadmapType } from "@/context/types/index.types";

export const updateStyles = (
	roadmapList: RoadmapType[],
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>,
	updatedRoadmapStylesData: Record<string, string>,
	roadmapId: string
) => {
	const updateActiveRoadmapColors = roadmapList.map(roadmap => {
		if (roadmap.id === roadmapId) {
			return {
				...roadmap,
				styles: updatedRoadmapStylesData,
			};
		} else {
			return { ...roadmap };
		}
	});

	setRoadmapList(updateActiveRoadmapColors);
};
