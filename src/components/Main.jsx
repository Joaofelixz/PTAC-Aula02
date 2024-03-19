import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");

    return(
     <main>
        <input 
        type="text"
        name=""
        id=""
        anChange={(event)=> SVGAnimateTransformElement(event.target.value)}
        />

        {nome}
   </main>
  );
}