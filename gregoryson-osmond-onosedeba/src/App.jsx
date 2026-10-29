import Counterapp from "./components/Counterapp";
import Simpleformapp from "./components/Simpleform";
import ToggletextApp from "./components/Toggletextapp";

const app =()=> {

  return(

    <div>
      <Counterapp/>
      <ToggletextApp/>
      <Simpleformapp/>
    </div>
  )
}

export default app;