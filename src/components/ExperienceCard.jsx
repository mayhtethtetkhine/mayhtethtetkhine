// const ExperienceCard = ({ period, position, org, description, bgColor, textColor, logo, type }) =>
// {
//   return (
//     <div
//       className={`relative snap-start shrink-0  w-[90vw] md:w-[50vw] lg:w-[30vw] rounded-4xl p-8 flex flex-col min-h-[480px] shadow-xl`}
//       style={{ backgroundColor: bgColor, boxShadow: "0 10px 35px rgba(120, 90, 120, 0.12)" }}>

//       {/* Current role tag */}
//       <div
//           className="absolute top-6 right-6 z-10 px-4 py-1 rounded-full text-xs font-medium tracking-wide backdrop-blur-md shadow-lg transition-all duration-300 shadow-xl"
//           style={{
//             backgroundColor: "#ffffff70",
//             color: textColor,
//             // border: `0.5px solid #000000`,
//             boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
//           }}
//         >
//           {type}
//       </div>

//       {/* Logo — fixed at top */}
//       <div className="mb-12">
//         {logo ? (
//           <img src={logo} alt={org} className="h-25 w-auto object-contain" />
//         ) : (
//           <div className="w-24 h-10 rounded-md bg-text/10 flex items-center justify-center">
//             <span
//               className={`text-xs font-bold tracking-widest`}
//               style={{ color: textColor }}
//             >
//               {org.slice(0, 7).toUpperCase()}
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Spacer — pushes content down so all cards align at the bottom */}
//       <div className="flex-1" />

//       {/* Content — always starts at the same vertical position */}
//       <div style={{ color: textColor }} className="text-justify">
//         <p className="text-sm tracking-wide mb-4">{period}</p>
//         <h3 className="text-2xl font-bold leading-tight mb-4">
//           {position}
//         </h3>
//         <p className="leading-relaxed">{description}</p>
//       </div>

//     </div>
//   );
// };

// export default ExperienceCard;

// ExperienceCard.jsx
const ExperienceCard = ({ period, position, org, description, logo, type, textColor }) => {
  return (
    <div className="relative pl-10 md:pl-16 pb-16">
      {/* node dot on the spine */}
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

      <div className="flex gap-5 md:gap-8">
        {/* Logo column — beside content, not on top */}
        <div className="shrink-0">
          {logo ? (
            <img
              src={logo}
              alt={org}
              className="h-14 w-14 md:h-19 md:w-19 p-2"
            />
          ) : (
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-text/10 flex items-center justify-center">
              <span className="text-xs font-bold tracking-widest text-muted">
                {org.slice(0, 3).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Content — always 2 rows: (period + type pill) then (position + org + desc) */}
        <div className="flex-1 min-w-0">
          {/* Row 1: period + glassy type pill */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm text-muted tracking-wide">{period}</span>
            {type && (
              <div
                className=" mx-0 md:mx-5 px-4 py-1 rounded-full text-xs font-medium tracking-wide backdrop-blur-md shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: "#ffffff70",
                  color: textColor || "#333",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                {type}
              </div>
            )}
          </div>

          {/* Row 2: position + org + description */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">{position}</h3>
            <p className="text-sm text-muted mb-3">{org}</p>
            <p className="leading-relaxed text-text/80">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;