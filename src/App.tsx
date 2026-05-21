/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-2xl text-blue-900 tracking-tighter">PRO<span className="text-yellow-600">.</span></div>
          <a href="https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20Col%C3%A1geno%20Tipo%20II%20PRO." target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition inline-block">
            Quero Recuperar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Tecnologia Americana Avançada</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-950 mt-4 leading-tight">
            A Ciência do Movimento: Recupere sua Liberdade.
          </h1>
          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            Fórmula ultra-concentrada de Colágeno Tipo II PRO. Atua diretamente na inflamação das juntas, devolvendo flexibilidade e conforto.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20Col%C3%A1geno%20Tipo%20II%20PRO." target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition inline-block">
              Quero Recuperar Meu Movimento
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="https://i.postimg.cc/1RB5WFrS/Preto-01.png" alt="Colágeno Tipo II PRO" className="w-full max-w-md drop-shadow-2xl" />
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center">Como o Tipo II PRO age?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Colágeno UC-II", desc: "Regeneração da cartilagem com tecnologia patenteada." },
              { title: "Cúrcuma Alta", desc: "Ação anti-inflamatória natural potente." },
              { title: "Magnésio Premium", desc: "Suporte essencial para a estrutura articular." }
            ].map(item => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h3 className="font-display font-bold text-xl">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold">Liberdade é o que buscamos.</h2>
          <div className="grid grid-cols-2 gap-6 mt-12">
            {[
              "Alívio profundo da rigidez",
              "Restauração da flexibilidade",
              "Redução de inchaço",
              "Recuperação muscular"
            ].map(b => (
              <div key={b} className="flex items-center gap-3 p-4 border rounded-2xl">
                <CheckCircle className="text-yellow-600 size-6" />
                <span className="font-medium text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <img src="https://i.postimg.cc/dQ6tWCj1/Preto-03.png" alt="Benefícios" className="rounded-3xl shadow-lg" />
      </section>
      
      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center">Escolha o melhor tratamento</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8 items-stretch">
            {/* Kit 1 */}
            <div className="bg-white p-8 rounded-3xl border text-center shadow-sm flex flex-col">
                <img src="https://i.postimg.cc/1RB5WFrS/Preto-01.png" alt="1 Pote" className="mx-auto w-32 mb-6" />
                <h3 className="text-2xl font-bold">1 Pote</h3>
                <p className="text-gray-500 mt-4">Para experimentar</p>
                <div className="text-4xl font-bold mt-6 flex-grow">R$ 147</div>
                <a href="https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20adquirir%20o%20Kit%201%20Pote%20do%20Col%C3%A1geno%20Tipo%20II%20PRO." target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white w-full block py-4 rounded-full font-bold mt-8 hover:bg-blue-800 transition">Comprar Agora</a>
            </div>
            {/* Kit 5 */}
            <div className="bg-blue-900 text-white p-8 rounded-3xl border-4 border-yellow-500 text-center relative shadow-xl transform md:scale-105 flex flex-col">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-blue-900 px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Mais Vendido</span>
                <img src="https://i.postimg.cc/d35sLMVC/5-potes.png" alt="Kit 5 Potes" className="mx-auto w-48 mb-6" />
                <h3 className="text-2xl font-bold">5 Potes</h3>
                <p className="text-blue-200 mt-2">Tratamento Completo</p>
                <div className="text-5xl font-bold mt-6 flex-grow">R$ 397</div>
                <a href="https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20adquirir%20o%20Kit%205%20Potes%20do%20Col%C3%A1geno%20Tipo%20II%20PRO." target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-blue-900 w-full block py-4 rounded-full font-bold mt-8 hover:bg-yellow-400 transition">Comprar Agora</a>
            </div>
            {/* Kit 3 */}
            <div className="bg-white p-8 rounded-3xl border text-center shadow-sm flex flex-col">
                <img src="https://i.postimg.cc/LXdnpMn0/Whats-App-Image-2023-07-03-at-21-02-13-(2).jpg" alt="3 Potes" className="mx-auto w-32 mb-6" />
                <h3 className="text-2xl font-bold">3 Potes</h3>
                <p className="text-gray-500 mt-4">Recomendado</p>
                <div className="text-4xl font-bold mt-6 flex-grow">R$ 297</div>
                <a href="https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20adquirir%20o%20Kit%203%20Potes%20do%20Col%C3%A1geno%20Tipo%20II%20PRO." target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white w-full block py-4 rounded-full font-bold mt-8 hover:bg-blue-800 transition">Comprar Agora</a>
            </div>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold">Para quem é indicado?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">
            {["Artrite", "Artrose", "Bursite", "Ciático", "Dores Lombares"].map(i => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="bg-blue-800 p-6 rounded-full"><Activity className="size-10 text-yellow-500" /></div>
                <span className="font-semibold text-lg">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Social Proof */}
      <footer className="py-12 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 font-semibold text-gray-500"><ShieldCheck className="text-blue-900" /> Aprovado ANVISA</div>
                <div className="flex items-center gap-2 font-semibold text-gray-500"><Zap className="text-blue-900" /> Garantia 30 dias</div>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Colágeno Tipo II PRO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
