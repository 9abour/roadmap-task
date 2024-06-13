"use client";

import RoadmapPreview from "@/components/roadmap-preview/RoadmapPreview";
import Sidebar from "@/components/sidebar/Sidebar";
import { RoadmapContext } from "@/context/RoadmapContext";
import React, { useContext, useEffect } from "react";
import { SAVE_ICON } from "../../../../public/icons/roadmapSteps";
import { NAVBAR_MENU_ICON } from "../../../../public/icons/roadmapPreview";
import { Children } from "@/types/index.types";
import { useRouter } from "next/navigation";

const RoadmapLayout = ({ children }: Children) => {
	const { activeRoadmap, roadmapList } = useContext(RoadmapContext);
	const { push } = useRouter();

	const mainColor = activeRoadmap?.styles.mainColor;

	useEffect(() => {
		if (!activeRoadmap) {
			push("/");
		}
	}, [activeRoadmap, roadmapList]);

	return (
		<div className="w-full flex">
			<Sidebar />

			<div className="w-full">
				<div className="h-[82px] flex-jb-c px-4 sm:px-6">
					<h3 className="text-md sm:text-[20px] text-[#181818]">
						<b>{activeRoadmap?.title}</b> Road Map
					</h3>

					<div className="flex-jc-c gap-2">
						<button
							style={{ backgroundColor: mainColor }}
							className="w-[100px] lg:w-[132px] h-[35px] lg:h-[40px] flex-jc-c gap-2 rounded-full text-white [&>svg]:fill-white"
						>
							{SAVE_ICON} Publish
						</button>
						<button className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] flex-jc-c border border-[#181818] rounded-full">
							{NAVBAR_MENU_ICON}
						</button>
					</div>
				</div>

				<div className="w-full h-[calc(100%-82px)] grid lg:grid-cols-2">
					{children}
					<RoadmapPreview />
				</div>
			</div>
		</div>
	);
};

export default RoadmapLayout;
