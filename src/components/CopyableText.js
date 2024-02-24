import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyableText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={text} className="hover">
      <p
        style={{ cursor: "pointer" }}
        className="clipboard"
        onClick={handleCopy}
      >
        {copied ? "¡copiado!" : text}
      </p>
    </CopyToClipboard>
  );
};

export default CopyableText;
