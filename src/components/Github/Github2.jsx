import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Github2() {
  const { user } = useParams();
  const abc = { user };
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(abc.user);
    fetch(`https://api.github.com/users/${abc.user}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        //console.log(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-orange-700 hover:bg-orange-800 text-white p-4 text-3xl rounded-xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github2;
