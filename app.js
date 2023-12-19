// Step 1 : Create React Element => React.createElement() => 3 parameter leta (type, prop, children)
// Step 2 : Create root => ReactDOM.createRoot();
// Step 3 : Rendering (element lega and convert karega usko)

const heading = React.createElement("h1", { id: "heading" }, "Hello world using react 🚀");

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(heading);

// Creating nested elements in React

//  <div class="parent">
//     <div class="child1">
//         <h1>I am H1 tag</h1>
//         <h2>I am H2 tag</h2>
//     </div>

//     <div class="child2">
//         <h1>I am H1 tag</h1>
//         <h2>I am H2 tag</h2>
//     </div>
// </div>


const heading1 = React.createElement("h1", {}, "I am a H1 tag using react");
const heading2 = React.createElement("h2", {}, "I am a H2 tag using react");

const child1 = React.createElement("div", {id: "child1" }, [heading1, heading2]); // agar children ek se jada ho (sibiling childs) toh array me childrens daal do
const child2 = React.createElement("div", {id: "child2" }, [heading1, heading2]); // agar children ek se jada ho (sibiling childs) toh array me childrens daal do

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);