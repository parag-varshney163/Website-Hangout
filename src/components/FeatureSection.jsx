import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";

import FeatureCard from "./FeatureCard";


export default function FeatureSection({
    feature,
    index,
}) {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.92]
    );

    return (

        <section
            ref={ref}
            className="h-[96vh] relative"
        >

            <motion.div
                style={{
                    scale,
                    top: 100,
                    zIndex: index + 1,
                }}
                className="sticky"
            >

                <FeatureCard feature={feature} />

            </motion.div>

        </section>

    );
}
