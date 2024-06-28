import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encrypt = () => {
    const letters = input.toLowerCase().split("");
    let sentence = "";

    letters.map((l) => {
      switch (l) {
        case "a":
          sentence += "ai";
          break;
        case "e":
          sentence += "enter";
          break;
        case "i":
          sentence += "imes";
          break;
        case "o":
          sentence += "ober";
          break;
        case "u":
          sentence += "ufat";
          break;

        default:
          sentence += l;
          break;
      }
    });

    setOutput(sentence);
  };

  const decrypt = () => {
    const descriptografar = (textoCriptografado) => {
      // Substituições na ordem inversa da criptografia
      textoCriptografado = textoCriptografado.replace(/ufat/g, "u");
      textoCriptografado = textoCriptografado.replace(/ober/g, "o");
      textoCriptografado = textoCriptografado.replace(/imes/g, "i");
      textoCriptografado = textoCriptografado.replace(/enter/g, "e");
      textoCriptografado = textoCriptografado.replace(/ai/g, "a");
      return textoCriptografado;
    };

    setOutput(descriptografar(input.toLowerCase()));
  };

  // As "chaves" de criptografia que utilizaremos são:
  // A letra "a" é convertida para "ai"
  // A letra "e" é convertida para "enter"
  // A letra "i" é convertida para "imes"
  // A letra "o" é convertida para "ober"
  // A letra "u" é convertida para "ufat"

  return (
    <>
      <main className="h-screen flex flex-col justify-between bg-zinc-100 text-blue-900 container p-2 gap-4">
        <div>
          <img src="/src/assets/logo.svg" alt="Logo" className="" />
        </div>
        <section className="w-full p-2">
          <textarea
            placeholder="Digite uma mensagem..."
            className="bg-transparent border-none cursor-text outline-none p-2 w-full font-bold text-xl"
            onChange={(e) => setInput(e.target.value)}
            value={input ? input : ""}
          />
        </section>
        <section className="flex flex-col justify-start items-start">
          <p className="font-bold underline ">
            Apenas letras minúsculas e sem acento.
          </p>
          <div className="flex flex-col gap-2 p-2 w-full">
            <Button
              style={
                "flex justify-center itens-center bg-blue-900 text-zinc-200 border-zinc-200 border font-extrabold p-3 mx-3 rounded-xl "
              }
              onClick={encrypt}
            >
              Criptografar
            </Button>

            <Button
              style={
                "flex justify-center itens-center bg-zinc-200 text-blue-900 border-blue-900 border font-extrabold p-3 mx-3 rounded-xl"
              }
              onClick={decrypt}
            >
              Descriptografar
            </Button>
          </div>
        </section>

        {!output ? (
          <div className="w-full flex flex-col bg-white p-6 rounded-xl">
            <p className="font-extrabold text-2xl text-zinc-700 text-center">
              Nenhuma mensagem encontrada
            </p>
            <p className="text-xl text-zinc-700 text-center">
              Digite um texto que você deseja criptografar ou descriptografar.
            </p>
          </div>
        ) : (
          <section className="w-full flex flex-col bg-white p-6 gap-3 rounded-xl">
            <p className="text-xl font-bold text-wrap text-center">{output}</p>
            <Button
              style={
                "flex justify-center itens-center bg-zinc-200 text-blue-900 p-3 mx-6 border-blue-900 border font-extrabold rounded-xl"
              }
              onClick={console.log("clicou COPIAR")}
            >
              Copiar
            </Button>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
