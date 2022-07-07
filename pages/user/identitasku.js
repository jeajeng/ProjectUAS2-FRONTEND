import DataDosen from "../../components/admin/DataDosen";
import DataDosen1 from "../../components/user/identitasku";
import UserLayout from "../../components/user/UserLayout";
import DosenByNidn1 from "../../components/user/DosenByNidn";
const identitas = ({data}) => {
    {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        <UserLayout>
            <DosenByNidn1/>
            
            <DataDosen1 data={data}/>c
        </UserLayout>
            
        
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
export default identitas;