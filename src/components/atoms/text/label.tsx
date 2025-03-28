import { LabelProps } from "../../../types/interface.label";

export const Label = ({classes, children}:LabelProps) => {
  return (
    <label className={classes}>{children}</label>
  )
}
