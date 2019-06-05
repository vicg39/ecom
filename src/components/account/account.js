import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';

class Account extends Component {

    componentDidMount() {

        const headerLinks = [
            {
                
                title: 'Shop',
                
            },
            {
                
                title: 'Logout',
                
            }
        ]

        const navbarLinks = [
            {
                
                title: 'Purchase History',
                active: true,
                
            },
            {
                
                title: 'Account Information',
                active: false,
                
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        return <h1>content</h1>

    }    
    render() {
        return (
            <div className='account'>
                { this.renderContent() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;