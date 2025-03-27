import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blog } from "../types/Global";
import { useBlogData } from "../Provider/BlogDataProvider";
import { BlogViewSkeleton } from "../src/components/layout/Skeleton";
import { useAuth } from "../context/AuthProvider";
const BlogPreview = lazy(() => import("../src/components/common/BlogView"));

const BlogPage = () => {
  const { getBlogsById } = useBlogData();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      console.error("Blog ID is required");
      return;
    }

    if (!isAuth) {
      navigate("/auth/login");
      return
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
      {loading ? <BlogViewSkeleton /> :
        <Suspense fallback={<BlogViewSkeleton />} >
          <BlogPreview data={data} />
        </Suspense>
      }
    </div>
  );
};

export default BlogPage;
