"use client"

import Link from "next/link";

let CallingTable =({callingVcard, deleteVcard})=>{
    return(
        <>
        <h1 className="text-5xl font-bold mb-5">PHONE BOOK </h1>
        <table className="w-full mt-5  py-2">
          <thead>
            <tr>
              <th className="border text-center py-2">ID</th>
              <th className="border text-center py-2">Name</th>
              <th className="border text-center py-2">Contact</th>
              <th className="border text-center py-2">IMAGE</th>
              <th className="border text-center py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              callingVcard.map((item) => (
                <tr key={item._id}>
                  <td className="border text-center py-2">{item._id}</td>
                  <td className="border text-center py-2">{item.name}</td>
                  <td className="border text-center py-2">{item.contact}</td>
                  <td className="border text-center py-2 "><img src={`/images/${item.image}`} width={150} height={100} alt="img"/></td> 
                  <td className="border text-center py-2"><button type="button" 
                  onClick={()=> deleteVcard(item._id)} className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-800">X</button>
                  <Link href={`/edit/${item._id}`} className="bg-sky-600 text-white hover:bg-sky-900 px-2 py-1 rounded-full m-5 flex items-center justify-center">EDIT</Link></td>
                </tr>

              ))
            }


          </tbody>
        </table>
        </>
    )

}
export default CallingTable;