import React, { Component } from "react";
import "./table.css";

class Table extends Component {

	render() {

		return (
			<table>
				<tbody>
					<tr>
						<th>State</th>
						<th>Population</th>
						<th>Unique Id</th>
					</tr>
					{this.props.data.map(info => (
						<tr>
							<td>{info.state}</td>
							<td>{info.population}</td>
							<td>{info.id}</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
}

export default Table;