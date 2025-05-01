

function Typesheet(){
	return(
		<div>
			<div className="container">
				<div className="text-display mb">
					This is display
				</div>
				<div className="text-heading mb">
					This is heading
				</div>
				<div className="text-medium mb">
					This is medium
				</div>
				<div className="text-std mb">
					<p>This is standard default text.</p>
				</div>
				<div className="links mb">
					<a  className="text-link" href="#">This is a standalone text link</a>
				</div>
				<div className="text-intro mb">
					This is intro text, dxw is a digital agency that works with the public and third sectors.
				</div>
				<div className="text-body mb">
					<p>This is body. For body text of course. Align every x lines, I didn’t write too many notes about this, as it’s not that relevant to web I don’t think. For web it’s good as it’s hard to achieve a baseline grid on web. However it’s “nigh-on impossible” to enforce baseline grid or incremental leading. as web  is largely content managed, introducing lots of different non-text elements, modules with different paddings etc.</p>
				</div>
				<div className="text-blocky mb">
					This is text-blocky. For footnotes and that kinda stuff.
				</div>
				<div className="text-tiny mb">
					Tiny text, for small text, obviously.
				</div>
				<div className="text-miniscule mb">
					Miniscule text, only to be used in exceptional circumstances.
				</div>
			</div>
		</div>
	)
}

export default Typesheet;