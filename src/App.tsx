import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json"
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

interface Quote {
  quote: string
  author: string
}

const transition = "all 1s"

const getRandomColor = () : string => {
  const red = Math.floor(Math.random() * 128)
  const green = Math.floor(Math.random() * 128)
  const blue = Math.floor(Math.random() * 128)

  return `rgb(${red}, ${green}, ${blue})`
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())

  const changeQuote = () => {
    setQuote(getRandomQuote())
    setRandomColor(getRandomColor())
  }

  return (
    <div className='background' style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor, transition }}>
          <h3 style={{ textAlign: 'center' }}>
            Since this is my first react app I was confused on how to set it up and do it so I did this first project with the help of 'Landon Schlangen's youtube video on this project. Please dont consider this plagerism and thank you for understanding!
          </h3>
          <br />
          <h2 id="text">
            <FaQuoteLeft size='30' style={{ marginRight: "10px" }} />
              {quote.quote}
            <FaQuoteRight size='30' style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={`htttps://twitter.com/intent/tweet?hashtags=quotes@related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: '10px',
              transition
            }}
          >
            <FaTwitter color='white'/>
          </a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor, transition }}>Change Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
