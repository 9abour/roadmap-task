"use client";

import { SidebarLinkItemProps } from "@/components/sidebar/types/index.types";
import { RoadmapContext } from "@/context/RoadmapContext";
import PathnameHelper from "@/helpers/pathname.helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";

const SidebarLinkItem = ({
	href,
	icon,
	customStyles,
}: SidebarLinkItemProps) => {
	const pathname = usePathname();
	const lastPathname = PathnameHelper.getLastPathname(pathname);
	const hrefLastPathname = PathnameHelper.getLastPathname(href);
	const active = lastPathname === hrefLastPathname;

	const { activeRoadmap } = useContext(RoadmapContext);

	const activeBgColor = active ? activeRoadmap?.styles.mainColor : "";
	const hoverBgColor = activeRoadmap?.styles.mainColor;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<li
			className={`w-[48px] h-[48px] rounded-full ${customStyles}`}
			style={{
				backgroundColor: active ? activeBgColor : isHovered ? hoverBgColor : "",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link
				className={`w-full h-full rounded-full flex-jc-c hover:text-white ${
					active ? "text-white" : "text-primary-dark"
				}`}
				href={href}
			>
				{icon}
			</Link>
		</li>
	);
};

export default SidebarLinkItem;
