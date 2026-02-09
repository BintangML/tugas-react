import { useState } from "react";
import { useStudent } from "./studentContex";

export default function StudentForm() {
  const { dispatch } = useStudent();
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  const submit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: { id: Date.now(), nama, umur, kelas }
    });
    setNama(""); setUmur(""); setKelas("");
  };

  return (
    <form onSubmit={submit}>
      <h3>Tambah Siswa</h3>
      <input placeholder="Nama" value={nama} onChange={e=>setNama(e.target.value)} />
      <input placeholder="Umur" value={umur} onChange={e=>setUmur(e.target.value)} />
      <input placeholder="Kelas" value={kelas} onChange={e=>setKelas(e.target.value)} />
      <button>Tambah</button>
    </form>
  );
}
