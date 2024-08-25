import React, {useState} from 'react';
import Filters from '@/components/Filters';
import {Card, CardContent, Grid, Typography} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './PortfolioPage.module.css';

const data = [
    {
        id: 1,
        src: '/assets/latestProducts/latestProducts-01.jpg',
        name: 'عکاسی منظره',
        category: 'تصویر',
        tags: ['اشتراک', 'پربازدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 2,
        src: '/assets/latestProducts/latestProducts-02.jpg',
        name: 'پرتره حرفه‌ای',
        category: 'تصویر',
        tags: ['اشتراک', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 3,
        src: '/assets/latestProducts/latestProducts-03.jpg',
        name: 'عکاسی ماکرو',
        category: 'تصویر',
        tags: ['اشتراک', 'قدیمی تر'],
        date: '1403/12/12'
    },
    {
        id: 4,
        src: '/assets/latestProducts/latestProducts-04.jpg',
        name: 'فتوشاپ پیشرفته',
        category: 'تصویر',
        tags: ['رایگان', 'پربازدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 5,
        src: '/assets/latestProducts/latestProducts-05.jpg',
        name: 'تدوین عکس',
        category: 'تصویر',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 6,
        src: '/assets/latestProducts/latestProducts-01.jpg',
        name: 'عکاسی شب',
        category: 'تصویر',
        tags: ['رایگان', 'قدیمی تر'],
        date: '1403/12/12'
    },
    {
        id: 7,
        src: '/assets/latestProducts/latestProducts-02.jpg',
        name: 'فیلمبرداری تبلیغاتی',
        category: 'ویدئو',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 8,
        src: '/assets/latestProducts/latestProducts-03.jpg',
        name: 'ساخت تیزر',
        category: 'ویدئو',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 9,
        src: '/assets/latestProducts/latestProducts-04.jpg',
        name: 'فیلمبرداری هوایی',
        category: 'ویدئو',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 10,
        src: '/assets/latestProducts/latestProducts-05.jpg',
        name: 'طراحی وب سایت',
        category: 'وب سایت',
        tags: ['اشتراک', 'قدیمی تر'],
        date: '1403/12/13'
    },
    {
        id: 11,
        src: '/assets/latestProducts/latestProducts-01.jpg',
        name: 'عکاسی خبری',
        category: 'تصویر',
        tags: ['اشتراک', 'پربازدیدتر'],
        date: '1403/12/13'
    },
    {
        id: 12,
        src: '/assets/latestProducts/latestProducts-02.jpg',
        name: 'ویرایش ویدئو',
        category: 'ویدئو',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/13'
    },
    {
        id: 13,
        src: '/assets/latestProducts/latestProducts-03.jpg',
        name: 'سئو وب سایت',
        category: 'وب سایت',
        tags: ['رایگان', 'قدیمی تر'],
        date: '1403/12/13'
    },
];

const PortfolioPage = () => {
    const [filters, setFilters] = useState({category: '', payment: '', popularity: ''});
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        applyFilters(newFilters, searchTerm, searchCategory);
    };

    const handleSearchChange = (newSearchTerm, newSearchCategory) => {
        setSearchTerm(newSearchTerm);
        setSearchCategory(newSearchCategory);
        applyFilters(filters, newSearchTerm, newSearchCategory);
    };

    const applyFilters = (filters, search, searchCategory) => {
        const filtered = data.filter((item) => {
            const categoryMatch = filters.category === '' || item.category === filters.category;
            const paymentMatch = filters.payment === '' || item.tags.includes(filters.payment);
            const popularityMatch = filters.popularity === '' || item.tags.includes(filters.popularity);
            const searchMatch =
                search === '' ||
                item.name.includes(search) ||
                item.category.includes(search) ||
                item.tags.some((tag) => tag.includes(search));

            return categoryMatch && paymentMatch && popularityMatch && searchMatch;
        });

        setFilteredData(filtered);
    };

    return (
        <div className={styles.wrapper}>
            <div className="container mx_3rem">
                <Filters onFilterChange={handleFilterChange} onSearchChange={handleSearchChange}/>

                {/*<Grid container spacing={3} className={styles.portfolioBox}>*/}
                <ImageList variant="masonry" cols={3} gap={18} className={styles.imgList}>
                    {filteredData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <ImageListItem className={styles.imgBox}>
                                <img src={item.src} alt={item.name} loading="lazy"/>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            دسته‌بندی: {item.category}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {item.tags.join(', ')}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {item.date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </ImageListItem>
                        </Grid>
                    ))}
                </ImageList>
                {/*</Grid>*/}
            </div>
        </div>
    );
};

export default PortfolioPage;