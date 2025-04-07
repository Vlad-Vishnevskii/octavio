// global.d.ts
/// <reference types="window" />

declare global {
  interface Window {
    ymaps: typeof import('ymaps'); // Яндекс.Карты API
  }
}

export {};
