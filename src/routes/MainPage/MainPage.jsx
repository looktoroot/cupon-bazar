import React, { useState, useEffect } from 'react';

import { Flex, Modal } from '../../components/shared';
import { Coupons} from '../../containers';
import { Dialog, Result, Form } from '../../components/modal';
import { useAppDialogs } from '../../components/service';
import { getCoupons } from '../../api';

import Layout from '../../containers/Layout';

const MainPage = () => {
    const {
        selectedCoupon,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
        form: [formOpened, onFormClose],
    } = useAppDialogs();

    const [coupons, updateCoupons] = useState([]);
    const [userCoupons, updateUserCoupons] = useState([]);
    const [filterActive] = useState(false);

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
            <Flex
                justifyContent="center"
                p={{
                    0: '10px',
                    md: '20px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    onDialogOpen={onDialogOpen}
                    coupons={filterActive ? userCoupons : coupons}
                />
            </Flex>
            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    coupon={selectedCoupon}
                    onClose={onDialogClose}
                    onSubmit={() => {
                        onDialogClose();
                        onResultOpen();
                    }}
                />
            </Modal>
            <Modal open={resultOpened} onClose={onResultClose}>
                <Result onClose={onResultClose} />
            </Modal>
            <Modal
                open={formOpened}
                onClose={onFormClose}
                width={{
                    0: '100%',
                    lg: 'initial',
                }}
                mx="10px"
            >
                <Form
                    onClose={onFormClose}
                    onSubmit={(data) => {
                        const fn = filterActive ? updateUserCoupons : updateCoupons;
                        const entity = filterActive ? userCoupons : coupons;
                        fn([...entity, { ...data, id: new Date().valueOf() }]);
                        onFormClose();
                        onResultOpen();
                    }}
                />
            </Modal>
        </Layout>
    );
};

export default MainPage;
