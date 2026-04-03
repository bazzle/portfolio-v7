import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import styles from './ArticleMain.module.scss'
import PostImage from '../PostImage'
import BrowserFrame from '@/app/ui/project/components/BrowserFrame'
import ShowcaseViewer from '@/app/ui/project/components/ShowcaseViewer'
import Buttons from '@/app/ui/style-library/components/Buttons'
import Icons from '@/app/ui/style-library/misc/Icons'

function ArticleMain({ bodyContent }) {
	const elems = { Link, PostImage, BrowserFrame, ShowcaseViewer, Buttons, Icons }
	return (
		<div className={styles.articleMain}>
			<div className="content-container">
				<div className={styles.articleMain__body}>
					<MDXRemote source={bodyContent} components={elems} />
				</div>
			</div>
		</div>
	)
}

export default ArticleMain
