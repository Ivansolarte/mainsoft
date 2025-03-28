import { HProps } from "../../../types/interface.h";

export const H = ({children,classes}:HProps) => {
  return (
    <h1 className={classes}>{children}</h1>
  )
}
