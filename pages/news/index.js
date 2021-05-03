//our-domain.com/news
import Link from "next/link";
function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is a great Framework.</Link>{" "}
        </li>
        <li>
          <Link href="/news/redux">Redux toolkit is awesome.</Link>{" "}
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
