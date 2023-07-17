import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.css';
import { Link } from 'react-router-dom';

function SearchResult({ filterUsers }) {
    return (
        <div>
            {filterUsers && filterUsers.map((user) => (
                <div key={user.id}>
                    <Link to={`/mainpage/${user.username}`}>
                        <article
                            className="dt w-100 bb b--black-05 pb2 mt2 w1"
                            href="#0"
                        >
                            <div className="dtc v-mid user-image">
                                <img
                                    alt="user"
                                    src={user.userImage}
                                    className="ba b--black-10 db"
                                />
                            </div>
                            <div className="dtc v-mid pl3">
                                <h1 className="f6 f5-ns fw6 lh-title white mv0">
                                    {user.username}
                                </h1>
                                <h2 className="f6 fw4 mt0 mb0 gray">
                                    @{user.username}
                                </h2>
                            </div>
                        </article>
                    </Link>
                </div>
            ))}
        </div>
    );
}

SearchResult.propTypes = {
    filterUsers: PropTypes.array,
};

export default SearchResult;
