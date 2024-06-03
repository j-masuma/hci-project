


// import React, { useState, useRef, useEffect } from "react";
// import Result from "../showResults/Result";
// import "./speedTester.css";
// import { Container, Form, InputGroup } from "react-bootstrap";

// function SpeedTester() {
//   const [text, setText] = useState("");
//   const [time, setTime] = useState(0);
//   const [wordCollection, setWordCollection] = useState([
//     "Hospital",
//     "Racism",
//     "specialized",
//     "Awesome",
//     "Robotics",
//     "Intellectual",
//     "Isn't",
//     "placeholder?",
//     "technology",
//     "generic",
//     "something",
//     "co-operative",
//     "@gmail",
//     "!okay",
//     "#Important",
//     "Love",
//     "Garden",
//     "Happiness",
//     "Happy",
//     "&Friend",
//     "Smile",
//     "Entrepreneurship",
//     "Miscellaneous",
//     "Phenomenon",
//     "Eccentricity",
//     "Inconceivable",
//     "Exacerbate",
//     "Bureaucracy",
//     "Aberration",
//   ]);

//   const ref = useRef(null);

//   // Shuffle array function
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   useEffect(() => {
//     const shuffledArray = shuffleArray([...wordCollection]);
//     const limitedArray = shuffledArray.slice(0, 15); 
//     setWordCollection(limitedArray);
//   }, []);

 
//   const changeHandler = (e) => {
//     if (time < 30) {
//       setText(e.target.value);
//     }
//   };

//   //to reset the textarea 
//   const resetHandler = () => {
//     setText("");
//     setTime(0);
//     ref.current.focus();
    
//   };

//   //time calculation logic
//   if (text.length > 0) {
//     if (time < 30) {
//       setTimeout(() => {
//         setTime(time + 1);
//       }, 1000);
//     }
//   }

//   //wpm and word formula
//   let i, j;
//   let k = 0;
//   let wpm;
//   let userWord = [];
//   let correctWord = [];
//   if (text === "" || time === 0) {
//     wpm = 0;
//   } else {
//     userWord = text.split(" ");

//     //compairing user word and word collection
//     for (i = k; i <= userWord.length; i++) {
//       console.log("Outer loop running");
//       for (j = 0; j < wordCollection.length; j++) {
//         console.log("Inner loop running");
//         if (userWord[i] === wordCollection[j]) {
//           correctWord[k] = userWord[i];
//           k += 1;
//         }
//       }
//     }
//     console.log(correctWord);
//     wpm = Math.ceil(correctWord.length / (time / 60));
//   }

//   return (
//     <Container className="text-center">
//       <div className="">
//         <h1 className="p-4">Words are displayed randomly</h1>
//         <div className="writingContent p-4 d-flex border rounded shadow">
//           {wordCollection.map((word, index) => (
//             <b key={index}>
//               <span style={{ color: "green", fontSize: "25px" }}>{word}</span>
//             </b>
//           ))}
//         </div>
//         <div className="start_time p-4">
//           {time > 0 ? (
//             <span style={{ fontWeight: "bold", fontSize: "55px" }}>
//               {" "}
//               {time}
//             </span>
//           ) : (
//             <h3>start typing to check your speed:</h3>
//           )}
//         </div>

//         <InputGroup>
//           <Form.Control
//             className="p-4"
//             as="textarea"
//             rows={5}
//             value={text}
//             onChange={changeHandler}
//             aria-label="With textarea"
//             ref={ref}
//             style={{ fontSize: "25px" }}
//           />
//         </InputGroup>

//         {time > 0 ? (
//           <div className="">
//             <span style={{ fontWeight: "bold", fontSize: "25px" }}>
//               {" "}
//               {wpm}wpm
//             </span>
//           </div>
//         ) : (
//           " "
//         )}
//       </div>
//       {time === 30 ? (
//         <Result
//           handlerParent={resetHandler}
//           wpm={wpm}
//           correctWord={correctWord}
//         />
//       ) : (
//         " "
//       )}
//     </Container>
//   );
// }

// export default SpeedTester;





import React, { useState, useRef, useEffect } from "react";
import Result from "../showResults/Result";
import "./speedTester.css";
import { Container, Form, InputGroup, Button } from "react-bootstrap";

function SpeedTester() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [wordCollection, setWordCollection] = useState([
    "Hospital",
    "Racism",
    "specialized",
    "Awesome",
    "Robotics",
    "Intellectual",
    "Isn't",
    "placeholder?",
    "technology",
    "generic",
    "something",
    "co-operative",
    "@gmail",
    "!okay",
    "#Important",
    "Love",
    "Garden",
    "Happiness",
    "Happy",
    "&Friend",
    "Smile",
    "Entrepreneurship",
    "Miscellaneous",
    "Phenomenon",
    "Eccentricity",
    "Inconceivable",
    "Exacerbate",
    "Bureaucracy",
    "Aberration",
  ]);
  const [retryClicked, setRetryClicked] = useState(false);

  const ref = useRef(null);

  // Shuffle array function
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    generateRandomWords();
  }, [retryClicked]);

  const generateRandomWords = () => {
    const shuffledArray = shuffleArray([...wordCollection]);
    const limitedArray = shuffledArray.slice(0, 15);
    setWordCollection(limitedArray);
  };

  const changeHandler = (e) => {
    if (time < 30) {
      setText(e.target.value);
    }
  };

  const resetHandler = () => {
    setText("");
    setTime(0);
    ref.current.focus();
    setRetryClicked(!retryClicked); // Trigger generation of new random words
  };

  if (text.length > 0) {
    if (time < 30) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }

  let i, j;
  let k = 0;
  let wpm;
  let userWord = [];
  let correctWord = [];
  if (text === "" || time === 0) {
    wpm = 0;
  } else {
    userWord = text.split(" ");

    for (i = k; i <= userWord.length; i++) {
      console.log("Outer loop running");
      for (j = 0; j < wordCollection.length; j++) {
        console.log("Inner loop running");
        if (userWord[i] === wordCollection[j]) {
          correctWord[k] = userWord[i];
          k += 1;
        }
      }
    }
    console.log(correctWord);
    wpm = Math.ceil(correctWord.length / (time / 60));
  }

  return (
    <Container className="text-center">
      <div className="">
        <h1 className="p-4">Words are displayed randomly</h1>
        <div className="writingContent p-4 d-flex border rounded shadow">
          {wordCollection.map((word, index) => (
            <b key={index}>
              <span style={{ color: "green", fontSize: "25px" }}>{word}</span>
            </b>
          ))}
        </div>
        <div className="start_time p-4">
          {time > 0 ? (
            <span style={{ fontWeight: "bold", fontSize: "55px" }}>
              {" "}
              {time}
            </span>
          ) : (
            <h3>start typing to check your speed:</h3>
          )}
        </div>

        <InputGroup>
          <Form.Control
            className="p-4"
            as="textarea"
            rows={5}
            value={text}
            onChange={changeHandler}
            aria-label="With textarea"
            ref={ref}
            style={{ fontSize: "25px" }}
          />
        </InputGroup>

        {time > 0 ? (
          <div className="">
            <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              {" "}
              {wpm}wpm
            </span>
          </div>
        ) : (
          " "
        )}
      </div>
      {time === 30 ? (
        <Result
          handlerParent={resetHandler}
          wpm={wpm}
          correctWord={correctWord}
        />
      ) : (
        " "
      )}
      
    </Container>
  );
}

export default SpeedTester;
