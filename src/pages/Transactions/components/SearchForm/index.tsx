import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(data: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Pesquisar transações"
        {...register("query")}
      />
      <button
        type="submit"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Pesquisar
      </button>
    </SearchFormContainer>
  );
}
