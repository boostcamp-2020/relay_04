import React, { Children } from "react";
import "./postList.css";
import Pagenation from '../pagenation'
const dumy = [
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
  { title: "title", id: "id" },
];
function unit({ ...data }) {
  return (
    <div className="postList-unit">
      <div>{data.id}</div>
      <div>{data.title}</div>
      <button className='postList-button'>YES</button>
      <button className='postList-button'>no</button>
    </div>
  )
}
function Bulletin({ list }) {
  return list.map((data) => {
    return unit(data);
  })
}
function ListTitle() {
  return (
    <div className='postList-unit postList-title'>
      <div>id</div>
      <div>title</div>
    </div>
  )
}

function PostList() {
  return (
    <TempTaplate>
      <div id="postList-warpper">
        <ListTitle />
        <Bulletin list={dumy} />
        <button className='postList-button postList-write-button'>글작성</button>
        <Pagenation lastPage={10} currentPage={1} />
      </div>
    </TempTaplate>
  )
}

function TempTaplate({ children }) {
  return (
    <div>
      <header />
      <main>{children}</main>;
    </div>

  )
}
export default PostList;
