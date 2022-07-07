import DataDosen from "../../components/admin/DataDosen";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import DosenByNidn from "../../components/admin/DosenByNidn";
const dataDosen = ({data}) => {
    {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        <LayoutAdmin>
            <DosenByNidn/>
            <DataDosen data = {data}/>
        </LayoutAdmin>
            
        
     );
    
}
export async function getServerSideProps({query}){
    const nidn= query.nidn;
    let url=`http://localhost:5000/identitas`
    if(typeof nidn ==='string'){
        url = `http://localhost:5000/identitas/${nidn}`
    }
    //fetc data
    const res= await fetch(url)
    const data = await res.json()
    return {props : {data}}

}
export default dataDosen;