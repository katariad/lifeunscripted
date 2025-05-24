// lib/InitialDataContext.tsx
"use client";

import { createContext, useContext } from "react";

type Data = Awaited<
  ReturnType<typeof import("./FetchIntialData").fetchInitialData>
>;

const InitialDataContext = createContext<Data | null>(null);

export function InitialDataProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Data;
}) {
  return (
    <InitialDataContext.Provider value={data}>
      {children}
    </InitialDataContext.Provider>
  );
}

export function useInitialData() {
  const context = useContext(InitialDataContext);
  if (!context) {
    throw new Error("useInitialData must be used within InitialDataProvider");
  }
  return context;
}
