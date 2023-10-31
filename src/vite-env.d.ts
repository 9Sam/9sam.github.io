/// <reference types="vite/client" />

declare module "tailwind-config" {
   const config: Config;
   export default config;
}

declare module "*.svg?react" {
   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
   export default content;
}
