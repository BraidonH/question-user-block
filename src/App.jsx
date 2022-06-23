import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./Question";
import "./App.css";

function App() {
  const [question, setQuestion] = useState(questions);

  return (
    <main className="App">
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion {...question} key={questions.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
