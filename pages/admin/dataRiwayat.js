import DataRiwayat from "../../components/admin/DataRiwayat";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import RiwayatByNidn from "../../components/admin/RiwayatByNidn";
const dataRiwayat = ({data}) => {
    {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        <LayoutAdmin>
            <RiwayatByNidn/>
            <DataRiwayat data = {data}/>
        </LayoutAdmin>
            
        
     );
    
}
export async function getServerSideProps({query}){
    const nidn= query.nidn;
    let url=`http://localhost:5000/riwayat`
    if(typeof nidn ==='string'){
        url = `http://localhost:5000/riwayat/${nidn}`
    }
    //fetc data
    const res= await fetch(url)
    const data = await res.json()
    return {props : {data}}

}
export default dataRiwayat;