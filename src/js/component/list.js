import React from "react";
import PropTypes from "prop-types";

export const List = props => (
	<ul className="list-group">
		{props.arrayValues.map((item, i) => (
			<li className="list-group-item" key={i}>{item}</li>
		))}
	</ul>
);

List.propTypes = {
	arrayValues: PropTypes.array
};
