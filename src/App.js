import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import FetchedPosts from "./components/fetchedPosts";


function App() {
  return (
    <div className='container pt-3'>
        <div className="row">
            <div className="col">
                <PostForm/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Синхронные посты</h2>
                <PostsList posts={[1,2,3,4,5]}/>
            </div>
            <div className="col">
                <h2>Асинхронные посты</h2>
                <FetchedPosts posts={[]}/>
            </div>
        </div>
    </div>
  );
}

export default App;
