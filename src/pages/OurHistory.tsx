import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  {
    date: "11 de Dezembro de 2023",
    title: "Sua formatura",
    text: "O dia que você se formou no ensino médio, foi a primeira formatura que participei, ver o brilho e a alegria no seu sorriso fez minha noite",
    image: "/assets/11_dezembro_2023.jpeg",
  },
  {
    date: "5 de Março de 2024",
    title: "Nosso primeiro aniversário de namoro",
    text: "Nosso primeiro aniversário de namoro, acordar com esse seu bom dia fez meu dia valer muito a pena, assim como todos os dias que passo ao seu lado",
    image: "/assets/5_marco_2024.jpeg",
  },
  {
    date: "20 de Julho de 2024",
    title: "Nosso role no Sheriff",
    text: "Não sei te explicar, mas esse role marcou meu ano, ver você feliz com suas batidas e cantarolando as músicas kkkk amo ver você se divertindo",
    image: "/assets/20_julho_2024.jpeg",
  },
  {
    date: "27 de Outubro de 2024",
    title: "Prainhaa :)",
    text: "kkkk eu nem sabia nadar e você me puxou pra dar uns mergulho, engoli água até pelo nariz, mas passar esse tempo com você e sua família foi incrível (não vejo a hora de ir denovo)",
    image: "/assets/27_outubro_2024.jpeg",
  },
  {
    date: "28 de Fevereiro de 2025",
    title: "Você me puxou pra Praia e eu te puxei pra Minas",
    text: "Espero que tenha gostado de ver tanto mato kkkkkkkk brincadeira, tivemos tantos momentos bons mas o que mais tá grudado na minha cabeça é você dançando com o Luque (Lupe, Duke sla) kkkkk",
    image: "/assets/28_fevereiro_2025.jpeg",
  },
];

export default function OurHistory() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      shapes: ["circle", "square"] as const,
      colors: ["#FF69B4", "#FF1493", "#FF69B4", "#FF0000"],
    });
  };

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const startDate = new Date("2023-03-05T00:00:00");
      const currentDate = new Date();

      const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
      const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    calculateTimeElapsed();
    const timer = setInterval(calculateTimeElapsed, 1000);

    triggerConfetti();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-100 to-rose-100 px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-700 mb-4 tracking-tight">
          Nossa História 💖
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
          <p className="text-lg text-pink-600 font-medium mb-4">
            Estamos juntos há:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">
                {timeElapsed.years}
              </span>
              <span className="text-sm text-gray-600">Anos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">
                {timeElapsed.months}
              </span>
              <span className="text-sm text-gray-600">Meses</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">
                {timeElapsed.days}
              </span>
              <span className="text-sm text-gray-600">Dias</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">
                {timeElapsed.hours}
              </span>
              <span className="text-sm text-gray-600">Horas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">
                {timeElapsed.minutes}
              </span>
              <span className="text-sm text-gray-600">Minutos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">
                {timeElapsed.seconds}
              </span>
              <span className="text-sm text-gray-600">Segundos</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16 max-w-6xl mx-auto">
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "sm:items-start" : "sm:items-end"
            } items-center`}
          >
            <Card className="w-full sm:max-w-md bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">
                  {event.title}
                </h2>
                <p className="text-sm font-medium text-gray-600 mb-4">
                  {event.date}
                </p>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-90 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                </div>
                <p className="mt-6 text-gray-800 text-lg leading-relaxed">
                  {event.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 sm:mt-20 mx-auto max-w-3xl"
      >
        <div className="p-8 transition-all duration-300 text-lg text-center font-bold text-gray-800 leading-relaxed">
          Cada momento ao seu lado é uma nova página dessa história que estamos
          escrevendo juntos. São tantas memórias especiais que não caberiam em
          uma única página... Seu sorriso ilumina meus dias e seu amor
          transforma minha vida. Obrigado por ser minha parceira, minha
          confidente, minha melhor amiga e meu amor. Que nosso amor continue
          crescendo e que possamos criar milhares de novas memórias juntos. Você
          é o melhor presente que a vida poderia me dar! ❤️
        </div>

        <div className="p-8 transition-all duration-300 text-lg text-center font-bold text-gray-800 leading-relaxed">
          Eu te amo muito meu bem, e tenho fé que daqui pra frente, muitas
          coisas boas vão acontecer e que Deus estará cada vez mais presente nas
          nossas vidas e cada vez mais irá nos preencher com seu espírito santo,
          nos dando sabedoria, paz, plenitude e muito amor.
        </div>
      </motion.div>
    </div>
  );
}
