import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mt-6'>
                <div className='flex'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-3xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-2xl'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl btn hover:border-2'>
                        <CiBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mt-4 mb-4">{title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx} className='text-purple-700 mt-4'>
                        <a href=''> #{hash}</a>
                    </span>
                ))}
            </p>
            <button
                className='text-red-500 mt-4 p-4 rounded-xl hover:border-2 hover:border-blue-500'
                onClick={() => handleMarkAsRead(id, reading_time)}
            >
                Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
