'use client'
import Image from 'next/image'
import styles from './PostImage.module.scss'
import { useEffect, useRef, useState } from 'react'

export default function PostImage({ src, alt, caption, extended }) {
	const classString = `${styles.postImage} ${extended && styles.extended}`
	const imagePath = '/images/posts/'
	return (
		<figure className={classString}>
			<Image
				className={styles.postImage__image}
				src={`${imagePath}${src}`}
				alt={alt}
				width={1200}
				height={800}
				loading="lazy"
			/>
			{caption && (
				<figcaption className={styles.postImage__caption}>{caption}</figcaption>
			)}
		</figure>
	)
}
