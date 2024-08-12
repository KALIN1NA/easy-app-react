import React, {useState, useRef} from "react";
import "../src/styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'js', body: 'description'},
        {id: 2, title: 'js', body: 'description'},
        {id: 3, title: 'js', body: 'description'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort"
                    options={[
                        {value: 'title', name: 'about name'},
                        {value: 'body', name: 'about description'},
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="List of post 1"/>
                :
                <h2 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h2>
            }
        </div>
    );
}

export default App;
