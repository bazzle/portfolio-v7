import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from './ArticleMain.module.scss';
import PostImage from "../PostImage";
import BrowserFrame from "@/app/ui/components/BrowserFrame";

function ArticleMain({ bodyContent }) {
	const elems = { Link, PostImage, BrowserFrame }
	return (
		<div className={styles.articleMain}>
				<div className="content-container">
						<div className={styles.articleMain__body}>
							<MDXRemote source={bodyContent} components={elems} />
						</div>
				</div>
		</div>
	);
}

export default ArticleMain;
