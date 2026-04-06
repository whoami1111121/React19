import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const DetailPage = ({ detail }) => {
  console.log(detail);
  const form = useForm({
    defaultValues: {
      name: detail.name,
      email: detail.email,
      phone: detail.phone,
      website: detail.website,
    },
  });
  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (detail) {
      form.reset({
        name: detail.name,
        email: detail.email,
        phone: detail.phone,
        website: detail.website,
      });
    }
  }, [detail, form]);

  return (
    <div className="py-8">
      detail
      <br />
      <br />
      <div>
        {detail.username}
        <br />
        {detail.email}
      </div>
      <br />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("name")} /> <br />
          <input type="email" {...register("email")} /> <br />
          <input type="text" {...register("phone")} /> <br />
          <input type="text" {...register("website")} /> <br />
          <button type="submit">subb</button>
        </form>
      </div>
    </div>
  );
};

export default DetailPage;
