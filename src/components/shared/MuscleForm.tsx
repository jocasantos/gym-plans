"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

const formSchema = z
  .object({
    genero: z.string({
      required_error: "Escolha uma opção.",
    }),
    idade: z.coerce
      .number({
        required_error: "Insira a sua idade.",
        invalid_type_error: "Insira a sua idade.",
      })
      .int({
        message: "A idade deve ser um número inteiro.",
      })
      .min(13, {
        message: "A idade deve ser maior que 12.",
      }),
    altura: z.coerce
      .number({
        required_error: "Insira a sua altura.",
        invalid_type_error: "Insira a sua altura.",
      })
      .int({
        message: "A altura deve ser um número inteiro.",
      })
      .min(100, {
        message: "A altura deve ser maior que 100 cm.",
      }),
    start_age: z.coerce
      .number({
        required_error: "Insira a idade.",
        invalid_type_error: "Insira a idade.",
      })
      .int({
        message: "A idade deve ser um número inteiro.",
      })
      .min(13, {
        message: "A idade deve ser maior que 12.",
      }),
  })
  .refine((data) => data.start_age <= data.idade, {
    message: "A idade de início deve ser menor ou igual à idade atual.",
    path: ["start_age"], // This specifies which field the error is associated with
  });

// 1. Define an interface for the MuscleForm props
interface MuscleFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void; // Define the type of the onSubmit prop
}

const MuscleForm: React.FC<MuscleFormProps> = ({ onSubmit }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="idade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Idade</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="ex: 20"
                  {...field}
                  value={field.value ?? ""}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Género</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o seu género" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="altura"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Altura (cm)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="ex: 180 cm"
                  {...field}
                  value={field.value ?? ""}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="start_age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Idade em que começou a treinar</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Idade em que começou a praticar ginásio"
                  {...field}
                  value={field.value ?? ""}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submeter</Button>
      </form>
    </Form>
  );
};

export default MuscleForm;
