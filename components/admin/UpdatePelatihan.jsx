import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdatePelatihan = () => {
  //deklarasi state
  const[_nidn,setNidn]=useState('')
  const[_tahun,setTahun]=useState('')
  const[_jenis_pelatihan,setJenis_pelatihan]=useState('')
  const[_penyelenggara,setPenyelenggara]=useState('')

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { nidn, tahun, jenis_pelatihan, penyelenggara } = router.query;

  useEffect(() => {
    if (typeof nidn == "string") {
      setNidn(nidn);
    }
    if (typeof tahun == "string") {
      setTahun(tahun);
    }
    if (typeof jenis_pelatihan == "string") {
      setJenis_pelatihan(jenis_pelatihan);
    }
    if (typeof penyelenggara == "string") {
      setPenyelenggara(penyelenggara);
    }
  }, [nidn, tahun, jenis_pelatihan, penyelenggara]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/pelatihan/${_nidn}`, {
          
          nidn: _nidn,
          tahun: _tahun,
          jenis_pelatihan: _jenis_pelatihan,
          penyelenggara:_penyelenggara,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/admin/dataPelatihan");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3">Edit Data Dosen</h1>
          

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nidn"
                type="text"
                placeholder="nidn"
                value={_nidn}
                onChange={(e) => setNidn(e.target.value)}
              />
              <label htmlFor="nidn">NIDN</label>
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="tahun"
                type="text"
                placeholder="tahun"
                value={_tahun}
                onChange={(e) => setTahun(e.target.value)}
              />
              <label htmlFor="progpen">tahun</label>
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="jenis_pelatihan"
                type="text"
                placeholder="jenis pelatihan"
                value={_jenis_pelatihan}
                onChange={(e) => setJenis_pelatihan(e.target.value)}
              />
              <label htmlFor="jenis">Jenis Pelatihan</label>
            </div>
          </div>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="penyelenggara"
                type="text"
                placeholder="penyelenggara"
                value={_penyelenggara}
                onChange={(e) => setPenyelenggara(e.target.value)}
              />
              <label htmlFor="penyelenggara">Penyelenggara</label>
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePelatihan;
