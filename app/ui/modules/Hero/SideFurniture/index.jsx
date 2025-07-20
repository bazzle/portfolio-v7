'use client'
import VerticalDots from "../VerticalDots";
import Image from "next/image";

function SideFurniture(){
	return(
		<div className="sideFurniture">
			<Image width="150" height="150" className="sideFurniture__profile" src="images/profile.webp" alt="Profile image" />
		</div>
	)
}

export default SideFurniture;