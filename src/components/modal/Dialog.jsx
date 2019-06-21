import React from 'react';

import * as Controls from './controls';

import Categories from '../../components/Categories';
import Coupon from '../coupon';

import {html} from '../../helpers';

import './Dialog.scss';

const bem = html.bem('Dialog');

const Dialog = ({coupon, onClose, onSubmit}) => (
    <div className={bem.block()}>
        <div className={bem.element('inner')}>
            <div className={bem.element('coupon')}>
                <Coupon {...coupon} />
            </div>
            <div className={bem.element('info')}>
                <Controls.SmallLogo/>
                <Categories categories={coupon.categories} />
                {coupon.email && (
                    <div className={bem.element('email')}>{coupon.email}</div>
                )}
                {coupon.webPageUrl && (
                    <div className={bem.element('site')}>{coupon.webPageUrl}</div>
                )}
            </div>
        </div>
    </div>
);

export default Dialog;
