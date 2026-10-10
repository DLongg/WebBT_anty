"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
}

export function CopyButton({ textToCopy, label = "Sao chép số tài khoản" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={label}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
          copied
            ? "bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-sm"
            : "bg-white hover:bg-gray-100 text-gray-600 border border-gray-200 hover:text-brand-gold active:scale-95"
        }`}
        title={label}
      >
        {copied ? (
          <>
            <Check size={14} className="text-emerald-600 stroke-[2.5]" />
            <span>Đã chép</span>
          </>
        ) : (
          <>
            <Copy size={14} className="stroke-[2]" />
            <span>Sao chép</span>
          </>
        )}
      </button>

      {/* Floating toast notification */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-[11px] font-medium py-1 px-2.5 rounded-md shadow-lg pointer-events-none z-30 animate-fade-in-up"
        >
          Đã sao chép số tài khoản
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
