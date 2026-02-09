import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

export const StudentContext = createContext();

const reducer = (draft, action) => {
  switch (action.type) {
    case "ADD":
      draft.push(action.payload);
      break;

    case "DELETE":
      return draft.filter(s => s.id !== action.payload);

    case "UPDATE":
      const s = draft.find(x => x.id === action.payload.id);
      if (s) {
        s.nama = action.payload.nama;
        s.umur = action.payload.umur;
        s.kelas = action.payload.kelas;
      }
      break;
  }
};

export const StudentProvider = ({ children }) => {
  const [students, dispatch] = useImmerReducer(reducer, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
