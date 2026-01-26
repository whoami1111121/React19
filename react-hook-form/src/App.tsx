import Alluser from "./components/getuserFromjsonPlaceholder/Alluser";
import RHForm from "./components/RHForm";
import RHFormAtlistOne from "./components/RHForm atlist one value req fail";
import RHFormAtlistOne2 from "./components/RHForm atlist one value req try 2";
import RHFormMyP1 from "./components/RHFormMyP1";
import UseFieldArray from "./components/useFieldArray";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <h1 className="text-4xl text-red-900">hello</h1>
        {/* <RHForm /> */}
        {/* <RHFormMyP1 /> */}
        {/* <Alluser /> */}
        {/* <RHFormAtlistOne /> */}
        {/* <UseFieldArray /> */}
        <RHFormAtlistOne2 />
      </div>
    </>
  );
}

export default App;
