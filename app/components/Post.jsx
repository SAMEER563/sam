'use client'
import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Post = ({post}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [postToEdit,setPostToEdit] = useState(post);
    const [openModalDelete,setOpenModalDelete] = useState(false);
    const handleEditSubmit =(e) => {
        e.preventDefault();
        axios.patch(`/api/posts/${post.id}`,postToEdit)
        .then((res) => {console.log(res)})
        .catch(err =>{console.log(err)})
        .finally(()=> {setOpenModalEdit(false);router.refresh()})         
    }
    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostToEdit(prevState => ({...prevState, [name]: value}));
    }  
    const handleDeletePost=(id) => {
        axios.delete(`/api/posts/${id}`)
        .then((res) => {console.log(res)})
        .catch(err =>{console.log(err)})
        .finally(()=> {setOpenModalDelete(false);router.refresh()})
    }          
    return(
        <li className='p-3 my-5 bg-slate-200' key={post.id}>
            <h1 className='text-2xl font-bold'>{post.name}</h1>
            <p>{post.description}</p>
            <div className='pt-5'>
                <button className='text-blue-700 mr-3' onClick={() => setOpenModalEdit(true)}>Edit</button> 
                <Modal modelOpen ={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form className='w-full' onSubmit={handleEditSubmit}>
                        <h1 className='text-2xl pb-3'>Add New Cuisine</h1>
                        <input 
                            type ="text"
                            placeholder='Name'
                            name ="name"
                            className='w-full p-2'
                            value={postToEdit.name || ""}
                            onChange={handleChange}
                        />
                        <input 
                            type ="text"
                            placeholder='Description'
                            name ="description"
                            className='w-full p-2 my-5'
                            value={postToEdit.description || ""}
                            onChange={handleChange}
                        />
                        <button type="submit" className='bg-blue-700 text-white px-5 py-2'>Save</button>
                        <button type="submit" className='bg-red-700 text-white px-5 py-2' onClick={() => setOpenModalEdit(false)}>Cancel</button>
                    </form> 
                </Modal>
                <button className='text-red-700 mr-3' onClick={() => setOpenModalDelete(true)} > Delete </button>
                <Modal modelOpen ={openModalDelete} setModalOpen={setOpenModalDelete}>
                    <h1 className='text-2xl pb-3'>Are you sure you want to delete it?</h1>
                    <div>
                        <button onClick={()=>handleDeletePost(post.id)} className='text-blue-700 font-bold mr-5'>YES</button>
                        <button onClick={() => setOpenModalDelete(false)} className='text-red-700 font-bold mr-5'>NO</button>
                    </div>
                </Modal> 
            </div>
        </li>
    )
}

export default Post;
