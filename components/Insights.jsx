import React, { useState, useEffect, useRef } from "react";

const cards = [
  {
    bg: "bg-white/80",
    title: "SIH 2024 Winner",
    description:
      "Built a real-world solution for a national problem at the Smart India Hackathon, winning 1st place at the grand finale.",
    image: "/images/sih.png",
  },
  {
    bg: "bg-white/80",
    title: "Hack4Change - 2nd Runner Up",
    description:
      "Secured 3rd place in a national hackathon co-hosted by Google and Charcha which focused on building for social impact",
    image: "/images/h4c.png",
  },
  {
    bg: "bg-white/80",
    title: "2+ Years Freelancing",
    description:
      "Worked with startups and clients across domains delivering full-stack solutions with performance and scalability in mind.",
    image: "/images/freelance.png",
  },
  {
    bg: "bg-white/80",
    title: "7+ Production Projects",
    description:
      "Built and deployed more than 10 real-world apps, from e-commerce to AI tools, ensuring production readiness and UI excellence.",
    image: "/images/project.png",
  },
];

const Insights = () => {
  // Desktop animation logic (unchanged)
  const [visibleCards, setVisibleCards] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

      setScrollProgress(progress);

      // Start animation when section is in view
      if (rect.top <= 0 && rect.bottom > 0) {
        setIsAnimating(true);

        // Show cards based on scroll progress
        const cardCount = 4;
        const cardsToShow = Math.floor(progress * cardCount * 2); // Slower reveal

        const newVisibleCards = [];
        for (let i = 0; i < Math.min(cardsToShow, cardCount); i++) {
          newVisibleCards.push(i);
        }
        setVisibleCards(newVisibleCards);
      } else {
        setIsAnimating(false);
        setVisibleCards([]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-black hidden md:block">
        <div
          ref={sectionRef}
          className="w-full relative"
          style={{ height: "170vh" }}
        >
          <div
            ref={containerRef}
            className={`w-full h-screen flex flex-col gap-32 ${
              isAnimating ? "fixed top-0 left-0" : ""
            }`}
          >
            <div className="w-full flex gap-7 pt-8 px-8 overflow-hidden">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`h-64 w-96 ${
                    card.bg
                  } rounded-lg transition-all duration-500 ease-out transform ${
                    visibleCards.includes(index)
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="p-4 h-full flex flex-col justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-black text-xl font-bold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-800 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom section with accent */}
                    <div className="mt-4 pt-4 border-t border-black/80"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full">
              <h1 className="text-[140px] font-bold px-16 leading-none text-white pb-5  ">
                Insights
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Insights (only on mobile) */}
      <div className="bg-black md:hidden w-full py-12">
        <h2 className="text-4xl font-bold text-white px-6 mb-8">Insights</h2>
        <div className="flex flex-col gap-8 px-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`w-full rounded-2xl ${card.bg} shadow-lg flex flex-row items-center gap-4 p-4`}
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-black text-lg font-bold mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-800 text-xs leading-snug">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Insights;
