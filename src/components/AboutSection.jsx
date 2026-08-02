import Section from "./Section";
import {
  MapPin,
  Languages,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";
const iconMap = { MapPin, Languages, GraduationCap, Rocket };

const AboutSection = ({ data, tinytitle }) => {
  const { heading, headingAccent, bio, photo, facts, colleagueTags } = data;

  return (
    <Section id="meet-you" title={tinytitle}>
      <div className="mb-12 mx-0 md:mx-20 lg:mx-58">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {heading} <span className="text-primary">{headingAccent}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mx-0 md:mx-20 lg:mx-58">
        {/* Left — photo + bio */}
        <div className="flex flex-col gap-6">
          <div className="w-full aspect-[4/3] rounded-2xl bg-text/5 border border-text/10 overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="May"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                Your photo here
              </div>
            )}
          </div>
          {bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-muted space-y-7 leading-relaxed text-left leading-8 text-base text-sm md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right — profile cards */}
        <div className="flex flex-col gap-5">
          {/* Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map(({ label, value, icon }) => {
              const Icon = iconMap[icon];

              return (
                <div
                  key={label}
                  className="rounded-2xl border border-text/10 overflow-hidden bg-white/5 hover:shadow-lg transition-all"
                >
                  {/* Card Header */}
                  <div className="px-5 py-3 border-l-4 border-primary bg-primary/[0.04]">
                    <div className="flex items-center gap-4">
                      {Icon && <Icon className="w-4 h-4 text-primary" />}

                      <span className="text-xs uppercase tracking-[0.18em] font-mono font-semibold text-primary">
                        {label}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-5 py-4">
                    <span className="text-sm text-text leading-relaxed">
                      {value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colleague Tags */}
          <div className="rounded-2xl border border-text/10 overflow-hidden bg-white/5 hover:shadow-lg transition-all">
            {/* Header */}
            <div className="px-5 py-3 border-l-4 border-primary bg-primary/[0.04]">
              <div className="flex items-center gap-4">
                <Sparkles className="w-4 h-4 text-primary" strokeWidth={1.8} />

                <span className="text-xs uppercase tracking-[0.18em] font-mono font-semibold text-primary ">
                  How I'm Described
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {colleagueTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl bg-primary/5 border border-primary/10 text-xs text-muted transition-all duration-200 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
