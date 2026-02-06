import { useState } from "react";
import { useImmerReducer } from "use-immer";
import "./StudentManager.css";

let id = 1;

function reducer(draft, action) {
  switch (action.type) {
    case "ADD":
      draft.push({ id: id++, ...action });
      break;

    case "DELETE":
      return draft.filter(s => s.id !== action.id);

    case "EDIT":
      const s = draft.find(s => s.id === action.id);
      s.nama = action.nama;
      s.umur = action.umur;
      s.kelas = action.kelas;
      break;
  }
}

export default function StudentApp() {
  const [data, dispatch] = useImmerReducer(reducer, []);
  const [form, setForm] = useState({ nama: "", umur: "", kelas: "" });

  return (
    <div className="container">
      <h1>Data Siswa</h1>

      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", ...form });
          setForm({ nama: "", umur: "", kelas: "" });
        }}
      >
        {Object.keys(form).map(k => (
          <input
            key={k}
            placeholder={k}
            value={form[k]}
            onChange={e => setForm({ ...form, [k]: e.target.value })}
          />
        ))}
        <button>Tambah</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No</th><th>Nama</th><th>Umur</th><th>Kelas</th><th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.nama}</td>
              <td>{s.umur}</td>
              <td>{s.kelas}</td>
              <td>
                <button
                  className="edit"
                  onClick={() =>
                    dispatch({
                      type: "EDIT",
                      id: s.id,
                      nama: prompt("Nama", s.nama),
                      umur: prompt("Umur", s.umur),
                      kelas: prompt("Kelas", s.kelas),
                    })
                  }
                >
                  Edit
                </button>
                <button
                  className="hapus"
                  onClick={() => dispatch({ type: "DELETE", id: s.id })}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}