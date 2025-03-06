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
import { useDialog } from "../../../ui/dialog/dialog-root";
import { toast } from "sonner";

export function CreateClientForm() {
  const { mutate: createClientFn, isPending } = useClientPOST();
  const { setOpen } = useDialog();

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
          setOpen(false);
          toast.success("Cliente criado com sucesso!");
        },
        onError: () => {
          toast.error("Erro ao criar o cliente!");
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
            placeholder="0,00"
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
        Criar cliente
      </Button>
    </form>
  );
}
