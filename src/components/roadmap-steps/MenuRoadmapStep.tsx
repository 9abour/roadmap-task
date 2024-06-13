import React, { useContext } from "react";
import { MENU_ICON } from "../../../public/icons/roadmapSteps";
import useToggle from "@/hooks/useToggle";
import { RoadmapContext } from "@/context/RoadmapContext";

const MenuRoadmapStep = ({ stepId }: { stepId: string }) => {
	const { currentState: menuOpen, toggle: openMenu } = useToggle(false);
	const { deleteRoadmapStep } = useContext(RoadmapContext);

	return (
		<div className="relative h-[24px]">
			{menuOpen ? (
				<div className="absolute -left-24 top-4 flex flex-col gap-2 bg-white border border-grey-primary p-2 shadow-lg rounded-md">
					<button
						className="w-24 bg-red-100 border rounded-md text-red-500"
						onClick={() => deleteRoadmapStep(stepId)}
					>
						Delete step
					</button>
				</div>
			) : null}

			<button onClick={openMenu}>{MENU_ICON}</button>
		</div>
	);
};

export default MenuRoadmapStep;
