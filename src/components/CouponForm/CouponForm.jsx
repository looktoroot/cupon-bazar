import React from 'react';

import {html} from '../../helpers';
import Coupon from '../../components/coupon'
import Counter from '../../components/shared/Counter';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';


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
                        <form
                            className={bem.element('form')}
                            action={''}
                        >
                            <div className={bem.element('form-row')}>
                                <div className={bem.element('form-col')}>
                                    <Input
                                        label={'Image url'}
                                        name={'imageUrl'}
                                        placeholder={'http://'}
                                    />
                                </div>
                            </div>
                            <div className={bem.element('form-row')}>
                                <div className={bem.element('form-col', 'third')}>
                                    <Input
                                        label={'Old price'}
                                        name={'oldPrice'}
                                    />
                                </div>
                                <div className={bem.element('form-col', 'third')}>
                                    <Input
                                        label={'New price'}
                                        name={'newPrice'}
                                    />
                                </div>
                                <div className={bem.element('form-col', 'third')}>
                                    <Input
                                        label={'Coupon price'}
                                        name={'couponPrice'}
                                    />
                                </div>
                            </div>
                            <div className={bem.element('form-row')}>
                                <div className={bem.element('form-col')}>
                                    <Input
                                        label={'Title'}
                                        name={'title'}
                                        placeholder={'http://'}
                                    />
                                </div>
                            </div>
                            <div className={bem.element('form-row')}>
                                <div className={bem.element('form-col', 'third')}>
                                    <Input
                                        label={'Expiration date'}
                                        name={'expirationDate'}
                                    />
                                </div>
                                <div className={bem.element('form-col', '2-third')}>
                                    <Input
                                        label={'Location'}
                                        name={'location'}
                                    />
                                </div>
                            </div>
                            <div className={bem.element('form-row')}>
                                <div className={bem.element('form-col')}>
                                    <Input
                                        label={'Item url'}
                                        name={'itemUrl'}
                                        placeholder={'http://'}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={bem.element('footer')}>
                    <Button
                        action={'save'}
                        label={'Save'}
                    />
                    <Button
                        action={'cancel'}
                        label={'Cancel'}
                    />
                </div>
            </div>
        );
    }
}
