import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css'
import PostFilter from "./components/PostFilter";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', body: 'bbbb'},
        {id: 2, title: 'ccc', body: 'cccc'},
        {id: 3, title: 'bbbb', body: 'aaaaaa'}
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        // console.log('отработала функция сортировки');
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {sortedAndSearchedPosts.length > 0
                ?
                <PostList remove={removePost}
                          posts={sortedAndSearchedPosts}
                          title="Посты про JS"
                />
                :
                <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
            }
        </div>
    );
}
