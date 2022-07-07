import DataPelatihan from "../../components/admin/DataPelatihan";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import DataPelatihan1 from "../../components/user/pelatihan";
import UserLayout from "../../components/user/UserLayout";
const dataPelatihan = ({data}) => {
    {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        <UserLayout>
            <DataPelatihan1 data={data}/>
        </UserLayout>
            
        
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
export default dataPelatihan;