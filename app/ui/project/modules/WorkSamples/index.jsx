'use client'

import Section from '@/app/ui/project/components/Section'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './WorkSamples.module.scss'

function WorkSamples({ id }) {
	const optionalId = id ? { id } : {}

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const left = useTransform(scrollYProgress, [0, 1], [0, -100])
	const right = useTransform(scrollYProgress, [0, 1], [100, 0])

	const someArray = ['item1', 'item2']

	const images = {
		image_bdo_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/bdo-dt.webp"
					alt="BDO"
					width="350"
					height="250"
				/>
			),
		},
		image_bdo_mob: {
			slug: null,
			element: (
				<Image
					src="/images/samples/bdo-mob.webp"
					alt="NAO"
					width="142"
					height="250"
				/>
			),
		},
		image_bfi_dt: {
			slug: '2025-01-24',
			element: (
				<Image
					src="/images/samples/bfi-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_chevening_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/chevening-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_chevening2_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/chevening2-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_nao_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/nao-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_nao_mob: {
			slug: null,
			element: (
				<Image
					src="/images/samples/nao-mob.webp"
					alt="NAO"
					width="142"
					height="250"
				/>
			),
		},
		image_nao2_mob: {
			slug: null,
			element: (
				<Image
					src="/images/samples/nao2-mob.webp"
					alt="NAO"
					width="142"
					height="250"
				/>
			),
		},
		image_nao2_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/nao2-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_nao3_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/nao3-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_ons_dt: {
			slug: null,
			element: (
				<Image
					src="/images/samples/ons-dt.webp"
					alt="BDO"
					width="350"
					height="250"
				/>
			),
		},
		image_ua_dt: {
			slug: '2025-01-26',
			element: (
				<Image
					src="/images/samples/ua-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_ua2_dt: {
			slug: '2025-01-26',
			element: (
				<Image
					src="/images/samples/ua2-dt.webp"
					alt="NAO"
					width="350"
					height="250"
				/>
			),
		},
		image_ua_mob: {
			slug: '2025-01-26',
			element: (
				<Image
					src="/images/samples/ua-mob.webp"
					alt="NAO"
					width="142"
					height="250"
				/>
			),
		},
	}

	return (
		<Section
			moduleClassname={styles.workSamples}
			layout="toEdges"
		>
			<div ref={ref}>
				<div className={styles.workSamples}>
					<div className={styles.workSamples__main}>
						<motion.div
							className={styles.workSamples__strip}
							style={{ left }}
						>
							<div className={styles.workSamples__sample}>
								{images.image_bdo_dt.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_bdo_mob.element}
							</div>
							<Link
								href={`/thoughts/${images.image_bfi_dt.slug}`}
								className={styles.workSamples__sample}
							>
								{images.image_bfi_dt.element}
							</Link>
							<div className={styles.workSamples__sample}>
								{images.image_chevening_dt.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_chevening2_dt.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_nao_dt.element}
							</div>
							<Link
								href={`/thoughts/${images.image_bfi_dt.slug}`}
								className={styles.workSamples__sample}
							>
								{images.image_bfi_dt.element}
							</Link>
							<div className={styles.workSamples__sample}>
								{images.image_chevening_dt.element}
							</div>
						</motion.div>
						<motion.div
							className={styles.workSamples__strip}
							style={{ right }}
						>
							<div className={styles.workSamples__sample}>
								{images.image_nao2_dt.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_nao2_mob.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_nao3_dt.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_nao_mob.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_ons_dt.element}
							</div>
							<Link
								href={`/thoughts/${images.image_ua_dt.slug}`}
								className={styles.workSamples__sample}
							>
								{images.image_ua_dt.element}
							</Link>
							<Link
								href={`/thoughts/${images.image_ua2_dt.slug}`}
								className={styles.workSamples__sample}
							>
								{images.image_ua2_dt.element}
							</Link>
							<div className={styles.workSamples__sample}>
								{images.image_nao2_mob.element}
							</div>
							<div className={styles.workSamples__sample}>
								{images.image_nao_mob.element}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default WorkSamples
