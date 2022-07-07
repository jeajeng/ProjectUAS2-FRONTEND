import Link from "next/link";

import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/router"

const DataPelatihan1 = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusPelatihan(nidn) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/pelatihan/${nidn}`
      )
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`data pelatihan dengan Nidn ${nidn} telah terhapus`)
    } catch (error) {
      console.log({ message : error.message })
    }

    router.push("/admin/dataPelatihan");
  } 
  return (
    
      <div className="container">
        <h3>Data Pelatihan</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              
              <th>NIDN</th>
              <th>tahun</th>
              <th>Jenis Pelatihan</th>
              <th>Penyelenggara</th>
            </tr>
          </thead>
          <tbody>
            {data.map((plt, idx) => (
              <tr key={idx}>
                <td>{plt.nidn}</td>
                <td>{plt.tahun}</td>
                <td>{plt.jenis_pelatihan}</td>
                <td>{plt.penyelenggara}</td>
                
                
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default DataPelatihan1;
