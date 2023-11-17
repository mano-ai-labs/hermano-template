/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "react", // React
    "^react-.*$", // React-related imports
    "^next", // Next-related imports
    "^next-.*$", // Next-related imports
    "^next/.*$", // Next-related imports
    "^.*/hooks/.*$", // Hooks
    "^.*/services/.*$", // Services
    "^.*/utils/.*$", // Utils
    "^.*/types/.*$", // Types
    "^.*/pages/.*$", // Components
    "^.*/components/.*$", // Components
    "^[./]", // Other imports
    ".*", // Any uncaught imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
};

export default config;
