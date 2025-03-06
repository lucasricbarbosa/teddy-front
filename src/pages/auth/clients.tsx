import { CircleOff } from "lucide-react";
import { ClientCard } from "../../components/clients/ClientsCard/clients-card";
import { CreateClientButton } from "../../components/clients/CreateClient/create-client-button";
import { Skeleton } from "../../components/ui/skeleton";
import { useClientsGET } from "../../hooks/clients/useClientsGET";

export function Clients() {
  const { data, isLoading, isSuccess } = useClientsGET({
    page: 1,
    limit: 10,
    isSelected: false,
  });

  return (
    <main className="mx-auto min-h-[calc(100dvh-90px)] max-w-7xl p-5">
      <div className="flex items-center justify-between gap-5">
        {isSuccess ? (
          <div className="flex items-center gap-1">
            <strong>{data.clients.length}</strong>
            <p>clientes encontrados</p>
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
              defaultValue="8"
              className="border-border focus:border-primary focus:ring-primary block w-fit rounded-lg border bg-transparent px-2 py-1 text-xs"
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="24">24</option>
              <option value="32">32</option>
            </select>
          </form>
        </div>
      </div>
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
              <span>Nenhum cliente cadastrado</span>
            </div>
          ) : (
            data.clients.map((client, index) => (
              <div
                key={client.id}
                className="mt-5 grid grid-cols-1 gap-5 overflow-x-hidden min-[464px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                <ClientCard client={client} key={index} />
              </div>
            ))
          )}
        </>
      )}
      <div className="py-5">
        <CreateClientButton />
      </div>
    </main>
  );
}
