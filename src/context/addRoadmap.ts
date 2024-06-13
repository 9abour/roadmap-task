import { RoadmapType } from "@/context/types/index.types";
import { EXAMPLE_ICON } from "../../public/icons/roadmapInfo";
import { v4 as uuidv4 } from "uuid";

export const pushNewRoadmap = (
	roadmapName: string,
	roadmapDescription: string,
	setRoadmapList: React.Dispatch<React.SetStateAction<RoadmapType[]>>
) => {
	const newRoadmap = {
		id: uuidv4(),
		title: roadmapName,
		description: roadmapDescription,
		steps: [],
		duration: 1,
		icon: { name: "ICON 1", icon: EXAMPLE_ICON },
		styles: {
			mainColor: "#506CF0",
			secondaryColor: "#FF9900",
		},
		weeksRoadmapDuration: 1,
	};

	setRoadmapList(prev => [...prev, newRoadmap]);
};
