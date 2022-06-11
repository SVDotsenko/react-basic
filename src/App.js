import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css'

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ?
                <PostList remove={removePost}
                          posts={posts}
                          title="Посты про JS"
                />
                :
                <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
            }
        </div>
    );
}
