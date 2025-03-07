import { useEffect } from "react";
import { Skeleton } from "./skeleton";

const LOCAL_STORAGE_KEY = "clientsPerPage";

interface ClientsPerPageSelectorProps {
  clientsPerPage: number;
  totalClients: number | undefined;
  isLoading: boolean;
  onChange: (value: number) => void;
  text?: string;
}

export function ClientsPerPageSelector({
  clientsPerPage,
  totalClients,
  isLoading,
  onChange,
  text = "clientes encontrados",
}: ClientsPerPageSelectorProps) {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, String(clientsPerPage));
  }, [clientsPerPage]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
  };

  return (
    <div className="flex items-center justify-between gap-5">
      {!isLoading && totalClients !== undefined ? (
        <div className="flex items-center gap-1">
          <strong>{totalClients}</strong>
          <p>{text}</p>
        </div>
      ) : (
        <Skeleton className="h-6 w-[180px]" />
      )}
      <div>
        <form className="flex items-center gap-2">
          <label
            htmlFor="clientsPerPage"
            className="text-foreground block text-sm font-medium"
          >
            Clientes por página:
          </label>
          <select
            id="clientsPerPage"
            value={clientsPerPage}
            onChange={handleChange}
            className="border-border focus:border-primary focus:ring-primary block w-fit rounded-lg border bg-transparent px-2 py-1 text-xs"
          >
            <option className="bg-background" value="8">
              8
            </option>
            <option className="bg-background" value="16">
              16
            </option>
            <option className="bg-background" value="24">
              24
            </option>
            <option className="bg-background" value="32">
              32
            </option>
          </select>
        </form>
      </div>
    </div>
  );
}
