import { CSSProperties } from "react";

interface AppImageProps {
  src: string;
  alt?: string;
  sx?: CSSProperties | undefined;
}

const AppImage = ({ src, alt = "", sx, ...rest }: AppImageProps) => {
  return <img src={src} alt={alt} loading="lazy" {...rest} style={sx} />;
};

export default AppImage;
