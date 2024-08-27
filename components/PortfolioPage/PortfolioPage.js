import React, {useState} from 'react';
import Filters from '@/components/Filters';
import {Card, CardContent, Grid, Typography} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './PortfolioPage.module.css';

const data = [
    {
        id: 1,
        src: '/assets/PortfolioPictures/portfolio_01.jpg',
        name: 'عکاسی منظره',
        category: 'تصویر',
        subcategory: 'منظره',
        tags: ['اشتراک', 'پربازدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 2,
        src: '/assets/PortfolioPictures/portfolio_02.jpg',
        name: 'پرتره حرفه‌ای',
        category: 'تصویر',
        subcategory: 'پرتره',
        tags: ['اشتراک', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 3,
        src: '/assets/PortfolioPictures/portfolio_03.jpg',
        name: 'عکاسی ماکرو',
        category: 'تصویر',
        subcategory: 'ماکرو',
        tags: ['اشتراک', 'قدیمی تر'],
        date: '1403/12/12'
    },
    {
        id: 4,
        src: '/assets/PortfolioPictures/portfolio_04.jpg',
        name: 'فتوشاپ پیشرفته',
        category: 'تصویر',
        subcategory: 'هنری',
        tags: ['رایگان', 'پربازدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 5,
        src: '/assets/PortfolioPictures/portfolio_05.jpg',
        name: 'تدوین عکس',
        category: 'تصویر',
        subcategory: 'هنری',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 6,
        src: '/assets/PortfolioPictures/portfolio_06.jpg',
        name: 'عکاسی شب',
        category: 'تصویر',
        subcategory: 'منظره',
        tags: ['رایگان', 'قدیمی تر'],
        date: '1403/12/12'
    },
    {
        id: 7,
        src: '/assets/PortfolioPictures/portfolio_07.jpg',
        name: 'فیلمبرداری تبلیغاتی',
        category: 'ویدئو',
        subcategory: 'تبلیغاتی',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 8,
        src: '/assets/PortfolioPictures/portfolio_08.jpg',
        name: 'ساخت تیزر',
        category: 'ویدئو',
        subcategory: 'تیزر',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 9,
        src: '/assets/PortfolioPictures/portfolio_09.jpg',
        name: 'فیلمبرداری هوایی',
        category: 'ویدئو',
        subcategory: 'فیلمبرداری هوایی',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/12'
    },
    {
        id: 10,
        src: '/assets/PortfolioPictures/portfolio_10.png',
        name: 'طراحی وب سایت',
        category: 'وب سایت',
        subcategory: 'طراحی',
        tags: ['اشتراک', 'قدیمی تر'],
        date: '1403/12/13'
    },
    {
        id: 11,
        src: '/assets/PortfolioPictures/portfolio_11.jpg',
        name: 'عکاسی خبری',
        category: 'تصویر',
        subcategory: 'خبری',
        tags: ['اشتراک', 'پربازدیدتر'],
        date: '1403/12/13'
    },
    {
        id: 12,
        src: '/assets/PortfolioPictures/portfolio_12.png',
        name: 'ویرایش ویدئو',
        category: 'ویدئو',
        subcategory: 'تبلیغاتی',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/13'
    },
    {
        id: 13,
        src: '/assets/PortfolioPictures/portfolio_13.jpg',
        name: 'سئو وب سایت',
        category: 'وب سایت',
        subcategory: 'سئو',
        tags: ['رایگان', 'قدیمی تر'],
        date: '1403/12/13'
    },
    {
        id: 14,
        src: '/assets/PortfolioPictures/portfolio_14.jpg',
        name: 'عکاسی معماری',
        category: 'تصویر',
        subcategory: 'معماری',
        tags: ['اشتراک', 'جدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 15,
        src: '/assets/PortfolioPictures/portfolio_15.jpg',
        name: 'ویرایش تصویر',
        category: 'تصویر',
        subcategory: 'هنری',
        tags: ['رایگان', 'پربازدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 16,
        src: '/assets/PortfolioPictures/portfolio_16.jpg',
        name: 'تدوین ویدئو',
        category: 'ویدئو',
        subcategory: 'مستند',
        tags: ['اشتراک', 'قدیمی تر'],
        date: '1403/12/14'
    },
    {
        id: 17,
        src: '/assets/PortfolioPictures/portfolio_17.jpg',
        name: 'طراحی لوگو',
        category: 'وب سایت',
        subcategory: 'لوگو',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 18,
        src: '/assets/PortfolioPictures/portfolio_18.jpg',
        name: 'عکاسی خیابانی',
        category: 'تصویر',
        subcategory: 'خیابانی',
        tags: ['اشتراک', 'پربازدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 19,
        src: '/assets/PortfolioPictures/portfolio_19.jpg',
        name: 'فیلمبرداری مستند',
        category: 'ویدئو',
        subcategory: 'مستند',
        tags: ['رایگان', 'قدیمی تر'],
        date: '1403/12/14'
    },
    {
        id: 20,
        src: '/assets/PortfolioPictures/portfolio_20.jpg',
        name: 'طراحی کارت ویزیت',
        category: 'وب سایت',
        subcategory: 'طراحی',
        tags: ['اشتراک', 'جدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 21,
        src: '/assets/PortfolioPictures/portfolio_21.png',
        name: 'عکاسی صنعتی',
        category: 'تصویر',
        subcategory: 'صنعتی',
        tags: ['رایگان', 'پربازدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 22,
        src: '/assets/PortfolioPictures/portfolio_22.png',
        name: 'ویرایش صوت',
        category: 'ویدئو',
        subcategory: 'مستند',
        tags: ['اشتراک', 'قدیمی تر'],
        date: '1403/12/14'
    },
    {
        id: 23,
        src: '/assets/PortfolioPictures/portfolio_23.png',
        name: 'طراحی پوستر',
        category: 'وب سایت',
        subcategory: 'پوستر',
        tags: ['رایگان', 'جدیدتر'],
        date: '1403/12/14'
    },
    {
        id: 24,
        src: '/assets/PortfolioPictures/portfolio_24.png',
        name: 'عکاسی هنری',
        category: 'تصویر',
        subcategory: 'هنری',
        tags: ['اشتراک', 'پربازدیدتر'],
        date: '1403/12/14'
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
            const subcategoryMatch = filters.subcategory === '' || item.subcategory === filters.subcategory;
            const paymentMatch = filters.payment === '' || item.tags.includes(filters.payment);
            const popularityMatch = filters.popularity === '' || item.tags.includes(filters.popularity);
            const searchMatch =
                search === '' ||
                item.name.includes(search) ||
                item.category.includes(search) ||
                item.tags.some((tag) => tag.includes(search));

            return categoryMatch && subcategoryMatch && paymentMatch && popularityMatch && searchMatch;
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
                                <Card className={styles.cardInformation}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            دسته‌بندی: {item.category}
                                        </Typography>
                                        <div className={styles.cardInformationFooter}>
                                            <Typography>
                                                {item.tags.join(', ')}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {item.date}
                                            </Typography>
                                        </div>
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