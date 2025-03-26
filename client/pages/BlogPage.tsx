import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../types/Global";
import { useBlogData } from "../Provider/BlogDataProvider";
import BlogCardSkeleton from "../src/components/layout/BlogCardSkeleton";
const BlogPreview = lazy(() => import("../src/components/common/BlogView"));

const BlogPage = () => {
  const { getBlogsById } = useBlogData();
  const { id } = useParams();
  const [data, setData] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      console.error("Blog ID is required");
      return;
    }

    getBlogsById(id)
      .then((res) => {
        console.log("Blog data: ", res);
        setData(res);
      })
      .catch((err) => console.error("Error fetching blog:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="lg:px-[22%]">
      {loading ? <BlogCardSkeleton /> : <BlogPreview data={data} />}
    </div>
  );
};

export default BlogPage;
