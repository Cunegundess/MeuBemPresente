import PhotosCarousel from "@/components/PhotosCarousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 text-gray-800 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-md"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-pink-700 leading-tight"
        >
          730 Dias ao Seu Lado
          <p className="p-2 text-4xl">💖</p>
        </motion.h1>

        <div className="mt-6 w-full">
          <PhotosCarousel />
        </div>

        <p className="mt-6 text-lg text-gray-700 px-4">
          Feliz dois anos, Minha Princesa!! 💕
        </p>

        <p className="mt-2 text-lg text-gray-700 px-4">
          Quis inovar um pouco e pensei em criar esse presente pra você.
        </p>

        <div className="mt-12">
          <p className="text-xl font-medium text-gray-700">Pronta???</p>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Link to="/nossa-historia">
              <Button
                className="mt-6 px-8 py-4 text-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Siim
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
