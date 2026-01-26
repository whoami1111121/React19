import { DevTool } from "@hookform/devtools";
import { useFieldArray, useForm } from "react-hook-form";

let renderCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
  phno: string[];
  phnos: {
    num: string;
  }[];
  dob: Date;
};
const RHForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      phno: ["", ""],
      phnos: [{ num: "" }],
      dob: new Date(),
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState,
    watch,
    getValues,
    setValue,
  } = form;
  const { errors, touchedFields, dirtyFields, isDirty } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  const { fields, append, remove } = useFieldArray({
    name: "phnos",
    control,
  });
  const uName = watch(["username", "email"]);
  const uName2 = watch("username");
  // it watch all form field
  // getValues just like watch - it run just click button or sum action.
  // it don't rerender as watch,

  const handelSetValue = () => {
    // setValue('username', 'abc',{shouldValidate:true, shouldDirty:true, shouldTouch:true})
    form.reset({
      username: "",
      email: "",
      channel: "",
      phno: ["", ""],
      phnos: [{ num: "" }],
      dob: new Date(),
    });
  };
  const uName3 = watch();

  renderCount++;
  return (
    <div className="w-70 mx-auto py-12">
      <h2>
        React Hook Form :- {renderCount / 2} : - {uName[0]} - {uName[1]}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4 flex-col"
        noValidate
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            // disabled
            // if we use this method validation still work and form not submit
            type="text"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            id="username"
            {...register("username", {
              // we can disabled form RHF it is don't apply validation, hear required is true but we can submit form and fild value is undefine
              // disabled: true,
              // disabled: watch('email') === "",
              // we can give conditinal disabled
              required: "user name is req",
            })}
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
          <label>phone no:</label>
          <input
            type="number"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            {...register("phno.0", {
              valueAsNumber: true,
            })}
          />
          <br />
          <input
            type="text"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            {...register("phno.1", {
              valueAsNumber: true,
            })}
            id="channel"
          />
        </div>
        <div>
          <label htmlFor="">phnos list</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="" key={field.id}>
                  <input
                    className="w-full px-6 py-2 border border-white rounded-2xl"
                    type="text"
                    {...register(`phnos.${index}.num` as const)}
                  />
                  {index >= 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ num: "" })}>
              add
            </button>
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="dob">dob:</label>
          <input
            type="date"
            className="w-full px-6 py-2 border border-white rounded-2xl"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
            })}
          />
          <p className="text-red-700">{errors.dob?.message}</p>
        </div>
        <button type="submit">Submit</button>
        <button onClick={handelSetValue}>set value</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default RHForm;
