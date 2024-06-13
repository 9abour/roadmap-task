import { RoadmapContext } from "@/context/RoadmapContext";
import Link from "next/link";
import React, { useContext } from "react";

const RoadmapList = () => {
	const { roadmapList } = useContext(RoadmapContext);

	return (
		<>
			<h2 className="font-semibold text-3xl mt-12">Roadmap list</h2>

			{roadmapList.length ? (
				<div className="flex-jc-c flex-wrap gap-4">
					{roadmapList.map(roadmap => (
						<div key={roadmap.id} className="card">
							<Link
								className="card1 border"
								href={`/roadmap/${roadmap.id}/steps`}
							>
								<p>{roadmap.title}</p>
								<p className="small line-clamp-4 mt-3">{roadmap.description}</p>
								<span className="go-corner">
									<div className="go-arrow">→</div>
								</span>
							</Link>
						</div>
					))}
				</div>
			) : (
				<p className="text-center my-4">No roadmap has been made</p>
			)}
		</>
	);
};

export default RoadmapList;
