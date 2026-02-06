import { useState } from "react";

function DaftarNama() {
  const [inputValue, setInputValue] = useState("");
  const [listNama, setListNama] = useState([]);

  const handleTambahNama = () => {
    if (inputValue.trim() === "") return;

    setListNama([...listNama, inputValue]);
    setInputValue("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar Nama</h2>

      <input
        type="text"
        placeholder="Masukkan nama"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleTambahNama} style={{ marginLeft: "10px" }}>
        Tambah Nama
      </button>

      <table
        border="1"
        cellPadding="8"
        style={{ marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((nama, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DaftarNama;
