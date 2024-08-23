import React from 'react';
import { motion } from 'framer-motion';

const PokemonCard = ({ pokemon }) => {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img className="w-full" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;