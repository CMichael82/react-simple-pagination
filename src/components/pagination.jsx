import React, { Component } from "react";
import './pagination.css';

//Create an Array of items
const listItems = [];
for (var i = 0; i < 57; i++) {
	listItems.push("This is Item " + (i + 1));
}

//Create an array of page numbers based on the # of items ÷ items/page
const pageNumbers = []
const itemsPerPage = 10;
const totalPages = Math.ceil(listItems.length / itemsPerPage);
for (let i = 1; i <= totalPages; i++) {
	pageNumbers.push(i);
}

class Pagination extends Component {

	state = {
		currentPage: 1,
	}

	pageChange = (e) => {
		this.setState({
			currentPage: e.target.id
		},
			() => console.log("Current Page #: ", this.state.currentPage));
	}

	render() {
		const { currentPage } = this.state;

		//Set variables needed to slice array
		const sliceEnd = currentPage * itemsPerPage;
		const sliceBegin = sliceEnd - itemsPerPage;

		// The slice() method returns a portion of an array into a new array object. The parameters specify the start/end indexes of the original array. The original array is not modified. 
		const slicedItems = listItems.slice(sliceBegin, sliceEnd);

		const renderedList = slicedItems.map((item, index) => {
			return <li
				className="list-item"
				key={`index-${index}`}
			>{item}</li>
		});

		const renderedTabs =
			pageNumbers.map((number) => {
				return <li
					className="number-tabs"
					id={number}
					key={`page-${number}`}
					onClick={this.pageChange}
				>{number}</li>
			});

		return (
			<div className="wrapper">
				<h1>An Example of Pagination</h1>
				<span><i>The process of splitting content into pages</i></span>
				<ul className="list-container">{renderedList}</ul>

				<span className="click-message">
					<i>click on tabs below to see other items</i>
				</span>
				<ul className="tab-container">
					<button
						className="number-tabs"
						id={currentPage > 1 ? currentPage - 1 : 1}
						onClick={this.pageChange}
					>&laquo; Previous
					</button>

					{renderedTabs}

					<button
						className="number-tabs"
						id={currentPage < totalPages ? Number(currentPage) + 1 : totalPages}
						onClick={this.pageChange}
					>Next &raquo;</button>
				</ul>

			</div>
		)
	}
}

export default Pagination;