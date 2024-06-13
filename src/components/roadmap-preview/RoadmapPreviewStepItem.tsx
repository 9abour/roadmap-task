import { RoadmapStepType } from "@/context/types/index.types";
import React from "react";
import {
	ARROW_ICON,
	CHECK_ICON,
	DURATION_ICON,
} from "../../../public/icons/roadmapSteps";
import RoadmapPreviewStepItemAttachments from "@/components/roadmap-preview/RoadmapPreviewStepItemAttachments";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useRoadmapPreviewStepItem from "@/components/roadmap-preview/hooks/useRoadmapPreviewStepItem";

const RoadmapPreviewStepItem = ({ step }: { step: RoadmapStepType }) => {
	const { id, title, daysDuration, attachments, status } = step;

	const {
		isOpenAction,
		hideActionButton,
		roadmapMainColor,
		isFirstStep,
		handleToggleStepStatus,
	} = useRoadmapPreviewStepItem(id, status);

	return (
		<>
			{!isFirstStep ? (
				<div className="line-dashed h-[40px] mx-auto"></div>
			) : null}
			<div className="relative max-w-[380px] mx-auto p-2 rounded-sm bg-white border border-[#EBECF2] group">
				<div className="flex items-center gap-2">
					<span className="w-[20px] h-[20px] rounded-sm bg-[#ACB5B7]" />
					{title}
				</div>

				<div className="w-full flex-jb-c mt-2">
					<div style={{ color: roadmapMainColor }} className="flex-jc-c gap-1">
						{DURATION_ICON}{" "}
						<span className="text-primary-dark">
							{daysDuration
								? `${daysDuration > 0 ? daysDuration - 1 : 0}-${
										daysDuration > 0 ? daysDuration : 0
								  } days`
								: "Duration"}
						</span>
					</div>

					<div className="flex items-center text-[#92929D]">
						<div className="flex items-center gap-1">
							<span
								className={`${
									status === "completed" ? "text-[#00CF7C]" : "text-[#ACB5B7]"
								}`}
							>
								{CHECK_ICON}
							</span>{" "}
							{status === "completed" ? "Completed" : "Not started"}
						</div>

						<RoadmapPreviewStepItemAttachments attachments={attachments} />
					</div>
				</div>

				{isOpenAction ? (
					<>
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

						<button
							className="w-full text-white py-2 rounded-sm"
							onClick={handleToggleStepStatus}
							style={{ backgroundColor: roadmapMainColor }}
						>
							{status === "completed"
								? "Uncheck assignment"
								: "Complete assignment"}
						</button>
					</>
				) : null}

				<button
					className={`w-[45px] absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg opacity-0 group-hover:opacity-100 border delay-200 border-[#EBECF2] [&>svg]:mx-auto [&>svg]:fill-primary-dark [&>svg]:transition-all transition-all ${
						isOpenAction ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
					}`}
					onClick={hideActionButton}
				>
					{ARROW_ICON}
				</button>
			</div>
		</>
	);
};

export default RoadmapPreviewStepItem;
