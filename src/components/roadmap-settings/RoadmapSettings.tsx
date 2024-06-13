"use client";

import { RoadmapContext } from "@/context/RoadmapContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const RoadmapSettings = () => {
	const { activeRoadmap, deleteRoadmap } = useContext(RoadmapContext);
	const { push } = useRouter();

	const handleDeleteRoadmap = () => {
		if (activeRoadmap) {
			deleteRoadmap(activeRoadmap?.id);
			push("/");
		}
	};

	return (
		<div className="p-6">
			<h2 className="font-semibold text-3xl my-2">Roadmap settings</h2>

			<div className="mt-8">
				<h3 className="text-[20px] sm:text-[24px]">
					Delete {activeRoadmap?.title} roadmap?
				</h3>
				<button
					className="h-[40px] mt-2 px-12 text-[20px] font-medium rounded-sm bg-red-700 hover:bg-red-600 text-white transition-all"
					onClick={handleDeleteRoadmap}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default RoadmapSettings;
