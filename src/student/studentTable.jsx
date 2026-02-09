import { useStudent } from "./studentContex";

export default function StudentTable() {
  const { students, dispatch } = useStudent();

  const edit = s => {
    const nama = prompt("Nama", s.nama);
    const umur = prompt("Umur", s.umur);
    const kelas = prompt("Kelas", s.kelas);
    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "UPDATE",
      payload: { id: s.id, nama, umur, kelas }
    });
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th><th>Umur</th><th>Kelas</th><th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.nama}</td>
            <td>{s.umur}</td>
            <td>{s.kelas}</td>
            <td>
              <button onClick={()=>edit(s)}>Edit</button>
              <button onClick={()=>dispatch({type:"DELETE", payload:s.id})}>
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
