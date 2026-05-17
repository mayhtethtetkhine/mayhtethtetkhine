
const HeroSection = ({ data }) => {
  const { badge, heading, highlightWord, bio } = data;

  return (
    <section className="min-h-screen flex flex-col justify-end px-16 md:px-68 pb-24 pt-32">
      {/* <p className="text-xs tracking-[0.3em] text-primary uppercase mb-6">{badge}</p> */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-10">
        {heading.map((line, i) => {
          const parts = line.split(highlightWord);
          return (
            <span key={i}>
              {parts.length > 1 ? (
                <>
                  {parts[0]}
                  <span className="text-primary">{highlightWord}</span>
                  {parts[1]}
                </>
              ) : (
                line
              )}
              {i < heading.length - 1 && <br />}
            </span>
          );
        })}
      </h1>
      {bio.map((paragraph, i) => (
        <p key={i} className={`text-sm md:text-base text-muted max-w-lg leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default HeroSection;