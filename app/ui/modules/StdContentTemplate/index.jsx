import Section from '@/app/ui/components/Section';


function StdContentTemplate({title, bodyContent, deepMb, deepMbLine, id}){

	const optionalProps = {
		...(deepMb ? { deepMb: true } : {}),
		...(deepMbLine ? { deepMbLine: true } : {}),
		...(id ? { id: id } : {})
	}

	return(
		<Section
			heading={title}
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