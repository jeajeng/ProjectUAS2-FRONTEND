import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const DosenByNidn = () => {
    const[nidn, setNidn]= useState('')
    const router= useRouter()
    const getDsnByNidn=(e)=>{
        e.preventDefault();
        router.push({
            pathname:'datadosen',
            query: {'nidn': nidn}
        })
    }
    return ( 
        <div className="container">
             <form onSubmit={getDsnByNidn}>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col d-flex flex-reverse">
                    <input type="text"
                                className="form-control"
                                placeholder="cari dosen by nidn"
                                value={nidn}
                                onChange={(e)=>setNidn(e.target.value)}>
                            
                        </input>
                        
                    <input type="submit" value="Cari" className="btn btn-success ms-2 fs-6"></input>
                    </div>
                       
                    
                </div>
            </form>
        </div>
        
     );
}
 
export default DosenByNidn;