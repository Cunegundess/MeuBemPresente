import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    date: "19 de Março de 2023",
    title: "O Início da Nossa História",
    text: "Foi nesse dia que tudo começou... eita Açaí que valeu a pena :)",
    image: "/assets/19_marco_2023.jpeg",
  },
  {
    date: "12 de Março de 2023",
    title: "Dia que você conheceu os meus pais",
    text: "Mistura de frio na barriga e vergonha alheia deles te mostrando fotos minha de bebê...",
    image: "/assets/12_marco_2023.jpeg",
  },
  {
    date: "30 de Abril de 2023",
    title: "Nossa Primeira Viagem juntos",
    text: "Esse aqui foi um dia legal KKKK, o dia que minha tia se apaixonou por vc e pelo seu café",
    image: "/assets/30_abril_2023.jpeg",
  },
  {
    date: "01 de Agosto de 2023",
    title: "Aquela indireta de leve",
    text: "O dia que a gente foi comer no subway e vc me deu essa indireta de leve... to esperto em KKK",
    image: "/assets/1_agosto_2023.jpeg",
  },
  {
    date: "09 de Dezembro de 2023",
    title: "Enfim a Aliança chegou!!",
    text: "Lembra dessa surpresa muito bem arquitetada que te dei?? KKKK Eu lembro como se fosse ontem, um dos dias mais especiais pra mim!",
    image: "/assets/9_dezembro_2023.jpeg",
  },
];

export default function OurHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-pink-700">Nossa História 💖</h1>
        <p className="mt-2 text-lg text-gray-700">
          Uma linha do tempo cheia de momentos especiais.
        </p>
      </motion.div>

      <div className="mt-10 space-y-12">
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? "items-start" : "items-end"
              }`}
          >
            <Card className="max-w-md bg-white shadow-lg rounded-lg p-4">
              <CardContent>
                <h2 className="text-xl font-bold text-pink-600">{event.title}</h2>
                <p className="text-sm text-gray-600">{event.date}</p>
                <img
                  src={event.image}
                  alt={event.title}
                  className="mt-4 w-full h-100 object-cover rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-800">{event.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-white p-6 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-3xl font-bold text-pink-700">💌 Edição Especial do Nosso Jornal 💌</h2>
        <p className="mt-4 text-lg">
          Hoje celebramos não só um número, mas um capítulo lindo da nossa história.
          Cada momento juntos foi um presente, e estamos apenas começando essa linda jornada.
        </p>
        <p className="mt-2 text-lg">
          Obrigado(a) por ser minha melhor companhia, meu amor. Que venham muitos anos de felicidade! ❤️
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-pink-700">📸 Galeria de Memórias</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/assets/memoria1.jpg" className="w-full h-40 object-cover rounded-lg shadow-md" />
          <img src="/assets/memoria2.jpg" className="w-full h-40 object-cover rounded-lg shadow-md" />
          <img src="/assets/memoria3.jpg" className="w-full h-40 object-cover rounded-lg shadow-md" />
          <img src="/assets/memoria4.jpg" className="w-full h-40 object-cover rounded-lg shadow-md" />
          <img src="/assets/memoria5.jpg" className="w-full h-40 object-cover rounded-lg shadow-md" />
          <img src="/assets/memoria6.jpg" className="w-full h-40 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}
