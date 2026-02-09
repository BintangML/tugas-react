import { createContext } from "react";
import { useImmerReducer } from "use-immer";

export const StudentContext = createContext();

const initialState = [];

function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push(action.payload);
      break;

    case "DELETE_STUDENT":
      return draft.filter((s) => s.id !== action.payload);

    case "EDIT_STUDENT":
      const student = draft.find((s) => s.id === action.payload.id);
      if (student) {
        student.nama = action.payload.nama;
        student.umur = action.payload.umur;
        student.kelas = action.payload.kelas;
      }
      break;

    default:
      break;
  }
}

export function StudentProvider({ children }) {
  const [students, dispatch] = useImmerReducer(
    studentReducer,
    initialState
  );

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}
