import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import { RoadmapContext } from "@/context/RoadmapContext";
import React, { useContext, useState } from "react";

const CreateRoadmapForm = () => {
	const { addRoadmap } = useContext(RoadmapContext);

	const {
		value: roadmapName,
		changeValue: changeRoadmapName,
		reset: resetRoadmapName,
	} = useInput("");
	const {
		value: roadmapDescription,
		changeValue: changeRoadmapDescription,
		reset: resetRoadmapDescription,
	} = useInput("");
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const handleAddRoadmap = () => {
		if (!roadmapName.length) {
			setError(true);
			setErrorMsg("Roadmap name is required");
			return;
		} else {
			addRoadmap(roadmapName, roadmapDescription);
			setError(false);
			setErrorMsg("");
			resetRoadmapName();
			resetRoadmapDescription();
		}
	};

	return (
		<>
			<h2 className="font-semibold text-3xl mb-4">Create roadmap</h2>

			<form>
				<FormInput
					type="text"
					name="roadmapName"
					placeholder="Roadmap name"
					label="Roadmap name"
					required
					value={roadmapName}
					handleChangeValue={changeRoadmapName}
					customStyles={error ? "border-red-500" : ""}
				/>

				{error ? <p className="text-red-500">{errorMsg}</p> : null}

				<FormInput
					type="textarea"
					name="roadmapDescription"
					placeholder="Roadmap description"
					label="Roadmap description"
					value={roadmapDescription}
					handleChangeValue={changeRoadmapDescription}
					customStyles="mt-3"
				/>

				<button
					className="w-full bg-primary-ultramarineBlue text-white px-12 py-2 rounded-md mt-4 text-2xl font-semibold"
					type="button"
					onClick={handleAddRoadmap}
				>
					Create
				</button>
			</form>
		</>
	);
};

export default CreateRoadmapForm;
