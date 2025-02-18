import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heart, Calendar, Camera, Mail } from "lucide-react";
import "swiper/css"

function LoveAnniversary() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 text-gray-800 px-6">
      <div className="mt-16 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Nossos Momentos 💑
        </h2>
        <Swiper spaceBetween={20} slidesPerView={1} loop>
          {[
            "/images/photo1.jpg",
            "/images/photo2.jpg",
            "/images/photo3.jpg",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} className="w-full rounded-lg shadow-md" alt="Momentos" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-16 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Nossa História 📅
        </h2>
        <div className="space-y-6">
          {[
            { date: "18 Fev 2023", text: "Nosso primeiro dia juntos", icon: <Heart /> },
            { date: "12 Jun 2023", text: "Nosso primeiro Dia dos Namorados", icon: <Calendar /> },
            { date: "20 Dez 2024", text: "Nossa viagem inesquecível", icon: <Camera /> },
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg"
            >
              <div className="p-3 bg-pink-100 rounded-full">{event.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{event.date}</h3>
                <p className="text-gray-600">{event.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Cartas de Amor 💌
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Para Você 💕",
              text: "Desde o primeiro dia, você iluminou minha vida de um jeito especial. Te amo!",
            },
            {
              title: "Nosso Futuro ✨",
              text: "Mal posso esperar para viver mais momentos incríveis ao seu lado!",
            },
          ].map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white shadow-md rounded-lg text-center"
            >
              <Mail className="mx-auto text-pink-500" />
              <h3 className="text-lg font-bold mt-4">{letter.title}</h3>
              <p className="text-gray-600 mt-2">{letter.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LoveAnniversary;
