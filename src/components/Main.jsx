import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const[telefone, setTelefone]= useState("");

    return(
     <main>
      <form>
       <label>Nome:</label> <input type="text "name="nome-contato" id="nome" onChange={(event)=> setNome(event.target.value)}/>
        {nome}

        <label>Telefone:</label><input type="tel"name="telefone-contato" id="telefone" onChange={(event)=> setTelefone(event.target.value)}/>
        {telefone}

        <button>enviar</button>
        </form>
   </main>
  );
}