/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './EmployeeListItem';

class EmployeeList extends Component {
    state = {
		isLoading: false,
    }

    componentDidMount() {
        this.props.employeesFetch();
    }
    
    renderRefreshControl() {
		this.setState({ isLoading: true });
		this.props.employeesFetch();
	}

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        console.log(this.props);
        return (
            <FlatList
                data={this.props.employees}
                renderItem={({ item: employee }) => this.renderRow(employee)}
                keyExtractor={(item, index) => item.uid}
                onRefresh={() => this.renderRefreshControl()}
				refreshing={this.state.isLoading}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
