import { formatDate } from '../../utils/blogUtils';
import defaultProfileImage from '../assets/images/profile-circle-svgrepo-com.svg';

export type TBlogProfileProps = {
  author: string;
  createdAt: string;
}

const BlogProfile = ({ author, createdAt }: TBlogProfileProps) => {
  return (
    <div className='blog-profile-container'>

      {/* Profile picture */}
      <div className='blog-profile-image-container'>
        <img src={defaultProfileImage} alt="Profile image" className='profile-image' />
      </div>

      <div className='blog-user-data'>
        <p>{author}</p>
        <p>{formatDate(createdAt)} &#x2022; 1 min read</p>
      </div>
    </div>
  )
}

export default BlogProfile