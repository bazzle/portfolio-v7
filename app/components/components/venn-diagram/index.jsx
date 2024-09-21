import styles from './style.module.scss';
import LoopActions from './loop-actions.jsx';

function VennDiagram() {

    return (
        <div className={styles.venn_diagram}>
			<div className={styles.text_overlay}>
				<span>Space where I can</span>
				<span>{<LoopActions />}</span>
			</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="255"
                viewBox="0 0 300 255"
                fill="none"
            >
                <g clipPath="url(#clip0_0_1)">
                    <circle cx="186.282" cy="140.384" r="112.718" stroke="#9AF3FF" strokeWidth="2" />
                    <text fill="#9AF3FF" xmlSpace="preserve">
                        <tspan x="155.957" y="10.6979">Development</tspan>
                    </text>
                    <circle cx="113.718" cy="140.384" r="112.718" stroke="#FFAAAA" strokeWidth="2" />
                    <text fill="#FFAAAA" xmlSpace="preserve">
                        <tspan x="86.6426" y="10.6979">Design</tspan>
                    </text>
                </g>
                <defs>
                    <clipPath id="clip0_0_1">
                        <rect width="1200" height="3003.34" fill="white" transform="translate(-100 -1564)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default VennDiagram;