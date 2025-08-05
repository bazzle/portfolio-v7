import Section from '@/app/ui/components/Section';

function TextStandout({content, line, deepMb, deepMbLine}){

	const optionalProps = {
		...(line ? { line: true } : {}),
		...(deepMb ? { deepMb: true } : {}),
		...(deepMbLine ? { deepMbLine: true } : {}),
	}

	return(
		<Section
			moduleClassname="TextStandout"
			layout="fullWidth"
			{...optionalProps}
			>
			<blockquote className="textStandout__blockquote">
				<p className="textStandout__blockquote__text">
					{content}
				</p>
			</blockquote>
		</Section>
	)
}

export default TextStandout;