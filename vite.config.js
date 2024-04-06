import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import react from "@vitejs/plugin-react"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
};
