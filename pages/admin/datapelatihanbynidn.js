import DataDosen from "../../components/admin/DataDosen";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import DosenByNidn from "../../components/admin/DosenByNidn";
import GetPlt from "../../components/admin/GetPelatihanbYNidn";
import PelatihanByNidn from "../../components/admin/PelatihanByNidn";
const dataPlt = ({data}) => {
    {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        
        <LayoutAdmin>
            <PelatihanByNidn/>
            <GetPlt data={data}/>
        </LayoutAdmin>
            
        
     );
    
}
export async function getServerSideProps({query}){
    const nidn= query.nidn;
    let url=`http://localhost:5000/pelatihan`
    if(typeof nidn ==='string'){
        url = `http://localhost:5000/pelatihan/${nidn}`
    }
    //fetc data
    const res= await fetch(url)
    const data = await res.json()
    return {props : {data}}

}
export default dataPlt;