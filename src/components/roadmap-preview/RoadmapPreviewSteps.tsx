import RoadmapPreviewStepItem from "@/components/roadmap-preview/RoadmapPreviewStepItem";
import { RoadmapContext } from "@/context/RoadmapContext";
import React, { useContext } from "react";

const RoadmapPreviewSteps = () => {
	const { activeRoadmap } = useContext(RoadmapContext);

	if (!activeRoadmap) return null;

	const { steps } = activeRoadmap;

	return (
		<div>
			{steps.map(step => (
				<RoadmapPreviewStepItem key={step.id} step={step} />
			))}
		</div>
	);
};

export default RoadmapPreviewSteps;
