import Connect from "@/app/Connect";
import InsertForm from "@/app/components/InsertForm";
import Vcard from "@/app/models/Vcard";


export default async function page ({params}){
    async function EditVcard(formData) {

        "use server"
        let name = formData.get("name")
        let contact = formData.get("contact")
        let data = await Vcard.findByIdAndUpdate(params.id, {name,contact})
      }
 
    await Connect();
    const singleEdit = await Vcard.findById(params.id)
    return (
       <div className="h-screen flex flex-1 items-center justify-center">
        <div className="w-1/3">
            <InsertForm update={true} data={singleEdit} InsertVcard={EditVcard}/>
        </div>

       </div>
    )
}