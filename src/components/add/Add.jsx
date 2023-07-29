import React from 'react';
import "./add.scss";

const Add = ({slug, columns, setOpen}) => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        // Add new User or Product or Item
        // axios.post("/api/${slug}")
    }


  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={()=>setOpen(false)}>X</span>
            <h1>Add new {slug}</h1>
            <form onSubmit={handleSubmit}>
                {columns
                .filter(item=>item.field !== "id" && item.field!=="img")
                .map((column)=>(
                    <div className="item" key={column.headerName}>
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} name="" id="" />
                    </div>
                ))}

                
            </form>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Add