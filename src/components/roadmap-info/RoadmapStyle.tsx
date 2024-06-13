import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import RoadmapStyleButtonCheckbox from "@/components/roadmap-info/RoadmapStyleButtonCheckbox";
import React, { useContext } from "react";
import { RESET_ICON } from "../../../public/icons/roadmapInfo";
import { useRoadmapStyle } from "@/components/roadmap-info/hooks/useRoadmapStyle";
import { RoadmapContext } from "@/context/RoadmapContext";

const RoadmapStyle = () => {
	const { activeRoadmap } = useContext(RoadmapContext);
	const { colors, handleChangeColor, resetStyles } = useRoadmapStyle();
	const roadmapMainColor = activeRoadmap?.styles.mainColor;

	return (
		<div className="w-full">
			<div className="flex-jb-c sm:gap-4">
				<span>Main Color:</span>
				<div className="flex-jc-c">
					{colors.mainColor.map(color => (
						<RoadmapStyleButtonCheckbox
							key={color.color}
							{...color}
							keyColor="mainColor"
							handleChangeColor={handleChangeColor}
						/>
					))}
				</div>
			</div>
			<div className="flex-jb-c gap-4 mt-4">
				<span>Secondary Color:</span>
				<div className="flex-jc-c">
					{colors.secondaryColor.map(color => (
						<RoadmapStyleButtonCheckbox
							key={color.color}
							{...color}
							keyColor="secondaryColor"
							handleChangeColor={handleChangeColor}
						/>
					))}
				</div>
			</div>

			<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0] my-6" />

			<button
				style={{ color: roadmapMainColor }}
				className="flex-jc-c gap-2"
				onClick={resetStyles}
			>
				{RESET_ICON}
				Reset style defaults
			</button>
		</div>
	);
};

export default RoadmapStyle;
