import React from "react";
import { useRenderPreviewFile } from "@/components/roadmap-steps/file-upload/hooks/useRenderPreviewFile";

const FileUploadedItem = ({ file }: { file: File }) => {
	const { renderPreviewFile } = useRenderPreviewFile(file);

	return (
		<li className="relative w-[64px] h-[64px] border-2 border-grey-primary flex-jc-c rounded-md">
			{renderPreviewFile()}
		</li>
	);
};

export default FileUploadedItem;
