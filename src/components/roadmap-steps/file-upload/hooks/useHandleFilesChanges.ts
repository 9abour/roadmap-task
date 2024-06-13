import { useHandleFilesChangesArgs } from "@/components/roadmap-steps/file-upload/types/index.types";
import { ChangeEvent, DragEvent } from "react";

const useHandleFilesChanges = ({
	selectedFiles,
	setSelectedFiles,
}: useHandleFilesChangesArgs) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files) {
			const newFiles = [...selectedFiles, ...Array.from(files)];

			setSelectedFiles(newFiles);
		}
	};

	return {
		selectedFiles,
		handleFileChange,
	};
};

export default useHandleFilesChanges;
