import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/sanyam0204`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-orange-700 hover:bg-orange-800 text-white p-4 text-3xl rounded-xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
