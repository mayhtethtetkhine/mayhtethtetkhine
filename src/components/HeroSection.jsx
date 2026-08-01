
import { TypeAnimation } from 'react-type-animation';
import TypingLine from "./TypingLine";
import { Download } from "lucide-react";

const formatResumeDate = (filename) =>
{
  const match = filename.match(/(\d{2})(\d{2})(\d{4})/);
  if (!match) return null;

  const [, day, month, year] = match;
  const date = new Date(`${year}-${month}-${day}`);

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};


const HeroSection = ({ data }) =>
{

  const { heading, highlightWords, bio, resumeUrl } = data;
  const resumeUpdatedDate = formatResumeDate(resumeUrl);

  return (
    <section className="lg:min-h-screen md:min-h-[100svh] min-h-[90svh] flex flex-col justify-end px-10 md:px-40 pb-20 pt-2 md:pt-32">

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-10">
        {heading.map((line, i) =>
        {
          const words = line.split(" ");

          return (


            <span key={i}>
              {i === 1 ? (
                <TypingLine
                  line={line}
                  highlightWords={highlightWords}
                  speed={30}
                />
              ) : (
                words.map((word, idx) => (
                  <span
                    key={idx}
                    className={
                      highlightWords.includes(word.replace(".", ""))
                        ? "text-primary"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))
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


      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 self-start">
        <a href={`/document/${resumeUrl}`} download="Resume_May_Htet_Htet_Khine.pdf">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 rounded-none cursor-pointer"
          >
            <Download size={15} strokeWidth={1.8} />
            Download Résumé
          </button>
        </a>

        {resumeUpdatedDate && (
          <span className="text-xs text-muted">
            Last commit: {resumeUpdatedDate}
          </span>
        )}
      </div>


    </section>

  );
};

export default HeroSection;