"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function GlowCursor() {
    const [mounted, setMounted] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    const glowXValue = useMotionValue(0);
    const glowYValue = useMotionValue(0);
    const glowX = useSpring(glowXValue, springConfig);
    const glowY = useSpring(glowYValue, springConfig);

    useEffect(() => {
        setMounted(true);
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            glowXValue.set(e.clientX);
            glowYValue.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY, glowXValue, glowYValue]);

    if (!mounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x,
                    y,
                    border: "2px solid var(--primary)",
                    backgroundColor: "transparent",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9998] opacity-20 blur-3xl hidden md:block"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                }}
            />
        </>
    );
}
