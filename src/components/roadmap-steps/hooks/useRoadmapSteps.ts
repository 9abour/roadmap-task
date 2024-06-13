import { RoadmapContext } from "@/context/RoadmapContext";
import { RoadmapStepType } from "@/context/types/index.types";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useRoadmapSteps = () => {
	const { roadmapList, updateRoadmapData, updateRoadmapOrder, activeRoadmap } =
		useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	const [items, setItems] = useState(activeRoadmap?.steps || []);

	const addStep = () => {
		const newStep: RoadmapStepType = {
			id: uuidv4(),
			title: "Step default title",
			tags: [],
			daysDuration: null,
			editorContent: "",
			attachments: [],
			active: true,
			status: "not-started",
		};

		updateRoadmapData([...roadmapList[0].steps, newStep], "steps");
	};

	useEffect(() => {
		if (activeRoadmap && activeRoadmap.steps) {
			setItems(activeRoadmap.steps);
		}
	}, [roadmapList]);

	useEffect(() => {
		updateRoadmapOrder(items);
	}, [items]);

	return {
		items,
		setItems,
		addStep,
		roadmapMainColor,
	};
};

export { useRoadmapSteps };
