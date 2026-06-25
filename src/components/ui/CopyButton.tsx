"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-md hover:bg-gray-100 text-gray-500 transition-colors"
      title="Sao chép số tài khoản"
    >
      {copied ? (
        <Check size={18} className="text-brand-green" />
      ) : (
        <Copy size={18} />
      )}
    </button>
  );
}
