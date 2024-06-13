import Editor from "@/components/common/Editor/components/Editor";
import CustomDatePicker from "@/components/common/input/DatePicker";
import RoadmapTags from "@/components/roadmap-steps/RoadmapTags";
import React, { useContext, useEffect, useState } from "react";
import { ARROW_ICON, SAVE_ICON } from "../../../public/icons/roadmapSteps";
import useToggle from "@/hooks/useToggle";
import Attachments from "@/components/roadmap-steps/Attachments";
import MenuRoadmapStep from "@/components/roadmap-steps/MenuRoadmapStep";
import { RoadmapStepItemProps } from "@/components/roadmap-steps/types/index.types";
import { EDIT_ICON } from "../../../public/icons/sidebar";
import { RoadmapContext } from "@/context/RoadmapContext";
import useInput from "@/components/common/input/hooks/useInput";
import StepProcess from "@/components/roadmap-steps/StepProcess";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";

const RoadmapStepItem = ({ step }: { step: RoadmapStepItemProps }) => {
	const { id, editorContent, title, active: initialActiveValue, status } = step;
	const { value, changeValue } = useInput(title);
	const { currentState: titleNotDisabled, toggle: changeTitle } =
		useToggle(false);
	const { currentState: active, toggle: expandStep } =
		useToggle(initialActiveValue);
	const [content, setContent] = useState<string>(editorContent);
	const { updateRoadmapStepsData, activeRoadmap } = useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	useEffect(() => {
		updateRoadmapStepsData(id, content, "editorContent");
	}, [content]);

	const handleSaveStepTitle = () => {
		changeTitle();
		updateRoadmapStepsData(id, value, "title");
	};

	return (
		<div
			style={{ borderColor: active ? roadmapMainColor : "" }}
			className={`flex flex-col gap-2 rounded-lg p-4 border border-transparent ${
				active ? "bg-white" : "bg-[#f6f6f6]"
			}`}
		>
			<div className="flex-jb-c gap-2">
				<div className="w-full flex items-center gap-1">
					<button
						style={{ color: roadmapMainColor }}
						onClick={handleSaveStepTitle}
					>
						{titleNotDisabled ? SAVE_ICON : EDIT_ICON}
					</button>
					<input
						type="text"
						value={value}
						className={`w-full bg-transparent text-md sm:text-[20px] border-2 border-transparent enabled:border-primary-ultramarineBlue/30 rounded-md pl-2 ${
							titleNotDisabled
								? "outline-3 outline-primary-ultramarineBlue/60"
								: ""
						}`}
						disabled={!titleNotDisabled}
						onChange={changeValue}
					/>
				</div>

				<div className="flex items-center gap-2">
					<MenuRoadmapStep stepId={id} />

					<button
						onClick={expandStep}
						className={`text-primary-dark ${
							active ? "rotate-0" : "rotate-180"
						} transition-all`}
					>
						{ARROW_ICON}
					</button>
				</div>
			</div>

			{active ? (
				<>
					<div className="flex-jb-c">
						<RoadmapTags stepId={id} />
						<CustomDatePicker stepId={id} />
					</div>

					<Editor value={content} changeValue={setContent} />

					<StepProcess initialStatus={status} stepId={id} />

					<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

					<Attachments stepId={id} />
				</>
			) : null}
		</div>
	);
};

export default RoadmapStepItem;
