import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

const TambahPelatihan = () => {
    
    const[nidn,setNidn]=useState('')
    const[tahun,setTahun]=useState('')
    const[jenis_pelatihan,setJenis_pelatihan]=useState('')
    const[penyelenggara,setPenyelenggara]=useState('')

    

    async function submitHandler(e){
        e.preventDefault()
        try{
            axios
                .post(`http://localhost:5000/pelatihan`,{
                    nidn,
                    tahun,
                    jenis_pelatihan,
                    penyelenggara
                    
                    
                })
                .then(response=>{
                    console.log(response);
                });
              alert("penambahan data sukses") 
               
              clearInput()
        }catch(e){
            throw Error(e.message)
        }
    }
    const clearInput=()=>{
       
        setNidn('')
        setTahun('')
        setJenis_pelatihan('')
        setPenyelenggara('')
       
    }
    return ( 
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Data pelatihan</h1>
                    <div className="W-75">
                        
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="nidn"
                            type="text"
                            placeholder="NIDN"
                            value={nidn}
                            onChange={(e)=> setNidn(e.target.value)}
                            >
                            </input>
                            <label htmlFor="nidn">NIDN</label>
                        </div>
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="tahun"
                            type="text"
                            placeholder="Tahun"
                            value={tahun}
                            onChange={(e)=> setTahun(e.target.value)}
                            >
                            </input>
                            <label htmlFor="tahun">Tahun</label>
                        </div>
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="jenis_pelatihan"
                            type="text"
                            placeholder="Jenis pelatihan"
                            value={jenis_pelatihan}
                            onChange={(e)=>setJenis_pelatihan(e.target.value)}
                            >
                            </input>
                            <label htmlFor="jenis_peltihan">Jenis Pelatihan</label>
                        </div>
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="penyelenggara"
                            type="text"
                            placeholder="penyelenggara"
                            value={penyelenggara}
                            onChange={(e)=> setPenyelenggara(e.target.value)}
                            >
                            </input>
                            <label htmlFor="penyelenggara">Penyelengara</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" type="submit">SIMPAN</button>
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default TambahPelatihan;