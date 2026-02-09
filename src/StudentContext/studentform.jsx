import { useState, useContext } from "react";
import { StudentContext } from "./StudentContext/StudentContext";

function StudentForm() {
  const { dispatch } = useContext(StudentContext);

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "ADD_STUDENT",
      payload: {
        id: Date.now(),
        nama,
        umur,
        kelas,
      },
    });

    setNama("");
    setUmur("");
    setKelas("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="number"
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default StudentForm;
