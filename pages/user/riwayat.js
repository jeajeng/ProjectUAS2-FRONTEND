import DataRiwayat from "../../components/admin/DataRiwayat";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import DataRiwayat1 from "../../components/user/Riwayat";
import RiwayatByNidn1 from "../../components/user/RiwayatByNidn";
import UserLayout from "../../components/user/UserLayout";
const dataRiwayat = ({data}) => {
    {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        <UserLayout>
            <RiwayatByNidn1/>
            <DataRiwayat1 data={data}/>
        </UserLayout>
            
        
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