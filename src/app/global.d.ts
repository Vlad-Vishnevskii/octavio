/// <reference types="@types/yandex-maps" />

declare global {
  interface Window {
    ymaps: typeof ymaps;
  }
}

export {};
