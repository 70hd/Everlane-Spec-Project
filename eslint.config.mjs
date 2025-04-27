import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
// import { FlatCompat } from "@eslint/eslintrc";

// const compat = new FlatCompat();

// // Using the flat config format without a parser key
// const eslintConfig = [
//   compat.extends("next"),
// ];

// export default eslintConfig;