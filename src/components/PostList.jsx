import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return posts.length ? (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove}
                          number={index + 1}
                          post={post}
                          key={post.id}
                />
            )}
        </div>
    ) : (<h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>);
};

export default PostList;
