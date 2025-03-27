import ContentLoader from "react-content-loader";

const BlogCardSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 1582 1722"
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full"
    >
      {/* Image placeholder */}
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="1400" />

      {/* Author */}
      <rect
        x={(1582 - 600) / 2}
        y="1450"
        rx="5"
        ry="5"
        width="600"
        height="50"
      />

      {/* Title */}
      <rect
        x={(1582 - 1100) / 2}
        y="1530"
        rx="5"
        ry="5"
        width="1100"
        height="100"
      />

      {/* Date */}
      <rect
        x={(1782 - 450) / 2}
        y="1650"
        rx="5"
        ry="5"
        width="250"
        height="50"
      />
    </ContentLoader>
  )
}

const BlogViewSkeleton = () => {
  return <ContentLoader
    viewBox="0 0 1582 1722"
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="w-full"
  >
    {/* Date */}
    <rect
      x={(1622 - 450) / 2}
      y="0"
      rx="5"
      ry="5"
      width="450"
      height="50"
    />

    {/* Title */}
    <rect
      x={(1282 - 1100) / 2}
      y="130"
      rx="5"
      ry="5"
      width="1400"
      height="200"
    />

    {/* Image placeholder */}
    <rect x="0" y="520" rx="10" ry="10" width="100%" height="1400" />

    {/* Content */}
    <rect
      x={(1582 - 600) / 2}
      y="1650"
      rx="5"
      ry="5"
      width="600"
      height="50"
    />
  </ContentLoader>
}

export {
  BlogCardSkeleton,
  BlogViewSkeleton,
}