import { Outfit } from "next/font/google";
import "./globals.css";
import { Children } from "@/types/index.types";
import RoadmapContextProvider from "@/context/RoadmapContext";
import PathnameLayout from "@/components/layouts/public-layout/PathnameLayout";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Roadmap",
	description: "Roadmap description",
	icons: {
		icon: "../../public/roadmap-icon.svg",
	},
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<RoadmapContextProvider>
					<PathnameLayout>{children}</PathnameLayout>
				</RoadmapContextProvider>
			</body>
		</html>
	);
}
