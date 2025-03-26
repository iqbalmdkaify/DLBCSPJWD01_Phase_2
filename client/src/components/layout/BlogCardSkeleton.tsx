import ContentLoader from "react-content-loader";

const BlogCardSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 400 300"
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full"
    >
      {/* Image placeholder */}
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="180" />

      {/* Title */}
      <rect x="0" y="190" rx="5" ry="5" width="70%" height="20" />

      {/* Author */}
      <rect x="0" y="220" rx="5" ry="5" width="40%" height="15" />

      {/* Date */}
      <rect x="0" y="245" rx="5" ry="5" width="30%" height="15" />
    </ContentLoader>
  )
}

export default BlogCardSkeleton