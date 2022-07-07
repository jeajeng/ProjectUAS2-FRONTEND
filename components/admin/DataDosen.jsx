import Link from "next/link";

import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/router"

const DataDosen = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusDosen(nidn) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/identitas/${nidn}`
      )
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Dosen dengan Nidn ${nidn} telah terhapus`)
    } catch (error) {
      console.log({ message : error.message })
    }

    router.push("/admin/datadosen");
  } 
  return (
    
      <div className="container">
        <h3>Data Dosen</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nama</th>
              <th>NIDN</th>
              <th>No Telepon</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dsn, idx) => (
              <tr key={idx}>
                <td>{dsn.nama}</td>
                <td>{dsn.nidn}</td>
                <td>{dsn.no_telepon}</td>
                <td>{dsn.email}</td>
                <td>
                  <div className="d-flex justify-content-between ">
                    <Link href={`/admin/updateDosen?nama=${dsn.nama}
                    &nidn=${dsn.nidn}&no_telepon=${dsn.no_telepon}&email=${dsn.email}`}>
                      <a>Edit</a>
                    </Link>
                    <button className="btn btn-warning btn-sm"
                    value={dsn.nidn}
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

export default DataDosen;
