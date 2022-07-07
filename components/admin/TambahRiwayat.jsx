import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

const TambahRiwayat = () => {
    const[thn_lulus,setThn_lulus]=useState('')
    const[nidn,setNidn]=useState('')
    const[progpen,setProgpen]=useState('')
    const[perguruan_tinggi,setPerguruan_tinggi]=useState('')
    const[prodi,setProdi]=useState('')

    

    async function submitHandler(e){
        e.preventDefault()
        try{
            axios
                .post(`http://localhost:5000/riwayat`,{
                    thn_lulus,
                    nidn,
                    progpen,
                    perguruan_tinggi,
                    prodi
                    
                    
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
        setThn_lulus('')
        setNidn('')
        setProgpen('')
        setPerguruan_tinggi('')
        setProdi('')
       
    }
    return ( 
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Riwayat Pendidikan Dosen</h1>
                    <div className="W-75">
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="thn_lulus"
                            type="text"
                            placeholder="Tahun Lulus"
                            value={thn_lulus}
                            onChange={(e)=> setThn_lulus(e.target.value)}
                            >
                            </input>
                            <label htmlFor="thn_lulus">Tahun Lulus</label>
                        </div>
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
                            id="progpen"
                            type="text"
                            placeholder="Program pendididikan"
                            value={progpen}
                            onChange={(e)=> setProgpen(e.target.value)}
                            >
                            </input>
                            <label htmlFor="progpen">Program Pendidikan</label>
                        </div>
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="perguruan_tinggi"
                            type="text"
                            placeholder="Perguruan Tinggi"
                            value={perguruan_tinggi}
                            onChange={(e)=> setPerguruan_tinggi(e.target.value)}
                            >
                            </input>
                            <label htmlFor="perguruan_tinggi">Perguruan Tinggi</label>
                        </div>
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="prodi"
                            type="text"
                            placeholder="PRODI"
                            value={prodi}
                            onChange={(e)=> setProdi(e.target.value)}
                            >
                            </input>
                            <label htmlFor="prodi">Prodi</label>
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
 
export default TambahRiwayat;