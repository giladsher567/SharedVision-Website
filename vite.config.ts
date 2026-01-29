import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Hebrew Pages
        index: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        contact: resolve(__dirname, "contact.html"),
        lead: resolve(__dirname, "lead.html"), // הוספנו את זה

        // English Pages
        "en/index": resolve(__dirname, "en/index.html"),
        "en/services": resolve(__dirname, "en/services.html"),
        "en/contact": resolve(__dirname, "en/contact.html"),
      },
    },
  },
});
// force update for vercel