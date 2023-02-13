import React from "react";

const SearchResult = ({robots}) => {
	return (
    <div>
    	{
	        robots.map((user, i) => {
				return (
					<div>
						<article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
						    <div class="dtc w2 w3-ns v-mid">
						        <img src="https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/n615/0_PUSS-IN-BOOTS.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
						    </div>
						    <div class="dtc v-mid pl3">
						        <h1 class="f6 f5-ns fw6 lh-title white mv0">{robots[i].name}</h1>
						        <h2 class="f6 fw4 mt0 mb0 gray">@haburn</h2>
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