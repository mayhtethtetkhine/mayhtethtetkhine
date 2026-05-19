import { useEffect, useState } from "react";

const TypingLine = ({
    line,
    highlightWords = [],
    speed = 40,
}) =>
{
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() =>
    {
        let index = 0;

        const interval = setInterval(() =>
        {
            setDisplayedText(line.slice(0, index + 1));
            index++;

            if (index >= line.length)
            {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [line, speed]);

    const words = displayedText.split(/(\s+)/);

    return (
        <>
            {highlightWords.reduce(
                (text, word) =>
                {
                    const regex = new RegExp(`(${word})`, "gi");

                    return text.flatMap((part) =>
                    {
                        if (typeof part !== "string") return [part];

                        return part.split(regex).map((piece, idx) =>
                            piece.toLowerCase() === word.toLowerCase() ? (
                                <span key={`${word}-${idx}`} className="text-primary">
                                    {piece}
                                </span>
                            ) : (
                                piece
                            )
                        );
                    });
                },
                [displayedText]
            )}

            {displayedText.length < line.length && (
                <span className="animate-pulse text-text">|</span>
            )}
        </>
    );
};

export default TypingLine;