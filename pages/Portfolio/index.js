import React, { useState } from 'react';
import Filters from '@/components/Filters';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const data = [
    { id: 1, category: 'تصویر', tags: ['اشتراک', 'پربازدیدتر'], date: '1403/12/12' },
    { id: 2, category: 'تصویر', tags: ['اشتراک', 'جدیدتر'], date: '1403/12/12' },
    { id: 3, category: 'تصویر', tags: ['اشتراک', 'قدیمی تر'], date: '1403/12/12' },
    { id: 4, category: 'تصویر', tags: ['رایگان', 'پربازدیدتر'], date: '1403/12/12' },
    { id: 5, category: 'تصویر', tags: ['رایگان', 'جدیدتر'], date: '1403/12/12' },
    { id: 6, category: 'تصویر', tags: ['رایگان', 'قدیمی تر'], date: '1403/12/12' },
    { id: 7, category: 'ویدئو', tags: ['رایگان', 'جدیدتر'], date: '1403/12/12' },
    { id: 8, category: 'ویدئو', tags: ['رایگان', 'جدیدتر'], date: '1403/12/12' },
    { id: 9, category: 'ویدئو', tags: ['رایگان', 'جدیدتر'], date: '1403/12/12' },
    { id: 10, category: 'وب سایت', tags: ['اشتراک', 'قدیمی تر'], date: '1403/12/13' },
    { id: 11, category: 'تصویر', tags: ['اشتراک', 'پربازدیدتر'], date: '1403/12/13' },
    { id: 12, category: 'ویدئو', tags: ['رایگان', 'جدیدتر'], date: '1403/12/13' },
    { id: 13, category: 'وب سایت', tags: ['رایگان', 'قدیمی تر'], date: '1403/12/13' },
];

const Portfolio = () => {
    const [filters, setFilters] = useState({ category: '', payment: '', popularity: '' });
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);

        const filtered = data.filter(item => {
            const categoryMatch = newFilters.category === '' || item.category === newFilters.category;
            const paymentMatch = newFilters.payment === '' || item.tags.includes(newFilters.payment);
            const popularityMatch = newFilters.popularity === '' || item.tags.includes(newFilters.popularity);

            return categoryMatch && paymentMatch && popularityMatch;
        });

        setFilteredData(filtered);
    };

    return (
        <div className="container">
            <Filters onFilterChange={handleFilterChange} />
            <Grid container spacing={3}>
                {filteredData.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {item.category}
                                </Typography>
                                <Typography color="textSecondary">
                                    {item.tags.join(', ')}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {item.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Portfolio;
