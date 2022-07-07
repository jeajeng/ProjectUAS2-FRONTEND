import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateRiwayat = () => {
  //deklarasi state
  const[_thn_lulus,setThn_lulus]=useState('')
    const[_nidn,setNidn]=useState('')
    const[_progpen,setProgpen]=useState('')
    const[_perguruan_tinggi,setPerguruan_tinggi]=useState('')
    const[_prodi,setProdi]=useState('')

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { thn_lulus, nidn, progpen, perguruan_tinggi, prodi } = router.query;

  useEffect(() => {
    if (typeof thn_lulus == "string") {
      setThn_lulus(thn_lulus);
    }
    if (typeof nidn == "string") {
      setNidn(nidn);
    }
    if (typeof progpen == "string") {
      setProgpen(progpen);
    }
    if (typeof perguruan_tinggi == "string") {
      setPerguruan_tinggi(perguruan_tinggi);
    }
  }, [thn_lulus, nidn, progpen, perguruan_tinggi, prodi]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/riwayat/${_nidn}`, {
          thn_lulus: _thn_lulus,
          nidn: _nidn,
          progpen: _progpen,
          perguruan_tinggi: _perguruan_tinggi,
          prodi: _prodi,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/admin/dataRiwayat");
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
                id="thn_lulus"
                type="text"
                placeholder="Tahun Lulus"
                value={_thn_lulus}
                onChange={(e) => setThn_lulus(e.target.value)}
              />
              <label htmlFor="thn_lulus">Tahun Lulus</label>
            </div>
          </div>

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
                id="progpen"
                type="text"
                placeholder="Propen"
                value={_progpen}
                onChange={(e) => setProgpen(e.target.value)}
              />
              <label htmlFor="progpen">Program Pendidikan</label>
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="perguruan_tinggi"
                type="text"
                placeholder="Pergutruan Tinggi"
                value={_perguruan_tinggi}
                onChange={(e) => setPerguruan_tinggi(e.target.value)}
              />
              <label htmlFor="perguruan_tinggi">Perguruan Tinggi</label>
            </div>
          </div>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="prodi"
                type="text"
                placeholder="Prodi"
                value={_prodi}
                onChange={(e) => setProdi(e.target.value)}
              />
              <label htmlFor="prodi">Prodi</label>
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

export default UpdateRiwayat;
