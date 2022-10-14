
{/* <img src="https://www.js.education/images/logo.png" alt="JS Education" /> */ }
_jsx("img", {
  src: "https://www.js.education/images/logo.png",
  alt: "JS Education"
})

{/*
<div>
 <a href="https://www.js.education">Click me!</a>
</div> 
*/}
_jsx(
  "div",
  null,
  _jsx(
    "a",
    { href: "https://www.js.education" },
    "Click me!"
  )
)

/* 
const attrs = {
  id: 'myId',
  className: 'myClass'
 }
 return <div {...attrs} /> 
*/
var attrs = {
  id: 'myId',
  className: 'myClass'
 }
_jsx('div', attrs)

