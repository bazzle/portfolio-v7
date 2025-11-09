import getPostMetadata from "@/app/utils/get-post-metadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"
import ArticleHero from "@/app/ui/modules/blog/Article/ArticleHero"
import ArticleMain from "@/app/ui/modules/blog/Article/ArticleMain"
import AfterArticle from "@/app/ui/modules/blog/Article/AfterArticle"
import Header from "@/app/ui/modules/Header"

function getPostContent(slug){
	const file = `./posts/${slug}.md`;
	const content = fs.readFileSync(file,'utf8');
	const matterResult = matter(content);
	return matterResult;
}

export const generateStaticParams = async () => {
	const posts = getPostMetadata('posts');
	return posts.map((post) => ({slug: post.slug}))
}

export async function generateMetadata({ params }){
	const { slug } = await params;
	const pageName = getPostContent(slug).data.title;
	const pageTitle = `${pageName} - My Thoughts`;
	const pageDescription = getPostContent(slug).data.excerpt;
	return{
		title: pageTitle,
		description: pageDescription,
	}
}

export const dynamicParams = false;

export default async function postPage({ params }) {
	const { slug } = await params;
	const post = getPostContent(slug)
	const rawDate = post.data.date;
	const title = post.data.title
	const excerpt = post.data.excerpt
	const bodyContent = post.content
	const postTags = post.data.tags
	
	return (
		<>
			<Header location="blog" />
			<main className="main">
				<article>
					<ArticleHero title={title} date={rawDate} tags={postTags} />
					<ArticleMain bodyContent={bodyContent} />
				</article>
				<AfterArticle title={title} excerpt={excerpt} />
			</main>
		</>
	)
}
