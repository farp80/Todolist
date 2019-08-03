import React from "react";
import { List } from "./list.js";

export default class TodoList extends React.Component {
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

	removeTodo(i) {
		let items = this.state.items.filter(item => {
			return item != i;
		});
		console.log(this.state.items);
		// this.setState({
		// 	items: items
		// });
	}

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
							<List
								arrayValues={items}
								removeTodo={this.removeTodo(items[0])}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export class List extends Component{

}
