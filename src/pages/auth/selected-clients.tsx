import { CircleOff } from "lucide-react";
import { ClientCard } from "../../components/clients/ClientsCard/clients-card";
import { CreateClientButton } from "../../components/clients/CreateClient/create-client-button";
import { Skeleton } from "../../components/ui/skeleton";
import { useClientsGET } from "../../hooks/clients/useClientsGET";
import { useState } from "react";
import { Pagination } from "../../components/ui/pagination";
import { ClientsPerPageSelector } from "../../components/ui/clients-per-page-selector";

export function SelectedClients() {
  const [page, setPage] = useState(1);

  const [clientsPerPage, setClientsPerPage] = useState<number>(() => {
    const savedValue = localStorage.getItem("clientsPerPage");
    return savedValue ? Number(savedValue) : 8;
  });

  const { data, isLoading, isSuccess } = useClientsGET({
    page: page,
    limit: clientsPerPage,
    isSelected: true,
  });

  const handleClientsPerPageChange = (value: number) => {
    setClientsPerPage(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <main className="mx-auto min-h-[calc(100dvh-90px)] max-w-7xl p-5">
      <ClientsPerPageSelector
        clientsPerPage={clientsPerPage}
        totalClients={isSuccess ? data.pagination.total : undefined}
        isLoading={isLoading}
        onChange={handleClientsPerPageChange}
        text="clientes selecionados encontrados"
      />
      {isLoading && (
        <div className="mt-5 grid grid-cols-1 gap-5 overflow-x-hidden min-[464px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton className="h-40 w-full" key={index} />
          ))}
        </div>
      )}

      {isSuccess && (
        <>
          {data.clients.length === 0 ? (
            <div className="text-muted-foreground border-border mt-5 flex w-full flex-col items-center justify-center gap-2 rounded border px-5 py-16 font-medium">
              <CircleOff className="size-5" />
              <span>Nenhum cliente selecionado encontrado</span>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 gap-5 overflow-x-hidden min-[464px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.clients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
            </div>
          )}
        </>
      )}
      <div className="py-5">
        <CreateClientButton />
      </div>
      <div>
        {isSuccess && (
          <Pagination
            totalPages={data.pagination.totalPages}
            pageIndex={page}
            totalCount={data.pagination.total}
            perPage={data.pagination.limit}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  );
}
