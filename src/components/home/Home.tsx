"use client";

import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import CreateRoadmapForm from "@/components/home/CreateRoadmapForm";
import RoadmapList from "@/components/home/RoadmapList";
import React, { useContext } from "react";

const HomePage = () => {
	return (
		<div className="max-w-[1200px] mx-auto p-8">
			<RoadmapList />
			<HorizontalDivider
				height="h-[2px]"
				bgColor="bg-[#E0E0E0]"
				customStyles="my-12"
			/>
			<CreateRoadmapForm />
		</div>
	);
};

export default HomePage;
