import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchUsersWithPosts } from "../api";
import ErrorMessage from "../common/ErrorMessage";

function CardList(){
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    fetchUsersWithPosts(abortController.signal).then(setUsers).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }
  
  // The Card List Component makes the fetch API call that grabs the user data. We pass down that data to Card to display on each individual card. CardList defines the structure of how we will use that data. We need that info to know how many containers to set based on how many users and how the containers will be placed on page. Each container is assigned its own key defined by the user id. 


  //set a variable to equal to the user data mapped out into 
  const list = users.map((user) => <Card key={user.id} user={user} />);

  return (
    /*{list} is the variable declared above */
    <main className="container">
       <section className="row"> {list} </section>         
    </main>
  );
};

export default CardList;
