// import { useState } from "react";
// import styles from "./AlertButton.module.css";

// const AlertButton = ({ text, message }) => {
//   const [paragraphText, setParagraphText] = useState("kalok di pencet ada yang berubah!!!");

//   const handleClick = () => {
//     if (paragraphText === message) {
//       setParagraphText("kalok di pencet ada yang berubah!!!");
//     } else {
//       setParagraphText(message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <button className={styles.button} onClick={handleClick}>
//         {text}
//       </button>
//       <p id="text" className={styles.text}>
//         {paragraphText}
//       </p>
//     </div>
//   );
// };

// export default AlertButton;


import { useState } from "react";

export default function AlertButton({ text, message }) {
  const [displayText, setDisplayText] = useState("data bisa berubah");

  function handleClick() {
    if (displayText === message) {
      setDisplayText("data bisa berubah");
    } else {
      setDisplayText(message);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
      <p id="text">{displayText}</p>
    </div>
  );
}