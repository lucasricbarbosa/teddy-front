import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../../ui/input";
import {
  editClientSchema,
  EditClientType,
} from "../validation/editClientSchema";
import { Button } from "../../../ui/button";
import { CurrencyInput } from "../../../ui/currency-input";
import { useClientContext } from "../context/clientContext";
import { useClientGET } from "../../../../hooks/clients/useClientGET";
import { useEffect } from "react";
import { useClientPATCH } from "../../../../hooks/clients/useClientPATH";
import { useDialog } from "../../../ui/dialog/dialog-root";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export function EditClientForm() {
  const { setOpen } = useDialog();
  const { selectedClient } = useClientContext();
  const queryClient = useQueryClient();
  const { mutate: updateClient, isPending } = useClientPATCH();

  const {
    data: client,
    isSuccess,
    isLoading,
  } = useClientGET(selectedClient?.id as number, selectedClient?.id !== null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editClientSchema),
    defaultValues: { name: "", companyValue: 0, salary: 0 },
  });

  useEffect(() => {
    if (isSuccess && client) {
      reset({
        name: client.name,
        companyValue: client.companyValue,
        salary: client.salary,
      });
    }
  }, [isSuccess, client, reset]);

  const salaryValue = watch("salary");
  const companyValue = watch("companyValue");

  function onSubmit(values: EditClientType) {
    updateClient(
      {
        id: selectedClient?.id as number,
        ...values,
      },
      {
        onSuccess: () => {
          setOpen(false);
          toast.success("Cliente editado com sucesso!");
          queryClient.invalidateQueries({ queryKey: ["clients"] });
        },
        onError: () => {
          toast.error("Erro ao editar o cliente!");
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 pt-6 pb-0"
    >
      <div className="flex flex-col gap-4 pb-3">
        <div className="flex flex-col gap-0.5">
          <label className="text-sm font-medium" htmlFor="name">
            Nome
          </label>
          <Input
            type="name"
            placeholder={
              isLoading ? "Carregando..." : "Digite o nome do cliente"
            }
            required
            disabled={isLoading}
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm font-medium text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="text-sm font-medium" htmlFor="salary">
            Salário
          </label>
          <CurrencyInput
            value={salaryValue}
            onChange={(value) => setValue("salary", value)}
            placeholder={isLoading ? "Carregando..." : "0,00"}
            disabled={isLoading}
            id="salary"
          />
          {errors.salary && (
            <span className="text-sm font-medium text-red-500">
              {errors.salary.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="text-sm font-medium" htmlFor="companyValue">
            Valor da empresa
          </label>
          <CurrencyInput
            value={companyValue}
            onChange={(value) => setValue("companyValue", value)}
            placeholder={isLoading ? "Carregando..." : "0,00"}
            disabled={isLoading}
            id="companyValue"
          />
          {errors.companyValue && (
            <span className="text-sm font-medium text-red-500">
              {errors.companyValue.message}
            </span>
          )}
        </div>
      </div>
      <Button
        isloading={isPending}
        type="submit"
        className="w-full cursor-pointer text-white"
      >
        Editar cliente
      </Button>
    </form>
  );
}
