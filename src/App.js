import './css/App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import PostForm from "./components/PostForm";
import Comments from "./components/Comments";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";


const BaseURL = `https://jordan.ashton.fashion/api/goods/30/comments`
const BASE_URL = 'https://jordan.ashton.fashion/api/goods/30/comments'

function App() {
  const[posts, setPosts] = useState([]);
  const[query] = useState('?page=');
  const[page, setPage] = useState(1);
  const[pageQty, setPageQty] = useState(0);
  const[post, setPost] = useState({name: '', text: ''});
  const[modal, setModal] = useState(false);


    try {
        useEffect(() => {
            fetch(BASE_URL+`${query}${page}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setPosts(data.data);
                    setPageQty(data.last_page);
                    console.log(BASE_URL)
                })
        }, [query,page,post]);
    }catch (e ){
        alert(e)
    }


  const setNewPost = (props) => {
      setPost({...post, props});

      try {
          if (axios.post(BaseURL, props)
              .then((data) => {
                  console.log(data);
              })) {
              setModal(true);
              setTimeout(()=>{setModal(false)}, 3000);

          }

          fetch(BASE_URL+`${query}${page}`)
              .then((res) => res.json())
              .then((data) => {
                  console.log(data)
                  setPosts(data.data);
                  setPageQty(data.last_page);
              });


      }catch (e){
          alert(e)
      }
  }

  const setNewPage = (props) => {
        if (props === false){
            if (page < pageQty){
                setPage(page+1);

            }
        }else if (props === true){
            if (page > 1){
                setPage(page-1);
            }
        }else {
            setPage(pageQty);
        }
  }

  return (
    <div className="App">
        <PostForm
            pageQty={pageQty}
            setNewPost={setNewPost}
        />
        <Comments
            data={posts}
        />
        <Pagination
            pageQty={pageQty}
            setNewPage={setNewPage}
            page={page}
        />
        <Modal
            modal={modal}
        />
    </div>
  );
}

export default App;
