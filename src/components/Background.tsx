"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Generate random dots
    const dots = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        duration: Math.random() * 20 + 10, // 10-30s duration
        delay: Math.random() * 5,
        size: Math.random() * 4 + 2, // 2-6px size
    }));

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full bg-black opacity-20 dark:bg-white dark:opacity-20"
                    style={{
                        top: dot.top,
                        left: dot.left,
                        width: dot.size,
                        height: dot.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: dot.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: dot.delay,
                    }}
                />
            ))}
        </div>
    );
}
