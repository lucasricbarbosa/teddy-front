import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";

interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  totalPages: number;
  onPageChange: (page: number) => Promise<void> | void;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
  totalPages,
}: PaginationProps) {
  const itemsShown = Math.min(perPage, totalCount - (pageIndex - 1) * perPage);

  function goToNextPage() {
    onPageChange(pageIndex + 1);
  }

  function goToPreviousPage() {
    onPageChange(pageIndex - 1);
  }

  function goToFirstPage() {
    onPageChange(1);
  }

  function goToLastPage() {
    onPageChange(totalPages);
  }

  return (
    <div className="flex items-center justify-between py-4">
      <div className="text-muted-foreground text-sm">
        Mostrando {itemsShown} de {totalCount} itens
      </div>
      <div className="text-right">
        <div className="inline-flex items-center gap-8">
          <span className="text-sm font-medium">
            Página {totalPages === 0 ? "0" : pageIndex} de {totalPages}
          </span>
          <div className="flex gap-1.5">
            <Button
              className="cursor-pointer"
              size="icon"
              variant="outline"
              onClick={goToFirstPage}
              disabled={pageIndex === 1}
              aria-label="Primeira página"
            >
              <ChevronsLeft className="size-4" />
            </Button>
            <Button
              className="cursor-pointer"
              size="icon"
              variant="outline"
              onClick={goToPreviousPage}
              disabled={pageIndex === 1}
              aria-label="Página anterior"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              className="cursor-pointer"
              size="icon"
              variant="outline"
              onClick={goToNextPage}
              disabled={totalPages === 0 || pageIndex === totalPages}
              aria-label="Próxima página"
            >
              <ChevronRight className="size-4" />
            </Button>
            <Button
              className="cursor-pointer"
              size="icon"
              variant="outline"
              onClick={goToLastPage}
              disabled={totalPages === 0 || pageIndex === totalPages}
              aria-label="Última página"
            >
              <ChevronsRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
