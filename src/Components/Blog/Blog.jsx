import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, addToBookmark, markAsRead}) => {
    const {title, cover, reading_time, author_image, author, posted_date, hashtags} = blog;

    return (
        <div className='mb-20'>
            <img className='w-11/12 mb-8' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_image} alt="" />
                    <div>
                        <h2 className="text-xl font-bold">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='text-xl'>0{reading_time} min read</span>
                    <button onClick={() => addToBookmark(blog)} className='text-xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-5">{title}</h2>
            <p>
                {
                    hashtags.map((tag, indx) => <span key={indx}><a href="">#{tag}</a> </span>)
                }
            </p>
            <button className='text-purple-800 underline font-bold' onClick={() => markAsRead(reading_time)}>Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addToBookmark: PropTypes.func
};
export default Blog;