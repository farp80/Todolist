import React from "react";
import PropTypes from "prop-types";

export class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			currentValue: "",
			items: ["Go to Publix", "Carry kids to park"]
		};
	}

	onClick = () => {
		const { currentValue, items } = this.state;
		if (currentValue) {
			const nextState = [...items, currentValue];
			this.setState({ items: nextState, currentValue: "" });
		}
	};

	onChange = e => this.setState({ currentValue: e.target.value });

	removeItem = i => {
		let todos = this.state.items.slice();
		todos.splice(i, 1);
		this.setState({
			items: todos
		});
	};

	render() {
		const { items, currentValue } = this.state;
		return (
			<div>
				<div className="container todoListDiv">
					<h1>To Do List</h1>
					<div className="row">
						<div className="col">
							<div className="input-group mb-3">
								<input
									type="text"
									value={currentValue}
									onChange={this.onChange}
									className="form-control"
									placeholder="Task ..."
									aria-label="Task ..."
									aria-describedby="basic-addon2"
								/>
								<div className="input-group-append">
									<button
										onClick={this.onClick}
										className="btn btn-outline-secondary"
										type="button">
										Add
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<ul className="list-group">
								{this.state.items.map((item, i) => (
									<li
										className="list-group-item"
										key={i}
										onClick={() => {
											console.log("VALUE" + i);
											this.removeItem(i);
										}}>
										{item}
										<span>x</span>
									</li>
								))}
								<li
									className="list-group-item lastItemInList"
									key={this.state.items.length}>
									{this.state.items.length + " items to do"}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
