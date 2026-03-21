import Section from '@/app/ui/components/Section'

function StdContentTemplate({
	title,
	bodyContent,
	deepMb,
	deepMbLine,
	id,
	line,
}) {
	const optionalProps = {
		...(deepMb ? { deepMb: true } : {}),
		...(deepMbLine ? { deepMbLine: true } : {}),
		...(line ? { line } : {}),
		...(id ? { id: id } : {}),
	}

	return (
		<Section heading={title} layout="2col" noMinHeight {...optionalProps}>
			{bodyContent}
		</Section>
	)
}

export default StdContentTemplate
