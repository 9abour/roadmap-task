import RoadmapInfoSelect from "@/components/roadmap-info/RoadmapInfoSelect";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { EXAMPLE_ICON, RESET_ICON } from "../../../public/icons/roadmapInfo";
import { RoadmapContext } from "@/context/RoadmapContext";
import { ADD_STEP_ICON, CROSS_ICON } from "../../../public/icons/roadmapSteps";

const RoadmapInfoSelectItems = () => {
	const { activeRoadmap, updateRoadmapData } = useContext(RoadmapContext);
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	const roadmapDurationListInWeeks = [1, 2, 3, 4, 5, 6];
	const roadmapIconsList = [
		{ name: "ICON 1", icon: EXAMPLE_ICON },
		{ name: "ICON 2", icon: RESET_ICON },
		{ name: "ICON 3", icon: ADD_STEP_ICON },
		{ name: "ICON 4", icon: CROSS_ICON },
	];

	const [roadmapActiveDuration, setRoadmapActiveDuration] = useState<number>(
		roadmapDurationListInWeeks[0]
	);

	const [roadmapActiveIcon, setRoadmapActiveIcon] = useState<
		Record<string, ReactNode>
	>(roadmapIconsList[0]);

	useEffect(() => {
		updateRoadmapData(roadmapActiveDuration, "duration");
	}, [roadmapActiveDuration]);

	useEffect(() => {
		updateRoadmapData(roadmapActiveIcon, "icon");
	}, [roadmapActiveIcon]);

	return (
		<>
			<RoadmapInfoSelect
				label={{ id: "roadmapDuration", name: "Roadmap duration" }}
				activeOption={
					<span>
						{`${roadmapActiveDuration - 1}:${roadmapActiveDuration}`} weeks
					</span>
				}
			>
				{roadmapDurationListInWeeks.map(item => (
					<button
						type="button"
						key={item}
						onClick={() => setRoadmapActiveDuration(item)}
					>
						{`${item - 1}:${item}`} weeks
					</button>
				))}
			</RoadmapInfoSelect>
			<RoadmapInfoSelect
				label={{ id: "roadmapIcon", name: "Roadmap icon" }}
				activeOption={
					<span className="flex-jc-c gap-1 sm:gap-2 sm:text-[18px] [&>svg]:fill-red-500">
						<span
							style={{ backgroundColor: roadmapMainColor }}
							className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-white"
						>
							{roadmapActiveIcon.icon}
						</span>
						{roadmapActiveIcon.name}
					</span>
				}
			>
				{roadmapIconsList.map((item, index) => (
					<button
						type="button"
						key={index}
						className="flex items-center gap-2 !px-4 sm:gap-2 !text-[16px] sm:text-[18px]"
						onClick={() => setRoadmapActiveIcon(item)}
					>
						<span
							style={{ backgroundColor: roadmapMainColor }}
							className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-white"
						>
							{item.icon}
						</span>{" "}
						{item.name}
					</button>
				))}
			</RoadmapInfoSelect>
		</>
	);
};

export default RoadmapInfoSelectItems;
