import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentTable() {
  const { students, dispatch } = useContext(StudentContext);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  };

  const handleEdit = (student) => {
    const nama = prompt("Nama:", student.nama);
    const umur = prompt("Umur:", student.umur);
    const kelas = prompt("Kelas:", student.kelas);

    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "EDIT_STUDENT",
      payload: {
        id: student.id,
        nama,
        umur,
        kelas,
      },
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((siswa, index) => (
          <tr key={siswa.id}>
            <td>{index + 1}</td>
            <td>{siswa.nama}</td>
            <td>{siswa.umur}</td>
            <td>{siswa.kelas}</td>
            <td>
              <button onClick={() => handleEdit(siswa)}>Edit</button>
              <button onClick={() => handleDelete(siswa.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
