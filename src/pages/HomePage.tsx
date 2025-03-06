import PhotosCarousel from "@/components/PhotosCarousel";
import { Button } from "@/components/ui/button";
import { triggerConfetti } from "@/utils/triggerConfetti";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-50 via-pink-100 to-rose-100 text-gray-800 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-8 transition-all duration-300"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-pink-700 leading-tight tracking-tight"
        >
          Oi Minha Querubinha!!
          <motion.p
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="p-4 text-5xl"
          >
            💖
          </motion.p>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 w-full"
        >
          <PhotosCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-4 mt-8"
        >
          <p className="text-xl text-pink-600 font-bold px-4">
            Já adiantando, FELIZ DOIS ANOS MINHA PRINCESA!! 💕
          </p>

          <p className="text-lg font-bold text-gray-700 px-4">
            Esses dias estive pensando em como te agradecer por tudo que você
            faz por mim e por nós. E como você merece um presente especial.
          </p>

          <p className="text-lg font-bold text-gray-700 px-4">
            Então resolvi criar esse site aqui, juntei o útil ao agradável,
            espero que você goste desse presente. Usei um pouco de criatividade
            misturada com amor e o que eu sei fazer de melhor... codar (além de
            te fazer a mulher mais feliz e especial desse mundo).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 space-y-6"
        >
          <p className="text-2xl font-bold text-pink-600">Pronta???</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/nossa-historia">
              <Button
                className="px-10 py-6 text-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
                onClick={triggerConfetti}
              >
                Siim 💝
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
