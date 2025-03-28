import { PProps } from "../../../types/interface.p";

export const P = ({children, classes, onClick}:PProps) => {
  return (
    <p className={`${classes}`} onClick={onClick}>{children}</p>
  )
}
