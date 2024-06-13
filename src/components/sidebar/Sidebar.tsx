import React, { useContext } from "react";
import logo from "../../../public/roadmap-logo.png";
import Image from "next/image";
import Link from "next/link";
import SidebarLinkItem from "@/components/sidebar/SidebarLinkItem";
import {
	COLOR_ICON,
	EDIT_ICON,
	HELP_ICON,
	SETTINGS_ICON,
	TARIFF_ICON,
} from "../../../public/icons/sidebar";
import { RoadmapContext } from "@/context/RoadmapContext";

const Sidebar = () => {
	const { activeRoadmap } = useContext(RoadmapContext);

	return (
		<div className="max-w-[75px] w-[75px] h-screen border-r-2 border-grey-primary p-2 flex flex-col gap-14">
			<Link href="/">
				<Image src={logo} width={200} height={200} alt="logo" className="p-2" />
			</Link>
			<ul className="h-full flex flex-col items-center gap-4">
				<SidebarLinkItem
					href={`/roadmap/${activeRoadmap?.id}/steps`}
					icon={EDIT_ICON}
				/>
				<SidebarLinkItem
					href={`/roadmap/${activeRoadmap?.id}/info`}
					icon={COLOR_ICON}
				/>
				<SidebarLinkItem href="#" icon={TARIFF_ICON} />
				<SidebarLinkItem
					href={`/roadmap/${activeRoadmap?.id}/settings`}
					icon={SETTINGS_ICON}
				/>
				<SidebarLinkItem href="#" icon={HELP_ICON} customStyles={"mt-auto"} />
			</ul>
		</div>
	);
};

export default Sidebar;
