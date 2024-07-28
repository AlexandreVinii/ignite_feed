import React from 'react';

interface PostProps {
    // Define the props for the Post component here
    content: string;
    author: string;
}

export const Post: React.FC<PostProps> = (props) => {
    // Implement the component logic here
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
            {/* Render the content of the Post component here */}
        </div>
    );
};
// export default Post;