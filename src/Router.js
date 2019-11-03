/* eslint-disable no-undef */
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginFormRedux';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router >
            <Scene key='root' hideNavBar> 
                <Scene key='auth'>
                    <Scene
                    titleStyle={{ textAlign: 'center', flex: 1, fontWeight: 'bold' }} 
                    key='login' 
                    component={LoginForm} 
                    title='Please Login'
                    initial 
                    />
                </Scene>
                <Scene key='main'>
                    <Scene
                    titleStyle={{ textAlign: 'center', flex: 1, fontWeight: 'bold' }} 
                    key='employeeList' 
                    component={EmployeeList} 
                    title='Employees'
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    initial
                    />
                    <Scene
                    titleStyle={{ textAlign: 'center', flex: 1, fontWeight: 'bold' }} 
                    key='employeeCreate' 
                    component={EmployeeCreate} 
                    title='Create Employee'
                    />
                </Scene> 
            </Scene>
        </Router>
    );
};

export default RouterComponent;
