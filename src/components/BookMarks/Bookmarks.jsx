import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 m-4 rounded-lg">
            <div>
                <h3 className="text-4xl m-4 p-4 text-center border-2 border-purple-600 bg-purple-50 rounded text-[#6047EC]">Reading Time: {readingTime}</h3>
            </div>
           <h1 className="text-3xl m-4 p-4 text-center">Bookmarked Blog: {bookmarks.length}</h1>
           {
            bookmarks.map((bookmark, idx) => 
                <Bookmark key={idx}  bookmark={bookmark}
                ></Bookmark>
            )
           }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;