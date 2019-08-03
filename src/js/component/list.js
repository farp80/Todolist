import React from "react";
import PropTypes from "prop-types";

export class List extends React.Component {
	render() {
		const removeItem = i => {
			this.props.removeTodo(i);
		};
		return (
			<ul className="list-group">
				{this.props.arrayValues.map((item, i) => (
					<li
						className="list-group-item"
						key={i}
						onClick={() => {
							removeItem(i);
						}}>
						{item} <span>x</span>
					</li>
				))}
				<li
					className="list-group-item lastItemInList"
					key={this.props.arrayValues.length}>
					{this.props.arrayValues.length + " items to do"}
				</li>
			</ul>
		);
	}
}

List.propTypes = {
	arrayValues: PropTypes.array,
	removeTodo: PropTypes.func
};
