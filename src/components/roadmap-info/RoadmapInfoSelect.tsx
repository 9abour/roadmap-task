import React, { ReactNode } from "react";
import { ARROW_ICON } from "../../../public/icons/roadmapSteps";
import useToggle from "@/hooks/useToggle";

const RoadmapInfoSelect = ({
	children,
	label,
	activeOption,
}: {
	children: ReactNode;
	label: { id: string; name: string };
	activeOption: ReactNode;
}) => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	return (
		<div className="relative col-span-2">
			<label htmlFor={label.id} className="text-[#666666]">
				{label.name}*
			</label>
			<button
				onClick={hideOptions}
				id="roadmapDuration"
				type="button"
				className="flex-jb-c roadmap-info-select text-[16px] sm:text-[18px]"
			>
				{activeOption}
				<span
					className={`[&>svg]:fill-[#ADAEB5] [&>svg]:transition-all ${
						isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
					}`}
				>
					{ARROW_ICON}
				</span>
			</button>

			{isOptionsHidden ? (
				<div className="absolute w-full top-[83px] bg-white mt-1 border border-[#E0E0E0] rounded-xl flex flex-col gap-2 [&>button]:text-[18px] [&>:first-child]:rounded-t-xl [&>:last-child]:rounded-b-xl [&>button]:p-2 [&>button:hover]:bg-[#E0E0E0]/20">
					{children}
				</div>
			) : null}
		</div>
	);
};

export default RoadmapInfoSelect;
