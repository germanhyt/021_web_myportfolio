import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import React from "react";

describe("LanguageContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should initialize based on localStorage if present", () => {
    localStorage.setItem("portfolio_lang", "es");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );

    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe("es");
  });

  it("should toggle language and persist in localStorage", () => {
    localStorage.setItem("portfolio_lang", "es");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );

    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe("es");

    act(() => {
      result.current.toggleLang();
    });

    expect(result.current.lang).toBe("en");
    expect(localStorage.getItem("portfolio_lang")).toBe("en");

    act(() => {
      result.current.toggleLang();
    });

    expect(result.current.lang).toBe("es");
    expect(localStorage.getItem("portfolio_lang")).toBe("es");
  });
});
