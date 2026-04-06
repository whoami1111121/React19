import React from "react";
import { useForm } from "react-hook-form";
interface IFormInput {
  name: string;
  age: number;
  email: string;
}
const RHFormMyP1 = () => {
  const form = useForm<IFormInput>({
    defaultValues: {
      name: "",
      email: "",
      age: 0,
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  return (
    <div>
      <h1>RHFormMyP1 RHFormMyP1</h1>
      <div className="w-70 mx-auto py-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-4 flex-col"
          noValidate
        >
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "name is req",
              },
              maxLength: {
                value: 20,
                message: "name max len is 20",
              },
              minLength: {
                value: 3,
                message: "nave min len is 3",
              },
            })}
            className="w-full px-6 py-2 border border-white rounded-2xl"
          />
          <p>{errors.name?.message}</p>
          <input
            {...register("age", {
              required: {
                value: true,
                message: "age is req",
              },
              min: {
                value: 5,
                message: "you are under age",
              },
              max: {
                value: 99,
                message: "are you ghost",
              },
            })}
            type="number"
            className="w-full px-6 py-2 border border-white rounded-2xl"
          />
          <p>{errors.age?.message}</p>

          <input
            {...register("email")}
            type="email"
            className="w-full px-6 py-2 border border-white rounded-2xl"
          />
          <p>{errors.email?.message}</p>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default RHFormMyP1;
