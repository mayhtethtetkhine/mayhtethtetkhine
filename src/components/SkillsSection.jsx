// import Section from "./Section";
// import Tag from "./Tag";

// const TAG_ROTATIONS = [
//   "-rotate-3", "rotate-2", "-rotate-4", "rotate-5",
//   "-rotate-5", "rotate-4", "-rotate-2", "rotate-2",
// ];

// const SkillsSection = ({ data, tinytitle }) =>
// {
//   const { heading, headingAccent, subheading, items } = data;

//   return (
//     <Section id="what-i-do" title={tinytitle}>
//       <div className="mb-16 px-8 md:px-30">
//         <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           {heading}<br />
//           <span className="text-primary">{headingAccent}</span>
//         </h2>
//         <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
//       </div>

//       <div className="flex flex-col">
//         {items.map(({ title, description, tags }) => (
//           <div key={title} className="py-14 border-t border-text/10">
//             <h3 className="text-3xl md:text-5xl font-bold mb-10 px-8 md:px-30">{title}</h3>
//             <div className="grid gap-10 items-start">
//               {/* <p className="text-muted leading-relaxed">{description}</p> */}
//               <div className="flex flex-wrap gap-4 px-8 md:px-30">
//                 {tags.map((tag) => (
//                   <Tag key={tag} label={tag} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// export default SkillsSection;


import { useRef } from "react";
import Section from "./Section";
import Tag from "./Tag";

const SkillsSection = ({ data, tinytitle }) => {
  const { heading, headingAccent, subheading, items } = data;

  return (
    <Section id="what-i-do" title={tinytitle}>
      <style>{`
        @keyframes skills-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: skills-marquee 30s linear infinite;
        }
        .marquee-track:hover,
        .marquee-track.paused {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="mb-16 px-8 md:px-30">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
      </div>

      <div className="flex flex-col">
        {items.map(({ title, tags }) => (
          <div
            key={title}
            className="py-15 border-t border-text/10 px-8 md:px-30 grid md:grid-cols-[minmax(0,1fr)_2fr] gap-6 md:gap-10 items-center"
          >
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>

            {/* Mobile: static wrapped tags, like the original */}
            <div className="flex flex-wrap gap-4 md:hidden">
              {tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            {/* Desktop: infinite marquee, pause + scroll on hover */}
            <div className="hidden md:block relative overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="marquee-track flex gap-4 w-max py-5">
                {[...tags, ...tags].map((tag, i) => (
                  <Tag key={`${tag}-${i}`} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;