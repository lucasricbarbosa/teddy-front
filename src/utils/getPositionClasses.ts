export const getPositionClasses = ({
  position,
}: {
  position?: "top" | "bottom" | "left" | "right";
}) => {
  switch (position) {
    case "top":
      return "bottom-full left-1/2 -translate-x-1/2 mb-1.5";
    case "bottom":
      return "top-full left-1/2 -translate-x-1/2 mt-1.5";
    case "left":
      return "right-full top-1/2 -translate-y-1/2 mr-1.5";
    case "right":
      return "left-full top-1/2 -translate-y-1/2 ml-1.5";
    default:
      return "bottom-full left-1/2 -translate-x-1/2 mb-1.5";
  }
};
