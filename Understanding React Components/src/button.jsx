
// Valid Suntax
// export default function MyBtn() {
//   return <button>
//   Click Me</button>

// }

//Named Export
// export function MyBtn() {
//   return <button>
//   Click Me</button>

// }
//preferred
//naming Convention is capital casing
function MyBtn() {
    //can give inline style {{}}
  return <button style={{'color':'blue'}}>
  Click Me</button>

}
//enables to use component in other part
// Default eporting Allow exporting the single component
//Allow exporting muliple items from a module



export default MyBtn;
