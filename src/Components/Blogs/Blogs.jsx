import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({addToBookmark, markAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} addToBookmark={addToBookmark} markAsRead={markAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    addToBookmark: PropTypes.func,
    markAsRead: PropTypes.func
}

export default Blogs;