'use client'
import Image from 'next/image';
import styles from './PostImage.module.scss';
import { useEffect, useRef, useState } from 'react';


export default function PostImage({ src, alt, caption, extended }) {

	const imageEl = useRef(null);
	const figureEl = useRef(null);
	const [imageHeight, SetImageHeight] = useState(0);

	useEffect(() => {
		SetImageHeight(imageEl.current.clientHeight)
	},[imageEl])

	const classString = `${styles.postImage__image} ${extended && styles.extended}`
	return (
		<figure
			ref={figureEl}
			className={classString}
			style={{height: `${imageHeight}px`}}
		>
			<Image
				ref={imageEl}
				className={styles.postImage__image}
				src={src}
				alt={alt}
				width={1200}
				height={800}
			/>
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}
