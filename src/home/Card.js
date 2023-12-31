import React from "react";
import { Link} from "react-router-dom";

export const Card = ({ user = { posts: [] } }) => (
  
  // The <article> tag specifies independent, self-contained content.
   <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
    <div className="border p-4 h-100 d-flex flex-column">
      
  {/* 
  Card is passed down props from CardList.
     It uses that data to display the info that is seen  
     within each individual card.
  */}


      <h2 className="font-weight-lighter flex-fill">
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h2>
      
      <Link to={`/users/${user.id}/posts`} className="mt-2">  
        {user.posts.length} Posts » 
       </Link> 
      
    </div>
  </article>
  
);

export default Card;