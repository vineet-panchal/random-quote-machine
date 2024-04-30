import { useState } from "react";
import quotes from "./assets/quotes.json"; // import quotes json 
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // import react-icons library 
import "./App.css";
// import all necessary react libraries

interface Quote { // interface for Quote that defines quote and author
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => { // function that fetches a random quote and returns it
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => { // function that generates a random color and returns it as a string
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote()); // initila
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }; 

  return (
    <>
      <div className="background" style={{backgroundColor: randomColor, transition: "all 1s"}}>
        <div id="quote-box">
          <div
            className="quote-content"
            style={{ color: randomColor, transition: "all 1s" }}
          >
            <h2 id="text">
              <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
              {quote.quote}
              <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
            </h2>
            <h4 id="author">- {quote.author}</h4>
          </div>
          <div className="buttons">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
              id="tweet-quote"
              style={{ backgroundColor: randomColor, marginRight: "10px", transition: "all 1s"}}
            >
              <FaTwitter color="white" />
            </a> {/*twitter quote link */}
            <button
              id="new-quote"
              onClick={changeQuote}
              style={{ backgroundColor: randomColor, transition: "all 1s"}}
            >
              Change Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;