import React, { useEffect, useState } from 'react';

import {html} from '../../helpers';
import { getCoupons } from '../../api';

import CouponForm from '../../components/CouponForm';
import Layout from '../../containers/Layout';
import './FormPage.scss';

const bem = html.bem('FormPage');

const FormPage = () => {

    const [coupons, updateCoupons] = useState([]);
    const [updateUserCoupons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getCoupons();
            updateCoupons(response);

            updateUserCoupons([response[0]]);
        }
        fetchData();
    }, []);

    return (
        <Layout>
            <div className={bem.block()}>
                <div className={bem.element('title')}>
                    Add
                </div>
                <div className={bem.element('sub-title')}>
                    Your trading card will be formed here
                </div>
                <div className={bem.element('form')}>
                    <CouponForm
                        coupon={coupons[0]}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default FormPage;
