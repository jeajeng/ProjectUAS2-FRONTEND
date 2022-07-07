import Link from "next/link";

import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/router"

const GetPlt = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  console.log(data);

  async function hapusDosen(nidn) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/pelatihan/${nidn}`
      )
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Dosen dengan Nidn ${nidn} telah terhapus`)
    } catch (error) {
      console.log({ message : error.message })
    }

    router.push("/admin/datapelatihanbynidn");
  } 
  return (
    
      <div className="container">
        <h3>Data Dosen</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>NIDN</th>
              <th>NAMA</th>
              <th>Jenis Pelatihan</th>
              <th>Prodi</th>
              <th>Perguruan Tinggi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pel, idx) => (
              <tr key={idx}>
                <td>{pel.nidn}</td>
                <td>{pel.nama}</td>
                <td>{pel.jenis_pelatihan}</td>
                <td>{pel.prodi}</td>
                <td>{pel.perguruan_tinggi}</td>
                <td>
                  <div className="d-flex justify-content-between ">
                    {/* <Link href={`/admin/updateDosen?nama=${dsn.nama}
                    &nidn=${dsn.nidn}&no_telepon=${dsn.no_telepon}&email=${dsn.email}`}>
                      <a>Edit</a>
                    </Link> */}
                    <button className="btn btn-warning btn-sm"
                    value={pel.nidn}
                    onClick={(e) => hapusDosen(e.target.value)}>
                    Hapus                      
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default GetPlt;
