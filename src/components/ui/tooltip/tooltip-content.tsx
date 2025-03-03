import { getArrowClasses } from "../../../utils/getArrowClasses";
import { getPositionClasses } from "../../../utils/getPositionClasses";
import { useTooltip } from "./tooltip-root";

interface TooltipContentProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function TooltipContent({
  text,
  position = "top",
}: TooltipContentProps) {
  const { isVisible } = useTooltip();

  return (
    <>
      {isVisible && (
        <div className={`absolute z-10 ${getPositionClasses({ position })}`}>
          <div className="border-border rounded border bg-white px-2 py-1 text-sm whitespace-nowrap text-white shadow-lg dark:bg-black">
            {text}
            <div
              className={`absolute h-2 w-2 ${getArrowClasses({ position })}`}
            />
          </div>
        </div>
      )}
    </>
  );
}
