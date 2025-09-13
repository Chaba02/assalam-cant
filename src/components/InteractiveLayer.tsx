import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Droplets, Wind, Sparkles, Zap, Filter } from "lucide-react";

const InteractiveLayerStructure = ({ language }) => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const layers = [
    {
      id: 1,
      name: language === "IT" ? "Strato Batteriostatico" : "Bacteriostatic Layer",
      shortName: language === "IT" ? "Protezione" : "Protection",
      description:
        language === "IT"
          ? "Strato esterno trattato con tecnologia Sanitized® AG Swiss per eliminare batteri e virus al contatto"
          : "Outer layer treated with Sanitized® AG Swiss technology to eliminate bacteria and viruses on contact",
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      bgColor: "from-cyan-400/20 via-blue-500/20 to-indigo-600/20",
      glowColor: "shadow-cyan-500/50",
      icon: Shield,
      image: "/layer-protection.webp",
      zIndex: 30,
      scale: 1,
      features: [language === "IT" ? "Antibatterico" : "Antibacterial", language === "IT" ? "Idrorepellente" : "Water-repellent", "Sanitized® AG"],
    },
    {
      id: 2,
      name: language === "IT" ? "Strato Filtrante" : "Filtering Layer",
      shortName: language === "IT" ? "Filtrazione" : "Filtration",
      description:
        language === "IT"
          ? "Strato intermedio con microfibra filtrante ad alta efficienza per catturare particelle microscopiche"
          : "Intermediate layer with high-efficiency filtering microfiber to capture microscopic particles",
      color: "from-purple-400 via-pink-500 to-red-500",
      bgColor: "from-purple-400/20 via-pink-500/20 to-red-500/20",
      glowColor: "shadow-purple-500/50",
      icon: Filter,
      image: "/layer-filter.webp",
      zIndex: 20,
      scale: 0.9,
      features: [language === "IT" ? "Microfibra" : "Microfiber", language === "IT" ? "Alta efficienza" : "High efficiency", language === "IT" ? "Traspirante" : "Breathable"],
    },
    {
      id: 3,
      name: language === "IT" ? "Strato Traspirante" : "Breathable Layer",
      shortName: language === "IT" ? "Comfort" : "Comfort",
      description:
        language === "IT"
          ? "Strato interno morbido e traspirante certificato Oeko-Tex per il massimo comfort sulla pelle"
          : "Soft and breathable inner layer certified Oeko-Tex for maximum comfort on the skin",
      color: "from-emerald-400 via-green-500 to-teal-500",
      bgColor: "from-emerald-400/20 via-green-500/20 to-teal-500/20",
      glowColor: "shadow-emerald-500/50",
      icon: Droplets,
      image: "/layer-breathable.webp",
      zIndex: 10,
      scale: 0.8,
      features: ["Oeko-Tex", language === "IT" ? "Morbido" : "Soft", language === "IT" ? "Ipoallergenico" : "Hypoallergenic"],
    },
  ];

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const getTransformStyle = (layer, isHovered) => {
    const baseRotateX = (mousePosition.y - 0.5) * (isHovered ? 20 : 10);
    const baseRotateY = (mousePosition.x - 0.5) * (isHovered ? 20 : 10);
    const translateZ = isHovered ? 50 : layer.zIndex;
    const scale = isHovered ? 1.1 : layer.scale;

    return {
      transform: `perspective(1000px) rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
      transformStyle: "preserve-3d",
    };
  };

  return (
    <section className="section-chapp bg-gradient-to-b from-background to-card/20 overflow-hidden">
      <div className="container-chapp">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-display-lg font-display font-bold text-foreground mb-4">
            {language === "IT" ? (
              <>
                Struttura a{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-medium">
                  Strati
                </span>{" "}
                Avanzata
              </>
            ) : (
              <>
                Advanced{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-medium">
                  Layer
                </span>{" "}
                Structure
              </>
            )}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "IT" ? "Tecnologia multi-strato per protezione completa e comfort superiore" : "Multi-layer technology for complete protection and superior comfort"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive 3D Layer Visualization */}
          <motion.div
            ref={containerRef}
            className="relative h-96 lg:h-[500px]"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-emerald-400/10 blur-3xl rounded-full" />

            <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
              {layers.map((layer) => {
                const Icon = layer.icon;
                const isActiveOrHovered = activeLayer === layer.id || hoveredLayer === layer.id;

                return (
                  <motion.div
                    key={layer.id}
                    className={`absolute w-80 h-80 rounded-3xl cursor-pointer transition-all duration-500 ${
                      isActiveOrHovered ? `bg-gradient-to-br ${layer.color} ${layer.glowColor} shadow-2xl` : `bg-gradient-to-br ${layer.bgColor} backdrop-blur-sm border border-white/10`
                    }`}
                    onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    whileHover={{ scale: 1.05 }}
                    animate={{ rotateZ: activeLayer === layer.id ? [0, 360] : 0 }}
                    transition={{ rotateZ: { duration: 2, repeat: activeLayer === layer.id ? Infinity : 0, ease: "linear" } }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <defs>
                            <pattern id={`pattern-${layer.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#pattern-${layer.id})`} />
                        </svg>
                      </div>

                      {/* Icon */}
                      <motion.div className="relative mb-4" animate={{ scale: hoveredLayer === layer.id ? [1, 1.2, 1] : 1, rotateY: activeLayer === layer.id ? [0, 180, 360] : 0 }} transition={{ duration: 1 }}>
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                          <Icon className={`w-10 h-10 ${isActiveOrHovered ? "text-white" : "text-white/80"}`} />
                        </div>

                        {/* Floating particles */}
                        {isActiveOrHovered && (
                          <div className="absolute inset-0">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{ left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 40}%`, top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 40}%` }}
                                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>

                      {/* Layer number */}
                      <div className={`text-6xl font-bold mb-2 ${isActiveOrHovered ? "text-white" : "text-white/60"}`}>{layer.id}</div>
                      {/* Layer name */}
                      <h3 className={`text-heading-sm font-semibold text-center ${isActiveOrHovered ? "text-white" : "text-white/80"}`}>{layer.shortName}</h3>

                      {/* Active effects */}
                      {activeLayer === layer.id && (
                        <>
                          <motion.div className="absolute top-4 right-4" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 180 }}>
                            <Sparkles className="w-6 h-6 text-white" />
                          </motion.div>
                          <motion.div className="absolute inset-0 rounded-3xl border-2 border-white/50" animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Instructions */}
            <motion.div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
              <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80 border border-white/10">
                {language === "IT" ? "Passa il mouse e clicca per esplorare" : "Hover and click to explore"}
              </div>
            </motion.div>
          </motion.div>

          {/* Layer Info Panel */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {activeLayer ? (
                <motion.div key={`active-${activeLayer}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
                  {(() => {
                    const layer = layers.find((l) => l.id === activeLayer);
                    const Icon = layer.icon;

                    return (
                      <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${layer.color} text-white overflow-hidden`}>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <h3 className="text-heading-xl font-bold mb-1">{layer.name}</h3>
                              <div className="text-white/80">{language === "IT" ? "Strato" : "Layer"} {layer.id}</div>
                            </div>
                          </div>

                          <p className="text-body-lg leading-relaxed mb-6 text-white/90">{layer.description}</p>

                          <div className="space-y-3">
                            <h4 className="text-heading-sm font-semibold mb-3">{language === "IT" ? "Caratteristiche principali:" : "Key features:"}</h4>
                            {layer.features.map((feature, index) => (
                              <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
                                <div className="w-2 h-2 rounded-full bg-white/80" />
                                <span className="text-white/90">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                          <Icon className="w-full h-full" />
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div key="default" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <Zap className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
                    <h3 className="text-heading-lg font-semibold text-foreground mb-3">{language === "IT" ? "Tecnologia Multi-Strato" : "Multi-Layer Technology"}</h3>
                    <p className="text-body-md text-muted-foreground leading-relaxed">{language === "IT" ? "Clicca su uno degli strati per scoprire le sue caratteristiche uniche e la tecnologia avanzata che lo rende speciale." : "Click on one of the layers to discover its unique characteristics and the advanced technology that makes it special."}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {layers.map((layer, index) => {
                      const Icon = layer.icon;
                      return (
                        <motion.button key={layer.id} className={`p-4 rounded-2xl bg-gradient-to-br ${layer.bgColor} border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 group`} onClick={() => setActiveLayer(layer.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                          <Icon className="w-8 h-8 text-white/80 group-hover:text-white mx-auto mb-2 transition-colors" />
                          <div className="text-sm text-white/80 group-hover:text-white transition-colors">{layer.shortName}</div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLayerStructure;
