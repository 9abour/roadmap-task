import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import React, { useContext, useEffect, useState } from "react";
import { ADD_STEP_ICON, CHECK_ICON } from "../../../public/icons/roadmapSteps";
import useToggle from "@/hooks/useToggle";
import { RoadmapContext } from "@/context/RoadmapContext";

const StepProcess = ({
	initialStatus,
	stepId,
}: {
	initialStatus: string;
	stepId: string;
}) => {
	const { currentState: processListOpen, toggle: toggleProcessList } =
		useToggle(false);
	const [status, setStatus] = useState(
		initialStatus ? initialStatus : "not-started"
	);

	const { updateRoadmapStepsData, activeRoadmap } = useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	useEffect(() => {
		updateRoadmapStepsData(stepId, status, "status");
	}, [status]);

	return (
		<div>
			<div className="flex-jb-c mt-2">
				<p className="text-[#606060]">Verification Process / Assignment</p>
				<button
					className={`w-[32px] h-[32] flex-jc-c bg-[#F6F6F6] rounded-md text-[#92929D] ${
						processListOpen ? "[&>svg]:rotate-45" : "[&>svg]:rotate-0"
					} [&>svg]:transition-all`}
					onClick={toggleProcessList}
				>
					{ADD_STEP_ICON}
				</button>
			</div>

			{processListOpen ? (
				<div
					className={`flex gap-4 step-process-btn-container ${status} text-[#92929D]`}
				>
					<button
						style={{
							backgroundColor:
								status === "not-started" ? roadmapMainColor + "1A" : "",
							borderColor:
								status === "not-started" ? roadmapMainColor + "66" : "",
						}}
						className={`step-process-btn`}
						onClick={() => setStatus("not-started")}
					>
						{CHECK_ICON}
						<span>Not started</span>
					</button>
					<button
						style={{
							backgroundColor:
								status === "completed" ? roadmapMainColor + "1A" : "",
							borderColor:
								status === "completed" ? roadmapMainColor + "66" : "",
						}}
						className="step-process-btn [&>svg]:text-[#00CF7C]"
						onClick={() => setStatus("completed")}
					>
						{CHECK_ICON}
						<span>Completed</span>
					</button>
				</div>
			) : null}
		</div>
	);
};

export default StepProcess;
