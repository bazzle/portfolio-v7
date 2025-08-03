import Section from '@/app/ui/components/Section';


function StdContentTemplate({title, bodyContent, deepMb, deepMbLine}){

	const optionalProps = {
		...(deepMb ? { deepMb: true } : {}),
		...(deepMbLine ? { deepMbLine: true } : {})
	}

	return(
		<Section
			heading={title}
			id="welcome"
			layout="2col"
			moduleClassname="TextStandout"
			noMinHeight
			{...optionalProps}
		>
			{bodyContent}
		</Section>
	)
}

export default StdContentTemplate;