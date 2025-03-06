import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../../ui/input";
import {
  createClientSchema,
  CreateClientType,
} from "../validation/createClientSchema";
import { Button } from "../../../ui/button";
import { CurrencyInput } from "../../../ui/currency-input";
import { useClientPOST } from "../../../../hooks/clients/useClientPOST";
import { CheckCircle, PlusCircle } from "lucide-react";

export function CreateClientForm() {
  const { mutate: createClientFn, isPending, isSuccess } = useClientPOST();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      name: "",
      isSelected: false,
    },
  });

  const salaryValue = watch("salary");
  const companyValue = watch("companyValue");

  function onSubmit(values: CreateClientType) {
    createClientFn(
      {
        name: values.name,
        companyValue: values.companyValue,
        isSelected: values.isSelected,
        salary: values.salary,
      },
      {
        onSuccess: () => {
          console.log("Cliente criado com sucesso");
        },
      },
    );
  }

  return (
    <>
      {isSuccess ? (
        <SuccessMessage />
      ) : (
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
                placeholder="Digite o nome do cliente"
                required
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
                placeholder="0,00"
                id="salary"
              />
              {errors.name && (
                <span className="text-sm font-medium text-red-500">
                  {errors.name.message}
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
                placeholder="0,00"
                id="companyValue"
              />
              {errors.name && (
                <span className="text-sm font-medium text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>
          <Button
            isloading={isPending}
            type="submit"
            className="w-full cursor-pointer text-white"
          >
            Criar cliente
          </Button>
        </form>
      )}
    </>
  );
}

function SuccessMessage() {
  return (
    <div className="relative -mt-6 flex flex-col items-center justify-center gap-4 bg-white">
      <div className="flex flex-col">
        <h3 className="flex items-center gap-1 text-lg font-semibold">
          Cliente criado com sucesso{" "}
          <CheckCircle className="text-primary size-4" />
        </h3>
        <p className="text-muted-foreground">
          Você pode conferir o novo cliente na lista de clientes
        </p>
      </div>
      <div className="flex w-full justify-end gap-1">
        <Button className="cursor-pointer" variant={"outline"}>
          Fechar
        </Button>
        <Button className="cursor-pointer gap-1">
          <PlusCircle className="size-4" />
          Criar novo cliente{" "}
        </Button>
      </div>
    </div>
  );
}
