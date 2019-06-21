import React from 'react';

import {html} from '../../helpers';
import CouponCard from './views/CouponCard';


import './CouponForm.scss';


const bem = html.bem('CouponForm');

export default class CouponForm extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('col-left')}>
                        <div className={bem.element('coupon-card')}>
                            <CouponCard
                                imageUrl={'https://ireplace.ru/images/companies/1/goods/airpods-ireplace.jpg.pagespeed.ce.4kcJXThlfK.jpg'}
                                ratingInfo={'active for 1 month'}
                                rating={5}
                                title={'Apple AirPods'}
                                description={'Famous airpods headphones from the company Apple'}
                                info={'Megaplaza'}
                                wavesPrice={2}
                                usdPrice={159}
                                usdDiscountPrice={143.1}
                            />
                        </div>
                        <div className={bem.element('counter')}>
                            counter
                        </div>
                    </div>
                    <div className={bem.element('col-right')}>
                        <div className={bem.element('form')}>
                            form
                        </div>
                    </div>
                </div>
                <div className={bem.element('footer')}>
                    footer
                </div>
            </div>
        );
    }
}
