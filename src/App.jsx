// import Layout from "./layot/Layot";
// import AlertButton from "./AlertButton/AlertButton.jsx";

// function App() {
//   return (
//     <Layout>
//       <h1>Welcome to My React App</h1>
//       <p>keren kan😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏</p>
//       <AlertButton 
//         text="Coba aje" 
//         message="kece banget kan buatan ane😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏😏"
//       />
//     </Layout>
//   );
// }

// export default App;































































// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

import AlertButton from "./AlertButton/AlertButton.jsx";

export default function App() {
  return (
    <div>
      <AlertButton text="Klik Disini" message="Berhasil diubah!" />
    </div>
  );
}