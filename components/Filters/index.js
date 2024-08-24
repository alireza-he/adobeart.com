import React, { useState } from 'react';
import { Button, FormControl, Grid } from '@mui/material';

const Filters = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPayment, setSelectedPayment] = useState(''); // برای فیلترهای اشتراک و رایگان
    const [selectedPopularity, setSelectedPopularity] = useState(''); // برای فیلترهای پربازدیدتر، جدیدتر و قدیمی‌تر

    const handleCategoryChange = (category) => {
        const newCategory = selectedCategory === category ? '' : category;
        setSelectedCategory(newCategory);
        onFilterChange({ category: newCategory, payment: selectedPayment, popularity: selectedPopularity });
    };

    const handlePaymentChange = (payment) => {
        const newPayment = selectedPayment === payment ? '' : payment;
        setSelectedPayment(newPayment);
        onFilterChange({ category: selectedCategory, payment: newPayment, popularity: selectedPopularity });
    };

    const handlePopularityChange = (popularity) => {
        const newPopularity = selectedPopularity === popularity ? '' : popularity;
        setSelectedPopularity(newPopularity);
        onFilterChange({ category: selectedCategory, payment: selectedPayment, popularity: newPopularity });
    };

    return (
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <FormControl component="fieldset" fullWidth>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button
                            variant={selectedCategory === 'تصویر' ? 'contained' : 'outlined'}
                            onClick={() => handleCategoryChange('تصویر')}
                        >
                            تصویر
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={selectedCategory === 'ویدئو' ? 'contained' : 'outlined'}
                            onClick={() => handleCategoryChange('ویدئو')}
                        >
                            ویدئو
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={selectedCategory === 'وب سایت' ? 'contained' : 'outlined'}
                            onClick={() => handleCategoryChange('وب سایت')}
                        >
                            وب سایت
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>

            <FormControl component="fieldset" fullWidth>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button
                            variant={selectedPayment === 'اشتراک' ? 'contained' : 'outlined'}
                            onClick={() => handlePaymentChange('اشتراک')}
                        >
                            اشتراک
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={selectedPayment === 'رایگان' ? 'contained' : 'outlined'}
                            onClick={() => handlePaymentChange('رایگان')}
                        >
                            رایگان
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
            <FormControl component="fieldset" fullWidth>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button
                            variant={selectedPopularity === 'پربازدیدتر' ? 'contained' : 'outlined'}
                            onClick={() => handlePopularityChange('پربازدیدتر')}
                        >
                            پربازدیدتر
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={selectedPopularity === 'جدیدتر' ? 'contained' : 'outlined'}
                            onClick={() => handlePopularityChange('جدیدتر')}
                        >
                            جدیدتر
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={selectedPopularity === 'قدیمی تر' ? 'contained' : 'outlined'}
                            onClick={() => handlePopularityChange('قدیمی تر')}
                        >
                            قدیمی تر
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    );
};

export default Filters;
