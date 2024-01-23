import Connect from "./Connect"
import Vcard from "./models/Vcard";
import CallingTable from "./components/CallingTable";
import InsertForm from "./components/InsertForm";
import {join} from "path";
import { writeFile } from "fs/promises";




export default async function page() {
  await Connect();
  let callingVcard = await Vcard.find()

  async function InsertVcard(formData) {

    "use server"
   
    let file = formData.get("image");
    let name = formData.get("name")
    let contact = formData.get("contact")

    //image uploads work
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes)
    //creating path where we want to add
    const path = join("./public","images",file.name)
    await writeFile(path,buffer);

    let data = await Vcard.create({ name, contact , image:file.name })
    
  }

  async function deleteVcard(id){
    "use server"
    let data = await Vcard.findByIdAndDelete(id)
    
  }
  return (
    <div className="px-10 gap-5 flex flex-1">
      <div className="w-1/4">
        
        <InsertForm InsertVcard={InsertVcard}/>
      </div>
      <div className="w-3/4">
        
        <CallingTable callingVcard = {callingVcard} deleteVcard={deleteVcard}/>

      </div>
    </div>
  )
}