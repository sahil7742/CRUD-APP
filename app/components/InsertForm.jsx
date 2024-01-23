
"use client"

import { useState } from "react"

const InsertForm =({InsertVcard ,update,data})=>{
  const [name,setName] = useState((data) ? data.name : "");
  const [contact , setContact]= useState((data) ? data.contact : "");
    return(
        <>
        <h1 className="text-5xl font-bold mb-5">{update ? "Update":"Insert"} </h1>
        <form action={InsertVcard} method="POST" encType="multipart/form-data" className="bg-grey-200 px-3 border mt-5 ">
          <div className="mb-3 flex flex-col">
            <label htmlFor="name">NAME</label>
            <input type="text" placeholder="Enter Name" className="border px-2 py-1 " id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="contact">CONTACT</label>
            <input type="text" placeholder="Enter Phone no." className="border px-2 py-1 " id="contact" name="contact"value={contact} onChange={(e) => setContact(e.target.value)}/>
          </div>
          {(!data) &&
          (<div className="mb-3 flex flex-col">
            <label htmlFor="image">Image</label>
            <input type="file" className="border px-2 py-1 " id="image" name="image"  />
          </div>)
}
          <div className="mb-3">
            <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded  w-full hover:bg-red-800">{(data)? "UPDATE":"INSERT" }</button>
          </div>
        </form>
        </>
    )
}
export default InsertForm