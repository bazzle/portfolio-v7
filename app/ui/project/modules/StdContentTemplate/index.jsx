import Section from '@/app/ui/project/components/Section'

function StdContentTemplate({
	title,
	bodyContent,
	deepMt,
	deepMb,
	deepMbLine,
	id,
	line,
}) {
	const optionalProps = {
		...(deepMt ? { deepMt: true } : {}),
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
