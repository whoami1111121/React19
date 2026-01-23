import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

let renderCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
};
const RHForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
  });
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    // if (data.username === "" || data.email === "" || data.channel === "") {
    //   alert("All fields are required!");
    //   return;
    // }
    console.log(data);
  };
  renderCount++;
  return (
    <div>
      <h2>React Hook Form :- {renderCount / 2}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "user name is req" })}
          />
          <p className="text-red-700">{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
              required: {
                value: true,
                message: "email is required",
              },
              validate: {
                isAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "plz give different email"
                  );
                },
                notBlackList: (value) =>
                  !value.endsWith("bad.com") || "bad email",
              },
            })}
          />
          <p className="text-red-700">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="channel">Channel:</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              validate: {
                noYoutube: (value) => {
                  return value !== "youtube" || "are you commady me";
                },
                noGoogle: (value) => value !== "google" || "what the hack",
              },
            })}
          />
          <p className="text-red-700">{errors.channel?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default RHForm;
