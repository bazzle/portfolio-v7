import IndexItem from "@/app/ui/modules/blog/IndexItem";
import getPostMetadata from "@/app/utils/get-post-metadata";

export default function Home() {
	const postMetaData = getPostMetadata('posts');
	return (
		<main className="main">
			<div className="content-container">
				{
					postMetaData.map((post, postIndex) => (
						<IndexItem key={postIndex} post={post}/>
					))
				}
			</div>
		</main>
  	);
}