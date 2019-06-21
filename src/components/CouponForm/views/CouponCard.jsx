import React from 'react';

import {html} from '../../../helpers';


import './CouponCard.scss';

const bem = html.bem('CouponCard');

export default class CouponCard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <img
                    className={bem.element('image')}
                    src={this.props.imageUrl}
                    alt='coupon image'
                />
                <div className={bem.element('inner')}>
                    <div className={bem.element('rating')}>
                    <span>
                        rating
                    </span>
                        <span className={bem.element('rating-info')}>
                        {this.props.ratingInfo}
                    </span>
                    </div>
                    <div className={bem.element('info-container')}>
                    <span className={bem.element('title')}>
                        {this.props.title}
                    </span>
                        <p className={bem.element('description')}>
                            {this.props.description}
                        </p>
                        <span className={bem.element('info')}>
                        {this.props.info}
                    </span>
                    </div>
                    <div className={bem.element('price-container')}>
                    <span className={bem.element('waves-price')}>
                        {this.props.wavesPrice}&nbsp;WAVES
                    </span>
                        <div className={bem.element('usd-price-container')}>
                        <span className={bem.element('usd-price', {
                            'crossed-out': !!this.props.usdDiscountPrice,
                        })}>
                            ${this.props.usdPrice}
                        </span>
                            {this.props.usdDiscountPrice && (
                                <>
                                    &nbsp;
                                    <span className={bem.element('usd-price', 'discount')}>
                                    ${this.props.usdDiscountPrice}
                                </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
