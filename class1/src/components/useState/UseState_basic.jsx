import { useState } from "react";

const UseState_basic = () => {
  const [user, setUser] = useState({
    name: "user",
    age: 12,
    email: "ram@gmail.com",
    address: {
      city: "ktm",
      cuntry: "npl",
      zip: 100,
    },
  });

  const chaerUserdata = () => {
    setUser({
      ...user,
      name: "hari bahadur",
      age: 100,
      address: { ...user.address, city: "pokk" },
    });
  };
  return (
    <div>
      <h1>
        name {user.name} age : {user.age} email {user.email} city :{" "}
        {user.address.city}
      </h1>

      <button onClick={chaerUserdata}>Change</button>
    </div>
  );
};

export default UseState_basic;
