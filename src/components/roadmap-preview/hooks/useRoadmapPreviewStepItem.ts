import { useContext } from "react";
import useToggle from "@/hooks/useToggle";
import { RoadmapContext } from "@/context/RoadmapContext";

const useRoadmapPreviewStepItem = (id: string, status: string) => {
	const { currentState: isOpenAction, toggle: hideActionButton } =
		useToggle(false);
	const { activeRoadmap, updateRoadmapStepsData } = useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	const isFirstStep = activeRoadmap?.steps[0].id === id;

	const handleToggleStepStatus = () => {
		updateRoadmapStepsData(
			id,
			status === "completed" ? "not-started" : "completed",
			"status"
		);
	};

	return {
		isOpenAction,
		hideActionButton,
		roadmapMainColor,
		isFirstStep,
		handleToggleStepStatus,
	};
};

export default useRoadmapPreviewStepItem;
