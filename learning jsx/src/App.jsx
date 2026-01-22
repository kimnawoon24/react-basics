import './App.css'

const element1 = <h2>Hello, world!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)
function ElementExpressions () {
  return (
    <section>
      {element1}
      {element2}
    </section>
  )
}
function App() {

  return(
    <>
      <h1>JSX</h1>
      return <ElementExpressions />
    </>
  )
}
// function ObjectArrayExpressions() {
//   const user = {
//     name: "Jane",
//     email: "jane@example.com"
//   };
//   const colors = ["red", "blue", "green"];
//   const numbers = [1, 2, 3, 4, 5];
  
//   return (
//     <div>
//       <p>User: {user.name} ({user.email})</p>
//       <p>First color: {colors[0]}</p>
//       <p>Color count: {colors.length}</p>
      
//       <p>Doubleds: {
//         numbers.map(n => n * 2).join(", ")
//       }</p>
      
//       <p>Evens: {
//         numbers.filter(n => n % 2 === 0).join(", ")
//       }</p>
//     </div>
//   );
// }


// function BasicExpressions() {
//   const name = "John"
//   const age = 25;
//   const isAdmin = true;

//   return(
//     <div>
//       <p>Name: {name}</p>
//       <p>Age next year: {age + 1}</p>
//       <p>{name + "'s Profile"}</p>
//       <p>{`${name} is ${age} years old`}</p>
//       <p>Admin status: {String(isAdmin)}</p>
//     </div>
//   )
// }

// // const language = "JavaScript"

// function App() {
//   return(
//     <>
//       <h1>JSX</h1>
//       <BasicExpressions />
//     </>
//   )
// }

//   return (
//     <>

//     <h1>JSX</h1>

//     {language}

//     </>
//   )
// }
// console.log(element1)
// console.log(element2)

// function App() {

//   return (
//     <>
//       {/*JSX Practices*/}

//      <h1>JSX</h1>

//       <br />
//     </>
//   )
// }

export default App
