import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  social: {
    facebook: string;
    insta: string;
    twitter: string;
  };
};

const RHFormAtlistOne2 = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      social: {
        facebook: "",
        insta: "",
        twitter: "",
      },
    },
    mode: "onSubmit",
  });

  const {
    register,
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors },
  } = form;

  // 👀 watch other fields
  const insta = watch("social.insta");
  const twitter = watch("social.twitter");

  // 🔁 revalidate facebook when others change
  useEffect(() => {
    trigger("social.facebook");
  }, [insta, twitter, trigger]);

  const onSubmit = (data: FormValues) => {
    console.log("SUBMITTED ✅", data);
  };

  return (
    <div className="w-70 mx-auto py-12">
      <h2>At least ONE social required</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* FACEBOOK (validator lives here) */}
        <div>
          <label>Facebook</label>
          <input
            className="w-full px-6 py-2 border rounded-2xl"
            {...register("social.facebook", {
              validate: (_, values) =>
                values.social.facebook ||
                values.social.insta ||
                values.social.twitter ||
                "At least one social link is required",
            })}
          />
        </div>

        {/* INSTAGRAM */}
        <div>
          <label>Instagram</label>
          <input
            className="w-full px-6 py-2 border rounded-2xl"
            {...register("social.insta")}
          />
        </div>

        {/* TWITTER */}
        <div>
          <label>Twitter</label>
          <input
            className="w-full px-6 py-2 border rounded-2xl"
            {...register("social.twitter")}
          />
        </div>

        {/* ERROR */}
        <p className="text-red-600">{errors.social?.facebook?.message}</p>

        <button type="submit">Submit</button>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default RHFormAtlistOne2;
