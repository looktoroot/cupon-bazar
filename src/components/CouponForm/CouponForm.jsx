import React from 'react';

import {html} from '../../helpers';
import Coupon from '../../components/coupon'
import Counter from '../../components/shared/Counter';

import './CouponForm.scss';

const bem = html.bem('CouponForm');

export default class CouponForm extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('col-left')}>
                        <div className={bem.element('coupon-card')}>
                            <Coupon
                                width={{ 0: '100%', md: '300px' }}
                                height="300px"
                                {...this.props.coupon}
                            />

                        </div>
                        <div className={bem.element('counter')}>
                            <Counter/>
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
