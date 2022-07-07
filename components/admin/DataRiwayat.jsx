import Link from "next/link";

import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/router"

const DataRiwayat = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusRiwayat(nidn) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/riwayat/${nidn}`
      )
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Riwayat Pendidikan dengan Nidn ${nidn} telah terhapus`)
    } catch (error) {
      console.log({ message : error.message })
    }

    router.push("/admin/dataRiwayat");
  } 
  return (
    
      <div className="container">
        <h3>Data Dosen</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Tahun Lulus</th>
              <th>NIDN</th>
              <th>Program Pendidikan</th>
              <th>Perguruan Tinggi</th>
              <th>Prodi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rwt, idx) => (
              <tr key={idx}>
                <td>{rwt.thn_lulus}</td>
                <td>{rwt.nidn}</td>
                <td>{rwt.progpen}</td>
                <td>{rwt.perguruan_tinggi}</td>
                <td>{rwt.prodi}</td>
                
                <td>
                  <div className="d-flex justify-content-between ">
                    <Link href={`/admin/updateRiwayat?thn_lulus=${rwt.thn_lulus}
                    &nidn=${rwt.nidn}&progpen=${rwt.progpen}&perguruan_tinggi=${rwt.perguruan_tinggi}&prodi=${rwt.prodi}`}>
                      <a>Edit</a>
                    </Link>
                    <button className="btn btn-warning btn-sm"
                    value={rwt.nidn}
                    onClick={(e) => hapusRiwayat(e.target.value)}>
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

export default DataRiwayat;
