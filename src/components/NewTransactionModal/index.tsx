import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles";
import TransactionsContext from "@/contexts/Transactions/context";
import { useContextSelector } from "use-context-selector";

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionInput = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction;
    }
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionInput>({
    resolver: zodResolver(newTransactionSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionInput) {
    try {
      const { description, price, category, type } = data;

      await createTransaction({
        description,
        price,
        category,
        type,
      });

      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              aria-describedby="Descrição"
              required
              {...register("description")}
            />

            <input
              type="number"
              placeholder="Preço"
              aria-describedby="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />

            <input
              type="text"
              placeholder="Categoria"
              aria-describedby="Categoria"
              required
              {...register("category")}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionTypeContainer
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton
                      $variant="income"
                      value="income"
                    >
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton
                      $variant="outcome"
                      value="outcome"
                    >
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionTypeContainer>
                );
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
            >
              Cadastrar
            </button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
