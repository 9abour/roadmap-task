"use client";

import RoadmapStepItem from "@/components/roadmap-steps/RoadmapStepItem";
import React from "react";
import { ADD_STEP_ICON } from "../../../public/icons/roadmapSteps";
import { useRoadmapSteps } from "@/components/roadmap-steps/hooks/useRoadmapSteps";
import { Reorder } from "framer-motion";

const RoadmapSteps = () => {
	const { items, setItems, addStep, roadmapMainColor } = useRoadmapSteps();

	return (
		<div className="py-4 px-4 sm:px-6">
			<Reorder.Group
				axis="y"
				values={items}
				onReorder={setItems}
				className="flex flex-col gap-4"
			>
				{items.map(step => (
					<Reorder.Item key={step.id} value={step}>
						<RoadmapStepItem key={step.id} step={step} />
					</Reorder.Item>
				))}
			</Reorder.Group>

			<button className="w-fit h-[48px] flex gap-2 mt-4" onClick={addStep}>
				<div
					style={{ backgroundColor: roadmapMainColor }}
					className="w-[48px] h-[48px] flex-jc-c rounded-full text-white"
				>
					{ADD_STEP_ICON}
				</div>
				<span
					style={{ color: roadmapMainColor }}
					className="leading-[48px] text-lg"
				>
					Add new step
				</span>
			</button>
		</div>
	);
};

export default RoadmapSteps;
