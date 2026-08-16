// import Section from "./Section";
// import ExperienceCard from "./ExperienceCard";

// const ExperienceSection = ({ data, tinytitle }) => {
//   const { heading, headingAccent, headingSuffix, subheading, items, type } = data;

//   return (
//     <Section id="experience" title= {tinytitle}>
//       <div className="mb-16 px-8 md:px-30">
//         <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           {heading}<br />
//           <span className="text-primary">{headingAccent}</span> {headingSuffix}
//         </h2>
//         <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
//       </div>

//       <div className="flex gap-6 overflow-x-auto pb-6 -mx-8 px-8 md:-mx-10 md:px-10 snap-x snap-mandatory scrollbar-hide">
//         {items.map((exp) => (
//           <ExperienceCard key={exp.org} {...exp} />
//         ))}
//       </div>
//     </Section>
//   );
// };

// export default ExperienceSection;


// ExperienceSection.jsx
import Section from "./Section";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ data, tinytitle }) => {
  const { heading, headingAccent, headingSuffix, subheading, items } = data;

  return (
    <Section id="experience" title={tinytitle}>
      <div className="mb-16 px-8 md:px-30">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span> {headingSuffix}
        </h2>
        <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
      </div>

      <div className="relative px-8 md:px-30">
        {/* the vertical bar / spine */}
        <div className="absolute left-8 md:left-30 top-0 bottom-0 w-px bg-text/15" />

        <div className="flex flex-col">
          {items.map((exp, i) => (
            <ExperienceCard key={exp.org} {...exp} isLast={i === items.length - 1} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;