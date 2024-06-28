import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copy, setCopy] = useState(false);

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
    setCopy(false);

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

      setCopy(false);
      return textoCriptografado;
    };

    setOutput(descriptografar(input.toLowerCase()));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopy(true);
    } catch (err) {
      console.log("Falha ao copiar o texto", err);
    }
  };

  return (
    <>
      <main className="h-screen w-full flex flex-col bg-zinc-100 text-blue-900 container p-2 gap-10 md:jus md:items-center ">
        <div className="md:w-full md:flex md:justify-start md:items-start ">
          <img
            src="/src/assets/logo.svg"
            alt="Logo"
            className="sm:text-2xl sm:p-2"
          />
        </div>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:h-[80vh]">
          <div className="md:h-3/4 md:flex md:flex-col md:justify-between ">
            <section className="w-full p-2">
              <textarea
                placeholder="Digite uma mensagem..."
                className="bg-transparent border-none cursor-text outline-none p-2 w-full font-bold text-xl sm:text-2xl "
                onChange={(e) => setInput(e.target.value)}
                value={input ? input : ""}
              />
            </section>
            <section className="flex flex-col justify-start items-start  ">
              <p className="font-bold underline sm:text-lg">
                Apenas letras minúsculas e sem acento.
              </p>
              <div className="flex flex-col gap-2 p-2 w-full sm:flex-row sm:justify-between sm:items-center ">
                <Button
                  style={
                    "flex justify-center itens-center bg-blue-900 text-zinc-200 border-zinc-200 border font-extrabold p-3 mx-3 rounded-xl sm:w-1/2"
                  }
                  onClick={encrypt}
                >
                  Criptografar
                </Button>

                <Button
                  style={
                    "flex justify-center itens-center bg-zinc-200 text-blue-900 border-blue-900 border font-extrabold p-3 mx-3 rounded-xl sm:w-1/2"
                  }
                  onClick={decrypt}
                >
                  Descriptografar
                </Button>
              </div>
            </section>
          </div>
          {!output ? (
            <div className="w-full flex flex-col bg-white p-6 rounded-xl md:h-fit">
              <p className="font-extrabold text-2xl text-zinc-700 text-center">
                Nenhuma mensagem encontrada
              </p>
              <p className="text-xl text-zinc-700 text-center">
                Digite um texto que você deseja criptografar ou descriptografar.
              </p>
            </div>
          ) : (
            <section className="w-full flex flex-col bg-white p-6 gap-3 rounded-xl md:h-fit md:justify-between md:gap-6">
              <p className="text-xl font-bold text-wrap text-center">
                {output}
              </p>
              <Button
                style={
                  "flex justify-center itens-center bg-zinc-200 text-blue-900 p-3 mx-6 border-blue-900 border font-extrabold rounded-xl"
                }
                onClick={copyToClipboard}
              >
                {copy ? "Copiado" : "Copiar"}
              </Button>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
