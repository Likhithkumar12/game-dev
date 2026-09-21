import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'work' | 'education' | 'certification' | 'milestone';
  title: string;
  company?: string;
  date: string;
  description: string;
  highlights?: string[];
}

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Trainee Software Engineer (Unity Game Developer)',
      company: 'Juego Studios Pvt. Ltd. · Bangalore, India',
      date: 'Feb 2025 – Present',
      description: 'Building and shipping 2D/3D Unity games across casual mobile and real-time multiplayer. Working on gameplay systems, Photon Fusion 2 networking, physics-based mechanics, and performance optimization.',
      highlights: [
        'Unity 2D/3D',
        'Photon Fusion 2',
        'Physics & AI',
        'Mobile Optimization',
      ],
    },
    {
      id: 2,
      type: 'education',
      title: 'B.E. Computer Science & Engineering',
      company: 'AJ Institute of Engineering and Technology, Mangalore',
      date: 'May 2025',
      description: 'Strong foundation in data structures, algorithms, and software engineering.',
    },
    {
      id: 3,
      type: 'certification',
      title: 'Certifications',
      date: '2023 – 2025',
      description: 'Completed industry-recognized certifications in game development and modern tooling.',
      highlights: [
        'Unity 3D Game Development',
        'Git and GitHub',
        'Design Principles in Game Dev',
        'AI for Developers (Cursor AI, Copilot)',
        'Unity Artificial Intelligence',
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      case 'certification': return Award;
      case 'milestone': return Trophy;
      default: return Briefcase;
    }
  };

  const getColorClasses = (type: string) => {
    switch (type) {
      case 'work': return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/50' };
      case 'education': return { bg: 'bg-secondary/20', text: 'text-secondary', border: 'border-secondary/50' };
      case 'certification': return { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/50' };
      case 'milestone': return { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50' };
      default: return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/50' };
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent" />
            <span className="font-display text-sm uppercase tracking-widest text-accent">Journey</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Experience &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"> Education</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const Icon = getIcon(item.type);
            const colors = getColorClasses(item.type);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className={`p-6 rounded-2xl glass-card border ${colors.border} hover:shadow-lg transition-all duration-300`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} mb-4`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                      <span className={`font-display text-xs uppercase tracking-wider ${colors.text}`}>
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    {item.company && (
                      <p className={`font-body text-sm ${colors.text} mb-2`}>{item.company}</p>
                    )}
                    <p className="font-body text-xs text-muted-foreground mb-3">{item.date}</p>
                    <p className="font-body text-muted-foreground text-sm mb-4">{item.description}</p>

                    {item.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded text-xs font-body bg-muted text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center z-10">
                  <div className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-3 h-3 ${colors.text}`} />
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
