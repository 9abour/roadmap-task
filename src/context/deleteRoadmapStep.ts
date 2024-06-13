import { RoadmapType } from "@/context/types/index.types";

export const deleteStep = (
	roadmapList: RoadmapType[],
	activeRoadmapId: string | undefined,
	stepId: string,
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>
) => {
	const updatedRoadmapList = roadmapList.map(roadmap => {
		if (roadmap.id === activeRoadmapId) {
			const filteredRoadmapSteps = roadmap.steps.filter(
				step => step.id !== stepId
			);

			return {
				...roadmap,
				steps: filteredRoadmapSteps,
			};
		}

		return { ...roadmap };
	});

	setRoadmapList(updatedRoadmapList);
};
