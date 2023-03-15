
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import EditPage from './Components/Header/Edit/EditPage';
import Header from './Components/Header/Header';
import MakePost from './Components/Post/MakePost';
import Post from './Components/Post/Post';

function App() {
  const [isEdit, setEdit] = useState(false)
  const [isOpenPost,setOpen] = useState(false)
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
        <Header setEdit={setEdit}/>
        <div className='posts-container'>
          <Post/>
        </div>
        <Footer isOpenPost={isOpenPost} setOpen={setOpen}/>
        </>
      ) : (
        <>
        <Header setEdit={setEdit}/>
        <MakePost setOpen={setOpen}/>
        </>
        
      )
    }
    </div>
  );
}

export default App;
