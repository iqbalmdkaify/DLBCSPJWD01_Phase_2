import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../types/Global";
import { useBlogData } from "../Provider/BlogDataProvider";
import { BlogViewSkeleton } from "../src/components/layout/Skeleton";
const BlogPreview = lazy(() => import("../src/components/common/BlogView"));

const BlogPage = () => {
  const { getBlogsById } = useBlogData();

  const { id } = useParams();
  const [data, setData] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      throw new Error("Blog ID is required");
      return;
    }

    getBlogsById(id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.error("Error fetching blog:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="md:px-[10%] lg:px-[22%]">
      {loading ? <BlogViewSkeleton /> :
        <Suspense fallback={<BlogViewSkeleton />} >
          <BlogPreview data={data} />
        </Suspense>
      }
    </div>
  );
};

export default BlogPage;
