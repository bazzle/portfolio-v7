'use client'

import BrowserMobile from './browserMobile';
import BrowserDesktop from './browserDesktop';
import Section from '@/app/components/components/Section/Section';
import BgShapes from '@/app/components/components/BgShapes/BgShapes';
import {workSamplesContent} from '@/app/content/bodyContent';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from 'next/image';

function WorkSamples(){

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const left = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -100]
	)
	const right = useTransform(
		scrollYProgress,
		[0, 1],
		[100, 0]
	)

	const someArray = ['item1', 'item2'];

	const images = {
		'image_bdo_dt' : <Image src="images/samples/bdo-dt.webp" alt="BDO" width="700" height="500"/>,
		'image_bdo_mob' : <Image src="images/samples/bdo-mob.webp" alt="NAO" width="284" height="500"/>,
		'image_bfi_dt' : <Image src="images/samples/bfi-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_chevening_dt' : <Image src="images/samples/chevening-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_chevening2_dt' : <Image src="images/samples/chevening2-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_nao_dt' : <Image src="images/samples/nao-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_nao_mob' : <Image src="images/samples/nao-mob.webp" alt="NAO" width="284" height="500"/>,
		'image_nao2_mob' : <Image src="images/samples/nao2-mob.webp" alt="NAO" width="284" height="500"/>,
		'image_nao2_dt' : <Image src="images/samples/nao2-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_nao3_dt' : <Image src="images/samples/nao3-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_ons_dt' : <Image src="images/samples/ons-dt.webp" alt="BDO" width="700" height="500"/>,
		'image_ua_dt' : <Image src="images/samples/ua-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_ua2_dt' : <Image src="images/samples/ua2-dt.webp" alt="NAO" width="700" height="500"/>,
		'image_ua_mob' : <Image src="images/samples/ua-mob.webp" alt="NAO" width="284" height="500"/>,
	}

    return(
		<Section id="work-samples" noLine shallow>
			<div ref={ref}>
				<div className="workSamples">
					<div className="workSamples__titleSection">
						<h2 className="workSamples__titleSection_text">{workSamplesContent.title}</h2>
					</div>
					<div className="main">
						<motion.div className="strip" style={{ left }}>
							<BrowserDesktop
								src={images.image_bdo_dt.props.src}
								alt={images.image_bdo_dt.props.alt}
							/>
							<BrowserMobile
								src={images.image_bdo_mob.props.src}
								alt={images.image_bdo_mob.props.alt}
							/>
							<BrowserDesktop
								src={images.image_bfi_dt.props.src}
								alt={images.image_bfi_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_chevening_dt.props.src}
								alt={images.image_chevening_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_chevening2_dt.props.src}
								alt={images.image_chevening2_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_nao_dt.props.src}
								alt={images.image_nao_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_bfi_dt.props.src}
								alt={images.image_bfi_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_chevening_dt.props.src}
								alt={images.image_chevening_dt.props.alt}
							/>
						</motion.div>
						<motion.div className="strip" style={{ right }} >
							<BrowserDesktop
								src={images.image_nao2_dt.props.src}
								alt={images.image_nao2_dt.props.alt}
							/>
							<BrowserMobile
								src={images.image_nao2_mob.props.src}
								alt={images.image_nao2_mob.props.alt}
							/>
							<BrowserDesktop
								src={images.image_nao3_dt.props.src}
								alt={images.image_nao3_dt.props.alt}
							/>
							<BrowserMobile
								src={images.image_nao_mob.props.src}
								alt={images.image_nao_mob.props.alt}
							/>
							<BrowserDesktop
								src={images.image_ons_dt.props.src}
								alt={images.image_ons_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_ua_dt.props.src}
								alt={images.image_ua_dt.props.alt}
							/>
							<BrowserDesktop
								src={images.image_ua2_dt.props.src}
								alt={images.image_ua2_dt.props.alt}
							/>
							<BrowserMobile
								src={images.image_nao2_mob.props.src}
								alt={images.image_nao2_mob.props.alt}
							/>
							<BrowserMobile
								src={images.image_nao_mob.props.src}
								alt={images.image_nao_mob.props.alt}
							/>
						</motion.div>
					</div>
					<BgShapes variant="3" />
				</div>
			</div>
		</Section>
    )
}

export default WorkSamples;