import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', body: 'bbbb'},
        {id: 2, title: 'ccc', body: 'cccc'},
        {id: 3, title: 'bbbb', body: 'aaaaaa'}
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        // console.log('отработала функция сортировки');
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск...">
                </MyInput>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />
            </div>
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
