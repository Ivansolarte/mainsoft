import { ImgProps } from "../../../types/interface.img";

export const Img = ({src, alt, classes, onClick,onDoubleClick }:ImgProps) => {
  return (
    <img src={src} alt={alt} className={classes} onClick={onClick} onDoubleClick={onDoubleClick}/>
  )
}
