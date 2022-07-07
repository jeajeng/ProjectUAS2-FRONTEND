import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

const TambahDosen = () => {
    const[nama,setNama]=useState('')
    const[nidn,setNidn]=useState('')
    const[no_telepon,setNo_telepon]=useState('')
    const[email,setEmail]=useState('')

    

    async function submitHandler(e){
        e.preventDefault()
        try{
            axios
                .post(`http://localhost:5000/identitas`,{
                    nama,
                    nidn,
                    no_telepon,
                    email
                    
                    
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
        setNama('')
        setNidn('')
        setNo_telepon('')
        setEmail('')
       
    }
    return ( 
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input DOSEN</h1>
                    <div className="W-75">
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="nama"
                            type="text"
                            placeholder="Nama"
                            value={nama}
                            onChange={(e)=> setNama(e.target.value)}
                            >
                            </input>
                            <label htmlFor="nama">NAMA</label>
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
                            id="no_telepon"
                            type="text"
                            placeholder="No_Telepon"
                            value={no_telepon}
                            onChange={(e)=> setNo_telepon(e.target.value)}
                            >
                            </input>
                            <label htmlFor="nidn">No Telepon</label>
                        </div>
                        <div className="form-floating">
                            <input
                            className="form-control mb-2"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            >
                            </input>
                            <label htmlFor="nidn">Email</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary  " type="submit">SIMPAN</button>
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default TambahDosen;