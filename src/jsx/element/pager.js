import React, { Component } from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";

class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: 0,
      activePage: 1,
      limit: 6
    };
  }
  //Handle total records if comes
  componentDidMount = nextProps => {
    this.setState({
      totalRecords: nextProps ? nextProps.totalRecords : this.props.totalRecords
    });
  };

  //Handle Page Change
  handlePageChange = page => {
    this.setState({
      activePage: page
    });
    this.props.getAllData(page);
  };

  componentWillReceiveProps = nextProps => {
    this.componentDidMount(nextProps);
  };

  //Return pagination UI
  render() {
    // let { totalRecords } = this.state;
    let { limit, activePage, totalRecords } = this.props;
    return (
      <div className="pagination-wrapper" style={{ marginLeft: "30%" }}>
        <Pagination
          aria-label=""
          itemClass="page-item"
          linkClass="page-link"
          prevPageText="Prev"
          nextPageText="Next"
          firstPageText="First"
          lastPageText="Last"
          activePage={activePage > 0 ? activePage : 1 }
          itemsCountPerPage={limit}
          totalItemsCount={totalRecords}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

Pager.propTypes = {
  totalRecords: PropTypes.any,
  limit: PropTypes.any,
  activePage: PropTypes.number,
  getAllData: PropTypes.any
};

export default Pager;