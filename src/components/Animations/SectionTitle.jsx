import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => {
  return (
    <div className="overflow-hidden inline-block w-full">
      <motion.h3
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="text-[17px] sm:text-[20px] font-bold tracking-widest text-gray-800 dark:text-gray-200 relative inline-block pb-2"
      >
        {title}

        <span className="absolute -right-4 -bottom-3 flex gap-1">
          {[0, 1, 2].map((i) => {
            const colorClass =
              i === 0
                ? 'text-emerald-300 dark:text-emerald-400'
                : i === 1
                ? 'text-emerald-500 dark:text-emerald-500'
                : 'text-emerald-700 dark:text-emerald-600';

            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
                className={`${colorClass} text-2xl`}
              >
                •
              </motion.span>
            );
          })}
        </span>
      </motion.h3>
    </div>
  );
};

export default SectionTitle;
