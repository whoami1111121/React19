import React, { useEffect, useState } from "react";
import DetailPage from "./DetailPage";

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const [detail, setDetail] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div>dd</div>
      <div>
        {users?.map((item) => (
          <div key={item.id}>
            {item.name}
            <br />
            <button onClick={() => setDetail(item)}>detail</button>
            <br />
          </div>
        ))}
      </div>
      <div>{detail && <DetailPage detail={detail} />}</div>
    </div>
  );
};

export default Alluser;
