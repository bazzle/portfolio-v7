'use client'

import LoopActions from './LoopActions.jsx';

function VennDiagram() {

	return (
		<div className="vennDiagram">
			<div className="vennDiagram__inner">
			<div className="vennDiagram__textOverlay">
				<span>Space where I can</span>
				<LoopActions />
			</div>
			<svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="255"
                viewBox="0 0 300 255"
                fill="none"
            >
                <g clipPath="url(#clip0_0_1)">
					<g className="svg__dev">
						<circle
						cx="186.282" cy="140.384" r="112.718" className="stroke-accent" strokeWidth="2" />
						<text className="fill-accent" xmlSpace="preserve">
							<tspan x="155.957" y="10.6979">Development</tspan>
						</text>
					</g>
					<g className="svg__design">
						<circle cx="113.718" cy="140.384" r="112.718" className="stroke-accent-alt" strokeWidth="2" />
						<text className="fill-accent-alt" xmlSpace="preserve">
							<tspan x="86.6426" y="10.6979">Design</tspan>
						</text>
					</g>
                </g>
                <defs>
                    <clipPath id="clip0_0_1">
                        <rect width="1200" height="3003.34" fill="white" transform="translate(-100 -1564)" />
                    </clipPath>
                </defs>
			</svg>
			</div>
		</div>
	);
}

export default VennDiagram;