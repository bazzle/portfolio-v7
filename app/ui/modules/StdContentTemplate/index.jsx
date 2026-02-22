import Section from '@/app/ui/components/Section';


function StdContentTemplate({title, bodyContent, deepMb, deepMbLine, id, addToNav}){

	const optionalProps = {
		...(deepMb ? { deepMb: true } : {}),
		...(deepMbLine ? { deepMbLine: true } : {}),
		...(id ? { id: id } : {}),
		...(addToNav ? { addToNav } : {})
	}

	return(
		<Section
			heading={title}
			layout="2col"
			noMinHeight
			{...optionalProps}
		>
			{bodyContent}
		</Section>
	)
}

export default StdContentTemplate;