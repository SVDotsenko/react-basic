import './styles/App.css'
import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ]);

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="название поста" />
                <MyInput type="text" placeholder="описание поста" />
                <MyButton disabled>создать пост</MyButton>
            </form>
            <PostList posts={posts} title="список постов про JS"/>
        </div>
    );
}
