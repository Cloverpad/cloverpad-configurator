import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    basicSsl(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "apple-touch-icon.png",
        "favicon.ico",
        "mask-icon.svg",
        "mmj-icon.svg",
      ],
      manifest: {
        name: "Cloverpad Configurator",
        short_name: "Cloverpad Configurator",
        description: "Configurator for the Cloverpad, a 3-key keypad for osu!",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
    solid(),
  ],
});
