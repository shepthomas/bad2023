import "../../lib/_layout.scss";

const Col = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
}) => {
  let str = "col";
  if (xs) str += " col--xs-" + xs;
  if (sm) str += " col--sm-" + sm;
  if (md) str += " col--md-" + md;
  if (lg) str += " col--lg-" + lg;
  if (xl) str += " col--xl-" + xl;

  if (xsOffset) str += " offset--xs-" + xsOffset;
  if (smOffset) str += " offset--sm-" + smOffset;
  if (mdOffset) str += " offset--md-" + mdOffset;
  if (lgOffset) str += " offset--lg-" + lgOffset;
  if (xlOffset) str += " offset--xl-" + xlOffset;

  return (
    <div className={str + (className ? " " + className : "")}>{children}</div>
  );
};

export default Col;
