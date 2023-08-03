
import './App.css';
import React from 'react';

    const quoteData = [
   {text: `“Life is not a problem to be solved, but a reality to be experienced.”`, author:"Soren Kierkegaard"},
   {text: `"Do all the good you can, for all the people you can, in all the ways you can, as long as you can."`, author:"Hillary Clinton (inspired by John Wesley quote)"},
   {text: `"Life is like riding a bicycle. To keep your balance, you must keep moving."`, author:"Albert Einstein"},
   {text: `“Good friends, good books, and a sleepy conscience: this is the ideal life.”`, author:"Mark Twain"},
   {text: `“The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.”`, author:"Socrates"},
];

const QuoteBox = ({quote, handleNewQuote }) =>(
<div id="quote-box">
  <p id="text">{quote.text}</p>
  <h2 id="author">{quote.author}</h2>
  
  <div class="actions">
    <button
      id="new-quote"
      class="button"
      onClick={handleNewQuote}
      >
      New Quote
    </button>
    <a
      href="https://twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      >
      Tweet
    </a>
  </div>
  </div>
      );
  /*把h2的css给id里的author

target="_blank" - - 用户点击该链接时，链接的目标页面会在一个新的浏览器窗口或选项卡中打开，而不是当前页面。

函数 getRandomIndex 的意思是：它会返回一个介于 0 和 quoteData 数组长度减 1 之间的整数值，该整数值表示 quoteData 数组中一个随机选取的元素的索引。换句话说，这个函数将随机地选择一个引用数据数组中的索引，从而实现随机选择其中的一条引用信息

 */ 
const getRandomIndex = () =>
 Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

  const App = () => {
  const [quote, setQuote]= React.useState(quoteData[getRandomIndex()])
  const  handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  return(
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
  </div>
  )
  }




export default App;

