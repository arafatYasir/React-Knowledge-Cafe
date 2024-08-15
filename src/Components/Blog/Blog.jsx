import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover} = blog;
    return (
        <div>
            <h2 className="text-2xl">{title}</h2>
            <img className='w-[440px]' src={cover} alt="" />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};
export default Blog;