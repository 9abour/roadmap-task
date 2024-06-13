import { RoadmapContext } from "@/context/RoadmapContext";
import React, { useContext } from "react";
import { PARK_ICON } from "../../../public/icons/roadmapPreview";
import RoadmapPreviewSteps from "@/components/roadmap-preview/RoadmapPreviewSteps";

const RoadmapPreview = () => {
	const { activeRoadmap } = useContext(RoadmapContext);

	return (
		<div className="dotted-bg p-4 sm:p-8">
			<div className="flex-jc-c">
				<h3
					style={{ backgroundColor: activeRoadmap?.styles.secondaryColor }}
					className="flex items-center gap-2 text-white rounded-full font-medium py-2 px-4"
				>
					<span>{PARK_ICON}</span>
					{activeRoadmap?.title}
				</h3>
			</div>
			{activeRoadmap?.steps.length ? (
				<div className="line-dashed h-[50px] mx-auto"></div>
			) : null}

			<RoadmapPreviewSteps />
		</div>
	);
};

export default RoadmapPreview;
