import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from "axios";
import {useState, useEffect}from 'react';
import {useLocation} from "react-router";

import './home.css';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(async ()=>{
        try {
            const res = await axios.get("/posts"+ search)
            setPosts(res.data);
        } catch (error) {
            console.log(error)
        }
    }, [posts, search])
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
