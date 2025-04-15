"use client";
import Image from "next/image";

export default function Home() {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id); // Obtém o elemento pelo id
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento
    }
  };

  return (
    <main className="mx-2">
      <header className="border-b p-4 mb-2">
        <h1 className="text-xl font-bold text-center">Toques de Apito</h1>
        <h2 className="text-sm font-bold text-center">Contra-Mestre CEA</h2>
      </header>
      <button onClick={() => scrollToElement("apitos-rotina")} className="w-5/6 block cursor-pointer mx-auto rounded-full p-2 border mb-2 bg-sky-300 hover:bg-sky-800 hover:text-white">Apitos de rotina</button>
      <button onClick={() => scrollToElement("apitos-cerimonia")} className="w-5/6 block cursor-pointer mx-auto rounded-full p-2 border mb-2 bg-sky-300 hover:bg-sky-800 hover:text-white">Apitos de cerimônia</button>
      
      {/* Apitos de rotina*/}
      <div id="apitos-rotina">
        <h3 className="text-lg font-bold mb-2">Apitos de rotina</h3>
        <ol className="mx-2 list-decimal list-inside">
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Alvorada</span>. Horário: 6:00</p>
            <audio controls className="mx-auto rounded-full">
              <source src="alvorada.mp3" type="audio/mpeg"/>
              Seu navegador não suporta a tag de áudio.
            </audio> 
          </li>
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Rancho Geral</span>. Horário: 10:40</p>
            <audio controls className="mx-auto rounded-full"> 
              <source src="rancho.mp3" type="audio/mpeg"/>
              Seu navegador não suporta a tag de áudio.
            </audio> 
          </li>
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Volta</span>. Horário: 14:00</p>
            <audio controls className="mx-auto rounded-full"> 
              <source src="volta.mp3" type="audio/mpeg"/>
              Seu navegador não suporta a tag de áudio.
            </audio>
          </li>
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Reunir Divisão de Serviço (Parada)</span>. Horário: 17:10</p>
            <audio controls className="mx-auto rounded-full"> 
              <source src="parada.mp3" type="audio/mpeg"/>
              Seu navegador não suporta a tag de áudio.
            </audio>
          </li>
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Silêncio</span>. Horário: 22:00</p>
            <audio controls className="mx-auto rounded-full"> 
              <source src="silencio.mp3" type="audio/mpeg"/>
              Seu navegador não suporta a tag de áudio.
            </audio>
          </li>
        </ol>
      </div>

      {/* Apitos de cerimônia*/}
      <div id="apitos-cerimonia">
        <h3 className="text-lg font-bold mb-2">Apitos de cerimônia (Autoridades)</h3>
        <ol className="mx-2 list-decimal list-inside">
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Of. Superior (Comandante)</span>.</p>
            <p>Este toque não possui arquivo de áudio disponível no sítio do CIAMA.</p>
            <p>Segue a partitura com os fonemas.</p>
            <div>
              <span className="block underline">RA RI RA  #</span>
              <span className="block">(LAAAA LAAAA LAAAA LA MI LA # LAAA MI) 2 vezes</span>
            </div>
            <Image
              src="/OfSuperiorCmd.png"
              alt="Of. Superior"
              width={800}
              height={400}
              className="mx-auto"
            />
          </li>
          <li className="mb-2">
            <p className="inline"><span className="font-bold">Of. General</span>.</p>
            <audio controls className="mx-auto rounded-full">
              <source src="OfGeneral.mp3" type="audio/mpeg"/>
              Seu navegador não suporta a tag de áudio.
            </audio> 
          </li>
        </ol>
      </div>
    </main>
  );
}
