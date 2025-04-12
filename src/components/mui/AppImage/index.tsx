import { CSSProperties } from "react";

interface AppImageProps {
  src: string;
  alt?: string;
  sx?: CSSProperties | undefined;
  onClick?: () => void;
}

const AppImage = ({ src, alt = "", sx, onClick, ...rest }: AppImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      {...rest}
      style={sx}
      onClick={onClick}
    />
  );
};

export default AppImage;
