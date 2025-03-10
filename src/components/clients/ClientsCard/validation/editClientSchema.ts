import { z } from "zod";

export const editClientSchema = z.object({
  name: z
    .string({
      message: "Esse campo é obrigatório",
    })
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  companyValue: z
    .number({
      message: "Esse campo é obrigatório",
    })
    .min(1, "O valor da empresa deve ser maior que 0"),
  salary: z
    .number({
      message: "Esse campo é obrigatório",
    })
    .min(1, "O valor da empresa deve ser maior que 0"),
  selected: z.boolean().optional(),
});

export type EditClientType = z.infer<typeof editClientSchema>;
