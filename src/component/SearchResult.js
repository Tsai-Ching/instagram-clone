import React from "react";
import './SearchResult.css'
import { Link } from "react-router-dom";

const SearchResult = ({filterUsers}) => {
	return (
    <div>
    	{
	        filterUsers.map((user, i) => {
				return (
					<div>
						<article class="dt w-100 bb b--black-05 pb2 mt2 w1" href="#0">
						    <div class="dtc v-mid user-image">
						        <Link to={'/mainpage/' + user.username}><img src={user.userImage} class="ba b--black-10 db"/></Link>
						    </div>
						    <div class="dtc v-mid pl3">
						        <h1 class="f6 f5-ns fw6 lh-title white mv0">{user.username}</h1>
						        <h2 class="f6 fw4 mt0 mb0 gray">@{user.username}</h2>
						    </div>
						</article>


					</div>
				);
			})
		}
	</div>
	)
}

export default SearchResult;