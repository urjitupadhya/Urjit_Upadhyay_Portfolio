"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import localProjects from "../data/projects.user.json";

// 🖼 Import images
import evoteImg from "../../assets/images/evote.jpg";
import oneKeyImg from "../../assets/images/one key.jpg";
import resumeBuilderImg from "../../assets/images/resume_builder .jpg";
import gdgcImg from "../../assets/images/gdgc.jpg";

function resolveProjectImage(path) {
  if (!path || typeof path !== "string") return gdgcImg;
  if (path.startsWith("http")) return path;
  const map = {
    "assets/images/evote.jpg": evoteImg,
    "assets/images/onekey.jpg": oneKeyImg,
    "assets/images/one key.jpg": oneKeyImg,
    "assets/images/resume_builder.jpg": resumeBuilderImg,
    "assets/images/resume_builder .jpg": resumeBuilderImg,
    "assets/images/gdgc.jpg": gdgcImg,
  };
  return map[path] ?? `/${path}`;
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="col-md-6 col-lg-4"
    >
      <div
        className="card h-100 project-card"
        style={{
          transform: "translateZ(50px)",
          borderRadius: 16,
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(20,20,26,0.85) 0%, rgba(14,14,18,0.85) 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="card-img" style={{ height: 220, position: "relative", overflow: "hidden" }}>
          <Image
            src={resolveProjectImage(project.image)}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className="project-overlay">
            <div className="d-flex gap-2">
              {project.github && (
                <a href={project.github} className="btn-icon" target="_blank" rel="noreferrer">
                  <i className="lab la-github" />
                </a>
              )}
              {project.hosted && (
                <a href={project.hosted} className="btn-icon" target="_blank" rel="noreferrer">
                  <i className="las la-external-link-alt" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="card-body" style={{ padding: 20 }}>
          <h5 className="text-gradient mb-2 fw-bold">{project.title}</h5>
          <p className="small text-light-gray opacity-80">{project.description}</p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {project.tags?.map(tag => (
              <span key={tag} className="badge-outline">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const [projects] = useState(localProjects);

  return (
    <section id="projects" className="section overflow-hidden">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase tracking-wider">Portfolio</h6>
          <h1 className="display-5 fw-bold text-white">Featured Projects</h1>
          <p className="lead text-gray mx-auto" style={{ maxWidth: 600 }}>
            Exploring the intersection of design and technology through practical applications.
          </p>
        </div>

        <div className="row g-4" style={{ perspective: 1000 }}>
          {projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
