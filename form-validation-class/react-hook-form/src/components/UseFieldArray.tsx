import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const UseFieldArray = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      phnos: [
        {
          num: "",
        },
      ],
      social: [
        {
          link: "",
          username: "",
          remarks: "",
        },
      ],
    },
  });
  const { register, handleSubmit, control, formState } = form;

  const { fields, append, remove } = useFieldArray({
    name: "phnos",
    control,
  });
  const {
    fields: socialFields,
    append: appendSocial,
    remove: removeSocial,
  } = useFieldArray({
    name: "social",
    control,
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-70 pt-12 mx-auto">
      <div>
        useFieldArray
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {fields.map((field, index) => (
                <div key={field.id}>
                  <input
                    className="w-full px-6 py-2 border border-white rounded-2xl"
                    // important to include key with field's id
                    {...register(`phnos.${index}.num`)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <br />
            <div>
              {socialFields.map((field, index) => (
                <div key={field.id}>
                  <input
                    className="w-full px-6 py-2 border border-white rounded-2xl"
                    // important to include key with field's id
                    {...register(`social.${index}.link`)}
                  />
                  <br />
                  <input
                    className="w-full px-6 py-2 border border-white rounded-2xl"
                    // important to include key with field's id
                    {...register(`social.${index}.username`)}
                  />
                  <br />
                  <input
                    className="w-full px-6 py-2 border border-white rounded-2xl"
                    // important to include key with field's id
                    {...register(`social.${index}.remarks`)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => removeSocial(index)}>
                      remove
                    </button>
                  )}
                  <br />
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <button type="button" onClick={() => append({ num: "" })}>
              append
            </button>
            <br />
            <button
              type="button"
              onClick={() =>
                appendSocial({ link: "", username: "", remarks: "" })
              }
            >
              append
            </button>

            <br />
            <button type="submit">sub</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseFieldArray;
