import React, { useContext, useEffect } from "react";
import { ADD_TAG } from "../../../public/icons/roadmapSteps";
import { useRoadmapTags } from "@/components/roadmap-steps/hooks/useRoadmapTags";
import { RoadmapContext } from "@/context/RoadmapContext";

const RoadmapTags = ({ stepId }: { stepId: string }) => {
	const { tags, removeTag, changeValue, addTag, addingTag, value, error } =
		useRoadmapTags();

	const { updateRoadmapStepsData, activeRoadmap } = useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	useEffect(() => {
		updateRoadmapStepsData(stepId, tags, "tags");
	}, [tags]);

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map(tag => (
				<button
					key={tag}
					className="flex-jc-c gap-1 rounded-full py-[3px] px-[5px] bg-[#00CF7C]/10 hover:bg-red-500/10 hover:line-through"
					onClick={() => removeTag(tag)}
				>
					{tag}
				</button>
			))}

			{addingTag ? (
				<input
					style={{ borderColor: roadmapMainColor }}
					className={`w-[100px] max-h-[30px] flex-jc-c gap-1 rounded-full py-[3px] px-[10px] border outline-none ${
						error ? "border-red-400" : ""
					}`}
					value={value}
					onChange={changeValue}
				/>
			) : null}

			<button
				style={{ borderColor: roadmapMainColor }}
				className="h-[30px] flex-jc-c gap-1 border border-opacity-20 rounded-full py-[3px] px-[5px] hover:opacity-90"
				onClick={addTag}
			>
				<span
					style={{
						color: roadmapMainColor,
						backgroundColor: roadmapMainColor + "33",
					}}
					className="rounded-full p-1"
				>
					{ADD_TAG}
				</span>
				{value.length ? "Save tag" : "Add tag"}
			</button>
		</div>
	);
};

export default RoadmapTags;
