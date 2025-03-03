export const getArrowClasses = ({
  position,
}: {
  position?: "top" | "bottom" | "left" | "right";
}) => {
  switch (position) {
    case "top":
      return "top-full left-1/2 -translate-x-1/2 border-t-black";
    case "bottom":
      return "bottom-full left-1/2 -translate-x-1/2 border-b-black";
    case "left":
      return "top-1/2 left-full -translate-y-1/2 border-l-black";
    case "right":
      return "top-1/2 right-full -translate-y-1/2 border-r-black";
    default:
      return "top-full left-1/2 -translate-x-1/2 border-t-black";
  }
};
