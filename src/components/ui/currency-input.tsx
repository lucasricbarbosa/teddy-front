import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Input } from "./input";

interface CurrencyInputProps {
  value?: number;
  onChange: (value: number) => void;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
}

export function CurrencyInput({
  value,
  onChange,
  id,
  placeholder = "Digite o valor",
  disabled = false,
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = useState<string>("");

  const formatValue = (value: number): string => {
    const reais = value / 100;
    return reais
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace("R$", "")
      .trim();
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/\D/g, "");
      const centsValue = parseInt(rawValue, 10) || 0;
      const formattedValue = formatValue(centsValue);

      setDisplayValue(formattedValue);
      onChange(centsValue);
    },
    [onChange],
  );

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    e.target.setSelectionRange(0, 0);
  }, []);

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setDisplayValue(formatValue(value));
    }
  }, [value]);

  return (
    <div className="relative">
      <Input
        type="text"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className="pl-9"
        aria-label="Currency input"
        id={id}
        disabled={disabled}
      />
      <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
        R$
      </span>
    </div>
  );
}
