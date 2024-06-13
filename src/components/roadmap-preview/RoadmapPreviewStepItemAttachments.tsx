import React, { useEffect, useState } from "react";
import {
	FILE_ICON,
	IMAGE_ICON,
	VIDEO_ICON,
} from "../../../public/icons/roadmapSteps";

const RoadmapPreviewStepItemAttachments = ({
	attachments,
}: {
	attachments: File[];
}) => {
	const initialAttachments = {
		images: { count: 0 },
		videos: { count: 0 },
		files: { count: 0 },
	};

	const [orderedAttachments, setOrderedAttachments] =
		useState<Record<string, { count: number }>>(initialAttachments);

	useEffect(() => {
		const newOrderedAttachments = { ...initialAttachments };

		attachments.forEach(attachment => {
			if (attachment.type.includes("image")) {
				newOrderedAttachments.images.count += 1;
			} else if (attachment.type.includes("video")) {
				newOrderedAttachments.videos.count += 1;
			} else {
				newOrderedAttachments.files.count += 1;
			}
		});

		setOrderedAttachments(newOrderedAttachments);
	}, [attachments]);

	return (
		<div className="flex gap-2 [&>div]:flex-jc-c [&>div]:gap-1 [&>div>svg]:w-[12px] ml-2">
			{Object.entries(orderedAttachments).map(([key, { count }]) => {
				if (count > 0) {
					if (key === "images") {
						return (
							<div key={key}>
								{IMAGE_ICON} {count}
							</div>
						);
					} else if (key === "videos") {
						return (
							<div key={key}>
								{VIDEO_ICON} {count}
							</div>
						);
					} else if (key === "files") {
						return (
							<div key={key}>
								{FILE_ICON} {count}
							</div>
						);
					}
				}
				return null;
			})}
		</div>
	);
};

export default RoadmapPreviewStepItemAttachments;
