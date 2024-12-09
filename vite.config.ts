import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});


















// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       // Proxying requests starting with "/extensions" to the target server
//       '/extensions': {
//         target: 'https://extensions.chatgptextension.ai',
//         changeOrigin: true,
//         secure: false, // Use true if the target server has a valid SSL certificate
//         rewrite: (path) => path.replace(/^\/extensions/, ''), // Optional: Removes "/extensions" from the request path
//       },
//     },
//   },
// });
