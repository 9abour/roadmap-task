import { Colors } from "@/components/roadmap-info/types/index.types";
import { RoadmapContext } from "@/context/RoadmapContext";
import { useContext, useEffect, useState } from "react";

const initialColors: Colors = {
	mainColor: [
		{ color: "#C0C2C5", active: false },
		{ color: "#506CF0", active: true },
		{ color: "#FF9900", active: false },
		{ color: "#E0162E", active: false },
		{ color: "#42505C", active: false },
	],
	secondaryColor: [
		{ color: "#C0C2C5", active: false },
		{ color: "#506CF0", active: false },
		{ color: "#FF9900", active: true },
		{ color: "#E0162E", active: false },
		{ color: "#42505C", active: false },
	],
};

const useRoadmapStyle = () => {
	const [colors, setColors] = useState<Colors>(initialColors);
	const { updateRoadmapStyles, activeRoadmap } = useContext(RoadmapContext);

	const handleChangeColor = (keyColor: keyof Colors, newColor: string) => {
		const updatedColors = colors[keyColor].map(item => {
			if (item.color === newColor) {
				return {
					...item,
					active: true,
				};
			} else {
				return {
					...item,
					active: false,
				};
			}
		});

		setColors(prev => ({
			...prev,
			[keyColor]: updatedColors,
		}));
	};

	const resetStyles = () => {
		setColors(initialColors);
	};

	useEffect(() => {
		if (activeRoadmap) {
			const updatedRoadmapStylesData = Object.entries(colors).reduce(
				(acc: Record<string, string>, [key, arr]) => {
					const activeItem = arr.find(item => item.active);
					if (activeItem) {
						acc[key] = activeItem.color;
					}
					return acc;
				},
				{}
			);

			updateRoadmapStyles(updatedRoadmapStylesData, activeRoadmap.id);
		}
	}, [colors]);

	return { resetStyles, colors, handleChangeColor };
};

export { useRoadmapStyle };
