export function formatMoney(cents: number) {
  if (typeof cents !== "number") {
    throw new Error("O valor deve ser um número em centavos.");
  }

  const reais = cents / 100;
  return reais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
