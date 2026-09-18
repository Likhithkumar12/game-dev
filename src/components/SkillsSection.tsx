import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Gamepad2, Settings, Zap, Wifi, Wrench, Layers } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "primary",
      skills: ["C#", "C++"],
    },
    {
      title: "Unity",
      icon: Gamepad2,
      color: "secondary",
      skills: ["Physics", "Cinemachine", "Timeline", "Animation", "Addressables", "UI Systems"],
    },
    {
      title: "Multiplayer",
      icon: Wifi,
      color: "accent",
      skills: ["Photon Fusion 2", "Client-Server Architecture", "State Synchronization", "Client-Side Prediction"],
    },
    {
      title: "Gameplay & AI",
      icon: Cpu,
      color: "primary",
      skills: ["NavMesh", "Behavior Trees", "Hierarchical State Machines", "Physics-Based Gameplay", "Procedural Generation"],
    },
    {
      title: "Architecture",
      icon: Layers,
      color: "secondary",
      skills: ["Design Patterns", "SOLID", "ScriptableObjects", "Event-Driven Systems", "Modular/Data-Driven Design"],
    },
    {
      title: "Optimization",
      icon: Zap,
      color: "accent",
      skills: ["Unity Profiler", "Object Pooling", "Draw Call Batching", "LOD Systems", "Mobile Optimization", "Frame Rate Stabilization"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "primary",
      skills: ["Git & GitHub", "Rider", "VS Code"],
    },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { icon: string; tag: string; border: string }> = {
      primary: {
        icon: "bg-primary/10 text-primary border border-primary/30",
        tag: "bg-primary/10 text-primary",
        border: "hover:border-primary/50",
      },
      secondary: {
        icon: "bg-secondary/10 text-secondary border border-secondary/30",
        tag: "bg-secondary/10 text-secondary",
        border: "hover:border-secondary/50",
      },
      accent: {
        icon: "bg-accent/10 text-accent border border-accent/30",
        tag: "bg-accent/10 text-accent",
        border: "hover:border-accent/50",
      },
    };
    return map[color] || map.primary;
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
            <span className="font-display text-sm uppercase tracking-widest text-primary">Skills</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Arsenal</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building high-performance multiplayer gaming experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden glass-card border border-border/50 ${colors.border} transition-all duration-500 p-6 space-y-4`}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-body font-medium ${colors.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_hsl(var(--neon-purple)/0.15)]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
