"use client";

import { useState } from "react";

import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const EMAIL = "hello@example.com";

export function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 1800);
  }

  return (
    <Button type="button" variant="outline" size="lg" onClick={copyEmail}>
      {isCopied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
      {isCopied ? "Copied" : "Copy email"}
    </Button>
  );
}
