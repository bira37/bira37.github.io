declare module "*.scss" {
  const styles: { [key: string]: string };
  export default styles;
}

declare module "*.jpeg";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
