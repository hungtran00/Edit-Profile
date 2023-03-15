import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/postSlice';
import './post.css'
import Input from '../InputFields/Input';

const MakePost = (props) => {
    const {setOpen} = props;
    const [title,setTitle] = useState("Add a title")
    const dispatch = useDispatch();
    const [desc,setDesc] = useState("Add some dexcriptions")
    const tags = ["None","NSFW","Mood","Quotes","Shitpost"]
    const [selectIndex,setSelectIndex] = useState(0)
    const handlePost = ()=>{
        setOpen(false)
        const newPost = {
            title: title,
            description:desc,
            tag: selectIndex
        };
        dispatch(createPost(newPost))
    }
    return (
        <section className='makepost-container'>
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input inputType= "textarea" data={title} setData={setTitle} abe="Title" classStyle="makepost-title"/>
            <Input inputType= "textarea" data={desc} setData={setDesc} abe="Description" classStyle="makepost-desc"/>
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag,indx)=>{
                    return(
                        <button key={indx} className={`${selectIndex === indx ? `makepost-tags-selected` : `makepost-tags-${tag}` }`}
                        onClick={()=>setSelectIndex(indx)}
                    >
                        {tag}
                        </button>
                    )
                })}
            </div>
        </section>
    );
};

export default MakePost;