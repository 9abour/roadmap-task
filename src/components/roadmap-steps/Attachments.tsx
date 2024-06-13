import FileUploader from "@/components/roadmap-steps/file-upload/components/FileUploader";
import { RoadmapContext } from "@/context/RoadmapContext";
import React, { useContext, useEffect, useState } from "react";

const Attachments = ({ stepId }: { stepId: string }) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const { updateRoadmapStepsData } = useContext(RoadmapContext);

	useEffect(() => {
		updateRoadmapStepsData(stepId, selectedFiles, "attachments");
	}, [selectedFiles]);

	return (
		<div>
			<FileUploader
				selectedFiles={selectedFiles}
				setSelectedFiles={setSelectedFiles}
				stepId={stepId}
			/>
		</div>
	);
};

export default Attachments;
