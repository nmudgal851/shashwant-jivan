import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function IncrementValue({ value }) {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 5 });
    const unsubscribe = roundedValue.on("change", (v) => setDisplayValue(v));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value]);

  return <motion.pre>{displayValue}</motion.pre>;
}