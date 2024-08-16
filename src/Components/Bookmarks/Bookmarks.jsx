import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h2>Reading time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, indx) => <Bookmark key={indx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;