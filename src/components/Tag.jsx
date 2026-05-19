import "../styles/Tag.css";

const Tag = ({ label, rotation = "", reverse = false }) => {
  return (
    <span
      className={`tag-glow ${reverse ? "tag-glow-reverse" : ""} px-4 py-2 rounded-full bg-pink text-lg text-text hover:rotate-0 transition-colors cursor-default`}
    >
      {label}
    </span>
  );
};

export default Tag;