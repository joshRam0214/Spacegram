import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

import BtnComponent from './btnComponent';
import DisplayImages from './DisplayImages';
import DisplayLikes from './displayLikes';

function App() {
  const API_URL = 'https://images-api.nasa.gov/';
  // const APP_key = '9vdgsdn5g6SshRXteNbcO3vrxfl2AWNVHv7JGn5A';
  const [imgList, setImgList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [searchImage, setSearch] = useState("");
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filterImageList = (images) => {
    let imgArr = []
    if (images) {
      images.forEach((img) => {
        if (img.data[0].media_type === 'image') {
          imgArr.push(img);
        }
      });
    }
    return imgArr;
  }

  const getImage = async (query) => {
    const response = await fetch(`${API_URL}/search?q=${query}`);
    // const response = await fetch(`${API_URL}/search?q=earth`);
    const data = await response.json();
    setImgList([]);
    if (data.collection) {
      setImgList(filterImageList(data.collection.items));
    }

  };

  //Fetch Image data
  useEffect(() => {
    if (query !== " ") {
      getImage(query);
    }
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(searchImage);
    setSearch('');
  }

  const saveToLocal = (items) => {
    window.localStorage.clear();
    window.localStorage.setItem("liked-Images", JSON.stringify(items));
  }

  const addLiked = (image) => {
    const newLikeList = [...likeList, image];
    setLikeList(newLikeList);
    saveToLocal(newLikeList);
  }

  const removeLike = (images) => {
    const newLikeList = likeList.filter(
      (img) => img.data[0].nasa_id !== images.data[0].nasa_id
    );
    setLikeList(newLikeList);
    saveToLocal(newLikeList);
  }
  const likeOpen = () => {
    if (!open) {
      return <FaArrowRight />;
    }
    return <FaArrowDown />;
  }

  useEffect(() => {
    if (window.localStorage.getItem('liked-Images')) {
      const imgLikes = JSON.parse(window.localStorage.getItem('liked-Images'));
      setLikeList(imgLikes);
    }
  }, []);

  return (

    <div className="App">
      <div className="Header p-3">
        <h1 className="ml-5">Spacegram: NASA Image Library</h1>
      </div>
      <div className='mx-auto w-75 p-4'>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {likeOpen()} Liked Images
        </Button>
        <Collapse in={open}>
          <div className="card p-2 mt-2" id="example-collapse-text">
            {likeList.length === 0 ? "No images liked" : <DisplayLikes images={likeList} onClickRemove={removeLike} removebtn={BtnComponent} />}
          </div>
        </Collapse>
      </div>
      <form onSubmit={getSearch} className='Form p-5'>
        <div className='w-50 d-flex flex-column mx-auto'>
          <h2>Search Your Favourite Image</h2>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Images" value={searchImage} onChange={updateSearch} />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </div>
        </div>
      </form>
      <DisplayImages imgList={imgList} onClickLike={addLiked} compareLike={likeList} likedComp={BtnComponent} />
    </div>
  );
}
export default App;