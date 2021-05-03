//our-domain.com/[newsId]
import { useRouter } from "next/router";
function NewsDetail() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>{newsId} Detail Page</h1>;
}

export default NewsDetail;
