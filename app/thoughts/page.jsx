import IndexItem from "@/app/ui/modules/blog/IndexItem";
import getPostMetadata from "@/app/utils/get-post-metadata";
import Header from "@/app/ui/modules/Header";

export default function Home() {
	const postMetaData = getPostMetadata('posts');
	return (
		<>
			<Header location="blog" />
			<main className="main">
				{
					postMetaData.map((post, postIndex) => (
						<IndexItem key={postIndex} post={post} location='indexMain' />
					))
				}
			</main>
		</>
  	);
}