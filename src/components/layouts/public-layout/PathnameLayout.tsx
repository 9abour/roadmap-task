"use client";

import PathnameHelper from "@/helpers/pathname.helper";
import { Children } from "@/types/index.types";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";

const PublicLayout = dynamic(
	() => import("@/components/layouts/public-layout/PublicLayout"),
	{ ssr: false }
);
const RoadmapLayout = dynamic(
	() => import("@/components/layouts/roadmap-layout/RoadmapLayout"),
	{ ssr: false }
);

const PathnameLayout = ({ children }: Children) => {
	const pathname = usePathname();

	return (
		<div>
			{PathnameHelper.isHomePage(pathname) ? (
				<PublicLayout>{children}</PublicLayout>
			) : (
				<RoadmapLayout>{children}</RoadmapLayout>
			)}
		</div>
	);
};

export default PathnameLayout;
