"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import profileImg from '../../assets/images/urjit-upadhyay-profiles.jpg';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const badgeText = "👋 Welcome to my portfolio";
  const subtitleText = "Flutter Developer · MERN Developer · Backend Engineer · Blockchain Enthusiast";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="hero section overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.div
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="hero-badge mb-4"
                variants={itemVariants}
              >
                {badgeText}
              </motion.div>

              <motion.h1
                className="display-4 fw-bold mb-4"
                variants={itemVariants}
              >
                I&apos;m <span className="text-gradient">Urjit Upadhyay</span>
                <span className="d-block mt-2" style={{ color: 'var(--gray)', fontSize: '1.25rem', fontWeight: 400 }}>
                  {subtitleText}
                </span>
              </motion.h1>

              <motion.p
                className="lead mb-4"
                style={{ color: 'var(--gray)' }}
                variants={itemVariants}
              >
                I craft <span className="text-gradient">beautiful cross-platform apps</span> with Flutter and build <span className="text-gradient">scalable backend systems</span>.
              </motion.p>

              <motion.div
                className="d-flex gap-3"
                variants={itemVariants}
              >
                <MagneticButton>
                  <a className="btn btn-brand" href="#projects">View Projects</a>
                </MagneticButton>
                <MagneticButton>
                  <a className="btn btn-outline-brand" href="#contact">Contact</a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <motion.div
              className="avatar-tech mx-auto"
              style={{ width: 320 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <motion.div
                className="avatar-inner"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={profileImg}
                  alt="Urjit Upadhyay profile"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
