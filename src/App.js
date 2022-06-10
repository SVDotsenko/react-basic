import './styles/App.css'
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ]);

    const [title, setTitle] = useState('');
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(bodyInputRef.current.value);
    }

    return (
        <div className="App">
            <form>
                {/*управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="название поста"
                />
                {/*не управляемый компонент*/}
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="описание поста"
                />
                <MyButton onClick={addNewPost}>создать пост</MyButton>
            </form>
            <PostList posts={posts} title="список постов про JS"/>
        </div>
    );
}
