import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

let renderCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
  phno: string[];
};
const RHForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      phno: ["", ""],
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
    <div className="w-70 mx-auto py-12">
      <h2>React Hook Form :- {renderCount / 2}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4 flex-col"
        noValidate
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            id="username"
            {...register("username", { required: "user name is req" })}
          />
          <p className="text-red-700">{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="w-full px-6 py-2 border border-white rounded-2xl"
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
            className="w-full px-6 py-2 border border-white rounded-2xl"
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
        <div>
          <br />
          <label htmlFor="channel">phone no:</label>
          <input
            type="text"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            {...register("phno.0")}
            id="channel"
          />
          <br />
          <input
            type="text"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            {...register("phno.1")}
            id="channel"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default RHForm;
