"use client";

import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import React, { useContext, useEffect } from "react";
import { RoadmapContext } from "@/context/RoadmapContext";
import RoadmapStyle from "@/components/roadmap-info/RoadmapStyle";
import RoadmapInfoSelectItems from "@/components/roadmap-info/RoadmapInfoSelectItems";

const RoadmapInfo = () => {
	const { activeRoadmap, updateRoadmapData } = useContext(RoadmapContext);

	const { value: roadmapName, changeValue: changeRoadmapName } = useInput(
		activeRoadmap?.title || ""
	);
	const { value: roadmapDescription, changeValue: changeRoadmapDescription } =
		useInput(activeRoadmap?.description || "");

	useEffect(() => {
		updateRoadmapData(roadmapName, "title");
	}, [roadmapName]);

	useEffect(() => {
		updateRoadmapData(roadmapDescription, "description");
	}, [roadmapDescription]);

	return (
		<div className="p-4 sm:p-6 bg-[#f6f6f6]">
			<h2 className="font-semibold text-xl sm:text-3xl my-2">
				Roadmap Information & style
			</h2>

			<form className="grid grid-cols-4 gap-1 sm:gap-4 mt-6">
				<FormInput
					type="text"
					name="roadmapName"
					label="Roadmap name"
					placeholder="Roadmap name"
					required={true}
					value={roadmapName}
					handleChangeValue={changeRoadmapName}
					customStyles="col-span-4"
				/>

				<RoadmapInfoSelectItems />

				<FormInput
					type="textarea"
					name="roadmapDescription"
					label="Roadmap description"
					placeholder="Roadmap description"
					required={true}
					value={roadmapDescription}
					handleChangeValue={changeRoadmapDescription}
					customStyles="col-span-4"
				/>
			</form>

			<h2 className="font-semibold text-xl sm:text-3xl my-4">Roadmap style</h2>
			<RoadmapStyle />
		</div>
	);
};

export default RoadmapInfo;
