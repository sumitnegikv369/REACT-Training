import { useState, useEffect } from "react";

const useClipboard = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [copied, setCopied] = useState(false);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setValue(text);
            console.log("Text copied to clipboard!");
            return true;
        } catch (err) {
            console.error("Failed to copy text:", err);
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
                setCopied(true);
                setValue(text);
                console.log("Text copied to clipboard!");
            return true;
            } catch (err) {
                console.error("FFailed to copy text:", err);
                return false;
            }
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCopied(false);
            setValue("");
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [copied]);

    return [value, handleCopy, copied];
};

export default useClipboard;
