import React from "react";
import { CHECK_ICON } from "../../../public/icons/roadmapInfo";
import { Colors } from "@/components/roadmap-info/types/index.types";

const RoadmapStyleButtonCheckbox = ({
	color,
	active,
	keyColor,
	handleChangeColor,
}: {
	color: string;
	active: boolean;
	keyColor: keyof Colors;
	handleChangeColor: (keyColor: keyof Colors, newColor: string) => void;
}) => {
	return (
		<button
			style={{
				backgroundColor: color,
				boxShadow: active ? `${color} 0px 0px 0px 1px` : "none",
			}}
			className="w-[28px] h-[28px] [&>svg]:mx-auto ml-2 sm:ml-4 rounded-full border-2 border-[#f6f6f6]"
			onClick={() => handleChangeColor(keyColor, color)}
		>
			{active ? CHECK_ICON : null}
		</button>
	);
};

export default RoadmapStyleButtonCheckbox;
