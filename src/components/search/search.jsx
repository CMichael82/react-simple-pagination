import React, { Component } from "react";
import './search.css';
import Table from "../table";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
			isSearching: false,
			searchedList: [],

			data: [{
				state: "california",
				population: "26",
				id: "2cd3"
			},
			{
				state: "alabama",
				population: "53",
				id: "1ab2"
			},
			{
				state: "kansas",
				population: "54",
				id: "4gh5"
			},
			{
				state: "georgia",
				population: "45",
				id: "3ef4"
			},
			{
				state: "tennessee",
				population: "133",
				id: "6kl7"
			},
			{
				state: "mississippi",
				population: "19",
				id: "5ij6"
			},
			{
				state: "wyoming",
				population: "15",
				id: "8op9"
			},
			{
				state: "virginia",
				population: "43",
				id: "7mn8"
			}]
		}
	}

	sortThenSearch = () => {
		var { data, searchValue } = this.state;
		var sortedArray = data.sort(function (a, b) {
			var nameA = a.state;
			var nameB = b.state;
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		var searchedArray = sortedArray.filter(result => (
			result.state.includes(searchValue)) ||
			result.population.includes(searchValue) ||
			result.id.includes(searchValue)
		);
		console.log(searchedArray);
		this.setState({
			searchedList: searchedArray
		})
	}

	handleInputChange = event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
			isSearching: true,
		});
		this.sortThenSearch();
	};

	render() {
		const { data, isSearching, searchedList } = this.state;

		return (
			<div className="wrapper">
				<div className="searching">
					<Table data={isSearching ? searchedList : data} />
					<input name="searchValue" onChange={this.handleInputChange}></input>
				</div>
			</div>
		)
	}
}

export default Search;