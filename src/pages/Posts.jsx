import React, { useState, useRef, useEffect } from "react";
import "../styles/App.css";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/Button/MyButton";
import { usePosts } from "../components/hooks/usePosts";
import PostServise from "../components/API/PostServise";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../components/hooks/useFetching";
import { getPageCount, getPagesArray } from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState("");

  const bodyInputRef = useRef();

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostServise.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <MyButton style={{ margin: "30px 0 0 0" }} onClick={() => setModal(true)}>
        create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>error occurred ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="post about JS"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
