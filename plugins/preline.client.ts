import "preline/preline";
import { type IStaticMethods } from "preline/preline";
import { HSOverlay } from 'preline';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    window.HSStaticMethods.autoInit();
    nuxtApp.provide("HSOverlay", HSOverlay);
  });
});