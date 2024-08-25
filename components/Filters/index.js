import React, {useState} from 'react';
import {Button, FormControl, Grid, TextField, Select, MenuItem} from '@mui/material';
import styles from './Filters.module.css';

const Filters = ({onFilterChange, onSearchChange}) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedPopularity, setSelectedPopularity] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const handleFilterChange = (type, value) => {
        let newFilters = {
            category: selectedCategory,
            payment: selectedPayment,
            popularity: selectedPopularity,
        };

        switch (type) {
            case 'Category':
                setSelectedCategory(value === selectedCategory ? '' : value);
                newFilters.category = value === selectedCategory ? '' : value;
                break;
            case 'Payment':
                setSelectedPayment(value === selectedPayment ? '' : value);
                newFilters.payment = value === selectedPayment ? '' : value;
                break;
            case 'Popularity':
                setSelectedPopularity(value === selectedPopularity ? '' : value);
                newFilters.popularity = value === selectedPopularity ? '' : value;
                break;
            default:
                break;
        }

        onFilterChange(newFilters);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearchChange(value, searchCategory);
    };

    const handleSearchCategoryChange = (event) => {
        const value = event.target.value;
        setSearchCategory(value);
        onSearchChange(searchTerm, value);
    };

    return (
        <div className={styles.wrapperFilters}>
            <div className={styles.firstBox}>
                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className={styles.iconFirstMainFilter}>
                    <path
                        d="M9.29367 7.43412C9.3639 7.43878 9.4146 7.44437 9.46529 7.44437C10.256 7.44484 11.0467 7.44251 11.8373 7.44717C11.9471 7.44764 11.9983 7.4164 12.0378 7.31013C12.3829 6.38393 13.2215 5.87539 14.2229 5.97654C15.094 6.06464 15.8354 6.79785 15.9772 7.71286C16.1326 8.7155 15.4773 9.70462 14.4787 9.97358C13.4796 10.2425 12.4131 9.70369 12.0559 8.73834C12.002 8.59291 11.9373 8.54909 11.7848 8.55049C11.0234 8.55935 10.2616 8.55469 9.49971 8.55469C9.43739 8.55469 9.37506 8.55469 9.2932 8.55469C9.2932 8.64325 9.2932 8.71131 9.2932 8.77936C9.2932 9.75077 9.3039 10.7222 9.28716 11.6936C9.28111 12.045 9.25041 12.4063 9.16065 12.7442C8.89693 13.7385 8.20765 14.2806 7.21371 14.4498C6.95139 14.4945 6.6821 14.5071 6.41559 14.5104C5.67747 14.5183 4.93888 14.5165 4.20029 14.5099C4.06448 14.5085 3.99797 14.5444 3.9482 14.6782C3.62263 15.5606 2.7352 16.0943 1.79336 15.9862C0.888267 15.8822 0.145958 15.1467 0.018984 14.2279C-0.120083 13.2211 0.537113 12.238 1.51895 11.9845C2.53242 11.7225 3.58077 12.2501 3.94123 13.2183C3.99983 13.3758 4.07471 13.4122 4.22959 13.4108C4.96213 13.4029 5.69468 13.4099 6.42722 13.4057C6.61838 13.4047 6.81233 13.3973 7.00069 13.367C7.74673 13.2472 8.15555 12.7974 8.17183 12.0157C8.19509 10.8877 8.18346 9.75916 8.18578 8.63067C8.18578 8.61389 8.1802 8.59664 8.1723 8.55516C8.11416 8.55516 8.0523 8.55516 7.99091 8.55516C6.72349 8.55516 5.45608 8.55748 4.1882 8.55189C4.05611 8.55142 3.99704 8.58965 3.95146 8.7141C3.61007 9.64169 2.63567 10.195 1.68081 10.0127C0.694318 9.82395 0.000845569 8.98399 0.00689195 7.98415C0.0124729 6.99782 0.725017 6.15599 1.69709 5.98632C2.658 5.81898 3.61286 6.36622 3.95099 7.28682C3.99657 7.41034 4.05471 7.44996 4.18727 7.4495C5.45468 7.4439 6.7221 7.44624 7.98998 7.44624C8.04719 7.44624 8.10439 7.44624 8.17788 7.44624C8.1816 7.37212 8.18718 7.3106 8.18718 7.24907C8.18765 6.28372 8.19462 5.3179 8.18299 4.35255C8.17974 4.07054 8.15555 3.78015 8.08207 3.50933C7.9244 2.9276 7.47789 2.66797 6.91419 2.62835C6.3528 2.58919 5.7877 2.60085 5.22399 2.59432C4.88121 2.59013 4.53796 2.59944 4.19517 2.59059C4.06634 2.58733 4.00122 2.62182 3.95378 2.75001C3.63053 3.62306 2.75334 4.17682 1.86174 4.08033C0.897571 3.97639 0.150146 3.25948 0.018985 2.31371C-0.122407 1.29289 0.53944 0.321479 1.55384 0.0613801C2.53521 -0.190328 3.58868 0.35318 3.94309 1.30594C3.99797 1.45324 4.06774 1.49193 4.21796 1.49146C5.10167 1.49006 5.9863 1.47515 6.8686 1.5129C8.31229 1.5749 9.24948 2.54025 9.28344 3.9927C9.30855 5.06806 9.29181 6.14481 9.29367 7.22109C9.29367 7.28868 9.29367 7.35674 9.29367 7.43412ZM2.97892 8.00279C2.97985 7.48958 2.56498 7.06774 2.05289 7.06122C1.53663 7.05469 1.11105 7.4826 1.11384 8.00559C1.11664 8.52066 1.53616 8.93971 2.04685 8.93784C2.55753 8.93691 2.97799 8.5146 2.97892 8.00279ZM14.8856 7.9972C14.8838 7.48213 14.4661 7.06215 13.9554 7.06168C13.4382 7.06122 13.0159 7.49052 13.0206 8.01212C13.0248 8.52253 13.4526 8.94344 13.9615 8.93831C14.475 8.93272 14.8875 8.51274 14.8856 7.9972ZM1.11384 13.9655C1.11803 14.4838 1.53151 14.8922 2.0501 14.8894C2.57381 14.8866 2.9859 14.4656 2.97892 13.9394C2.97241 13.428 2.54916 13.0179 2.03243 13.023C1.51942 13.0276 1.10966 13.4481 1.11384 13.9655ZM1.11384 2.03869C1.11152 2.5561 1.52267 2.97375 2.03662 2.97701C2.55335 2.98027 2.97381 2.56915 2.97892 2.05687C2.98404 1.53155 2.56963 1.1111 2.04592 1.11063C1.52779 1.11017 1.11617 1.52036 1.11384 2.03869Z"
                        fill="#979797"/>
                </svg>

                <FormControl component="fieldset" className={styles.formControlBox}>
                    <Grid container spacing={1}>
                        {['تصویر', 'ویدئو', 'وب سایت'].map((category) => (
                            <Grid item key={category}>
                                <Button
                                    variant={selectedCategory === category ? 'contained' : 'outlined'}
                                    onClick={() => handleFilterChange('Category', category)}
                                >
                                    {category}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </FormControl>
            </div>

            <FormControl component="fieldset" className={styles.formControlBox}>
                <Grid container spacing={1}>
                    {['اشتراک', 'رایگان'].map((payment) => (
                        <Grid item key={payment}>
                            <Button
                                variant={selectedPayment === payment ? 'contained' : 'outlined'}
                                onClick={() => handleFilterChange('Payment', payment)}
                            >
                                {payment}

                                {payment !== "اشتراک" ?
                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className={styles.iconFree}>
                                        <path
                                            d="M0.644338 0.391548C1.09649 0.0523132 1.61424 0.0056684 2.15711 0.00613956C6.48237 0.0117935 10.8081 0.013207 15.1334 1.44767e-05C15.9065 -0.00234132 16.4773 0.28271 16.9136 0.937623C17.8119 2.28702 18.7432 3.61334 19.6577 4.95143C20.1029 5.60305 20.1173 6.36774 19.6805 7.0104C18.7097 8.43849 17.7323 9.86186 16.7499 11.2819C16.4568 11.7055 16.0339 11.9246 15.5283 11.9788C15.4115 11.991 15.2934 11.9906 15.1762 11.9906C10.8323 11.9929 6.48795 11.992 2.14408 12C1.60819 12.0009 1.0951 11.9552 0.649455 11.6174C0.562001 11.5288 0.474082 11.4402 0.386627 11.3517C0.0600697 10.905 0.000991613 10.3962 0.00285234 9.85715C0.0107604 7.30676 0.00936489 4.7559 6.12496e-05 2.20504C-0.00179948 1.65049 0.0368106 1.11855 0.381976 0.657754L0.644338 0.391548ZM15.8409 1.36402C15.6497 1.16237 15.4474 1.13504 15.2301 1.13504C10.7802 1.13881 6.33026 1.14022 1.88079 1.14258C1.33792 1.14258 1.11975 1.36591 1.11975 1.91952C1.12068 4.64 1.12161 7.36047 1.12301 10.0805C1.12301 10.6459 1.33932 10.8654 1.89475 10.8654C5.02635 10.8645 8.15795 10.8635 11.2896 10.8621C12.6139 10.8621 13.9383 10.8588 15.2627 10.8626C15.5534 10.8635 15.7641 10.7566 15.9325 10.5088C16.8573 9.14711 17.7914 7.79206 18.7218 6.43417C18.9395 6.11614 18.9302 5.86407 18.7046 5.53567C18.0017 4.51326 17.3016 3.48895 16.6001 2.46607C16.3391 2.08584 16.0767 1.70608 15.8409 1.36402Z"
                                            fill="#979797"/>
                                        <path
                                            d="M8.19813 6.38616C8.40746 6.76968 8.62284 7.16451 8.83776 7.55934C9.00429 7.86607 8.93359 8.08422 8.61493 8.24959C8.33676 8.39377 8.14324 8.32639 7.9902 8.02956C7.77993 7.62154 7.572 7.2121 7.36313 6.80313C7.25614 6.59362 7.06836 6.49719 6.7998 6.51384C6.80305 6.94448 6.80352 7.37842 6.81049 7.81189C6.81375 7.9914 6.79933 8.15159 6.60628 8.2331C6.40625 8.31744 6.06434 8.29105 5.94851 8.15489C5.89641 8.09411 5.86152 7.99658 5.86106 7.91554C5.85548 6.64529 5.85641 5.37505 5.85827 4.1048C5.85827 3.88995 5.9727 3.77028 6.18482 3.77122C6.69606 3.7731 7.20823 3.76132 7.7176 3.79572C8.18232 3.82682 8.60889 3.98984 8.79031 4.47607C8.98615 4.99953 8.98522 5.52723 8.63819 5.99698C8.53213 6.14021 8.36792 6.23962 8.19813 6.38616ZM6.84817 5.77883C7.03378 5.77129 7.23893 5.76941 7.44314 5.75339C7.81343 5.72465 7.96182 5.55267 7.95624 5.17386C7.95066 4.79976 7.81343 4.64334 7.445 4.61931C7.24125 4.60564 7.03564 4.61601 6.84492 4.61554C6.84585 5.00189 6.84678 5.36798 6.84817 5.77883Z"
                                            fill="#979797"/>
                                        <path
                                            d="M10.3822 4.6047C10.385 4.96467 10.3877 5.29495 10.3905 5.67612C10.645 5.66858 10.9064 5.65633 11.1679 5.65445C11.4353 5.65303 11.5647 5.77695 11.567 6.02195C11.5698 6.27025 11.4451 6.3937 11.172 6.39181C10.9097 6.3904 10.6473 6.37485 10.3812 6.36495C10.3747 6.45118 10.3696 6.49075 10.3691 6.5308C10.3663 6.82151 10.3649 7.11221 10.3626 7.4326C10.4538 7.43637 10.5296 7.44155 10.605 7.44203C11.0441 7.44297 11.4832 7.43873 11.9224 7.44438C12.1675 7.44768 12.2806 7.58243 12.2857 7.85335C12.2908 8.12285 12.1754 8.2788 11.9424 8.28116C11.24 8.28729 10.5371 8.29011 9.83418 8.28022C9.5146 8.27551 9.4183 8.15583 9.4183 7.82602C9.41691 6.6288 9.41644 5.43206 9.41691 4.23484C9.41691 3.88524 9.50669 3.77687 9.8486 3.77216C10.5431 3.76274 11.2381 3.76556 11.9326 3.77028C12.1712 3.77216 12.2848 3.91822 12.2834 4.19008C12.282 4.46524 12.1722 4.6047 11.9298 4.60706C11.4191 4.61177 10.9087 4.60611 10.3808 4.6047H10.3822Z"
                                            fill="#979797"/>
                                        <path
                                            d="M13.6901 4.60376C13.6831 4.97362 13.677 5.3039 13.6701 5.67376C13.9445 5.66622 14.2143 5.65303 14.4846 5.6535C14.7358 5.65397 14.8535 5.77977 14.8535 6.02525C14.8535 6.26837 14.7363 6.3904 14.4813 6.39228C14.2185 6.39417 13.9552 6.3838 13.7203 6.37909C13.7203 6.74612 13.7208 7.08771 13.7212 7.44768C14.1743 7.44532 14.6688 7.44108 15.1638 7.44155C15.4554 7.44155 15.5782 7.57631 15.5731 7.87785C15.5685 8.16526 15.4522 8.28163 15.1591 8.28257C14.512 8.28446 13.865 8.2854 13.2184 8.28257C12.7862 8.28022 12.7062 8.19447 12.7062 7.75393C12.7057 6.58075 12.7048 5.40803 12.7048 4.23484C12.7048 3.89419 12.8058 3.77593 13.1393 3.77169C13.8343 3.76274 14.5288 3.76415 15.2238 3.76886C15.4619 3.77028 15.575 3.91869 15.5717 4.19102C15.5689 4.45676 15.4489 4.60517 15.2126 4.60706C14.7028 4.6113 14.192 4.60517 13.6901 4.60376Z"
                                            fill="#979797"/>
                                        <path
                                            d="M3.69657 4.58208C3.69145 4.96891 3.68726 5.29872 3.68261 5.67329C3.94544 5.66717 4.20641 5.6568 4.46737 5.65586C4.74044 5.65492 4.86417 5.77129 4.86976 6.01912C4.8758 6.28391 4.75858 6.39605 4.46272 6.39652C4.2078 6.39652 3.95288 6.38804 3.65284 6.38239C3.65842 6.87192 3.66214 7.33649 3.67005 7.80105C3.67284 7.97679 3.67424 8.15159 3.47747 8.22698C3.25046 8.31414 3.0174 8.32074 2.81784 8.1662C2.75643 8.11861 2.72387 7.99752 2.72341 7.90942C2.71689 6.6566 2.72015 5.40379 2.71643 4.15097C2.7155 3.91869 2.83366 3.79054 3.04392 3.78677C3.77751 3.77357 4.51157 3.77122 5.24562 3.77923C5.43356 3.78111 5.53962 3.96863 5.53031 4.21222C5.52055 4.46571 5.40378 4.60564 5.17678 4.60941C4.76974 4.61648 4.36271 4.61412 3.95567 4.6113C3.86822 4.61083 3.78123 4.59245 3.69657 4.58208Z"
                                            fill="#979797"/>
                                    </svg>
                                    :
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className={styles.iconSubscription}>
                                        <path
                                            d="M3.76866 3.29371C4.4243 2.537 5.06987 1.79212 5.71544 1.04724C5.92601 0.803873 6.13575 0.559664 6.34843 0.31799C6.71966 -0.104517 7.28259 -0.107474 7.65257 0.31799C8.48438 1.27328 9.31284 2.23195 10.1426 3.18935C10.169 3.22019 10.1963 3.25019 10.2348 3.29371C10.2814 3.2654 10.3275 3.23751 10.3733 3.20878C11.1384 2.72206 11.9027 2.23364 12.669 1.74902C13.1108 1.46974 13.6145 1.57072 13.8729 1.98182C13.9967 2.17913 14.0206 2.39419 13.9849 2.6177C13.6041 5.01331 13.2219 7.40893 12.8389 9.80412C12.818 9.93509 12.7999 10.069 12.7584 10.1941C12.6028 10.6622 12.1778 10.9719 11.6715 10.9977C11.6309 10.9998 11.5902 10.9998 11.5495 10.9998C8.51668 10.9998 5.48389 11.0002 2.4511 10.9998C1.75939 10.9998 1.3009 10.6179 1.18051 9.94143C1.13018 9.6592 1.09075 9.37527 1.04586 9.09219C0.806342 7.58596 0.566823 6.07972 0.327304 4.5739C0.222855 3.91691 0.114632 3.26033 0.0139583 2.60291C-0.0409927 2.24378 0.0638743 1.93746 0.371768 1.73297C0.683017 1.52678 1.00475 1.54115 1.31852 1.74057C2.08825 2.22941 2.85799 2.71868 3.62772 3.20752C3.67009 3.23456 3.71329 3.26033 3.76824 3.29455L3.76866 3.29371ZM1.02447 2.71614C1.05635 2.92106 1.08152 3.0871 1.10794 3.25357C1.32607 4.62798 1.54587 6.00198 1.75981 7.37682C1.78036 7.5099 1.81979 7.55849 1.96619 7.55849C5.32365 7.55342 8.6807 7.55427 12.0382 7.55427H12.2101C12.4664 5.94156 12.7198 4.34575 12.9778 2.71994C12.8968 2.7698 12.8494 2.79853 12.8024 2.8281C12.1019 3.27343 11.4022 3.72002 10.7005 4.16365C10.2814 4.42856 9.86655 4.36603 9.5402 3.99C8.77676 3.11076 8.01499 2.23026 7.25281 1.3506C7.17101 1.25596 7.08796 1.16216 7.00113 1.06287C6.95373 1.11653 6.92017 1.15413 6.88661 1.19258C6.07409 2.13012 5.26283 3.06936 4.44779 4.00521C4.13361 4.36603 3.71413 4.42265 3.30976 4.16872C3.08115 4.02507 2.85379 3.87972 2.62602 3.7348C2.10251 3.40187 1.57943 3.06936 1.02405 2.71614H1.02447ZM1.96115 8.54674C1.96325 8.59448 1.96115 8.63504 1.96745 8.67391C2.02198 9.01741 2.07609 9.36091 2.13398 9.70398C2.18263 9.99087 2.21493 10.0162 2.4985 10.0162C5.49941 10.0162 8.50032 10.0162 11.5008 10.0162C11.5415 10.0162 11.5822 10.0171 11.6229 10.0154C11.7529 10.0086 11.8297 9.93974 11.8515 9.8113C11.8704 9.70018 11.8876 9.58906 11.9048 9.47794C11.9526 9.1712 12 8.86446 12.0491 8.54716H1.96073L1.96115 8.54674Z"
                                            fill="#979797"/>
                                    </svg>
                                }
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </FormControl>

            <FormControl component="fieldset" className={styles.formControlSearchBox}>
                <Grid container>
                    <Grid item>
                        <FormControl variant="outlined" fullWidth className={styles.formControlSelectSearchBox}>
                            <Select
                                value={searchCategory}
                                onChange={handleSearchCategoryChange}
                                displayEmpty
                            >
                                <MenuItem value=""><em>همه</em></MenuItem>
                                {['تصویر', 'ویدئو', 'وب سایت'].map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField
                            placeholder="جستجو"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            fullWidth
                            className={styles.SearchBox}
                        />
                    </Grid>
                </Grid>
            </FormControl>

            <div className={styles.lastBox}>
                <FormControl component="fieldset" className={styles.formControlBox}>
                    <Grid container spacing={1}>
                        {['پربازدیدتر', 'جدیدتر', 'قدیمی تر'].map((popularity) => (
                            <Grid item key={popularity}>
                                <Button
                                    variant={selectedPopularity === popularity ? 'contained' : 'outlined'}
                                    onClick={() => handleFilterChange('Popularity', popularity)}
                                >
                                    {popularity}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </FormControl>

                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className={styles.iconLastMainFilter}>
                    <path
                        d="M6.03931 16C5.66791 15.8713 5.53186 15.61 5.53405 15.2206C5.54448 13.2784 5.53405 11.3367 5.54118 9.3945C5.54393 8.63755 5.26414 8.02574 4.69523 7.52786C3.7626 6.71066 2.82284 5.90004 1.91819 5.05217C0.663531 3.87567 0.0408657 2.40449 0.000268911 0.687936C-0.00960599 0.265644 0.253178 0.00164089 0.674507 0.00109317C5.56587 0.000545447 10.4578 0.00109544 15.3492 0C15.6114 0 15.8149 0.0991345 15.9444 0.329177C15.9713 0.376829 15.9872 0.435983 15.9905 0.490755C16.0404 1.32548 15.8928 2.12734 15.5796 2.90018C15.2071 3.81925 14.6393 4.59811 13.8959 5.25318C13.0165 6.0282 12.1409 6.80816 11.2642 7.58647C10.7392 8.05258 10.4814 8.63645 10.483 9.33918C10.4863 10.5003 10.4803 11.6615 10.4863 12.8221C10.488 13.1157 10.376 13.326 10.1314 13.4876C8.94473 14.2714 7.76304 15.0618 6.5775 15.8477C6.48753 15.9074 6.38604 15.9491 6.28948 15.9989C6.20664 16 6.1227 16 6.03931 16ZM1.29169 1.25866C1.46011 2.40668 1.94124 3.38053 2.78499 4.155C3.69897 4.99356 4.63489 5.80747 5.56313 6.63015C6.39262 7.36519 6.79475 8.28481 6.79091 9.39066C6.78597 10.9319 6.78981 12.4738 6.78981 14.0151C6.78981 14.0693 6.78981 14.1235 6.78981 14.1969C6.83644 14.1706 6.85893 14.1597 6.87923 14.146C7.63411 13.6437 8.38954 13.1431 9.14003 12.6348C9.18996 12.6008 9.22671 12.5105 9.22671 12.4458C9.2322 11.42 9.2333 10.3941 9.23001 9.3682C9.22617 8.27331 9.63104 7.36354 10.4507 6.63672C11.1836 5.98658 11.9165 5.33643 12.6495 4.68574C13.0741 4.30891 13.5091 3.94249 13.8421 3.47473C14.3161 2.8098 14.6157 2.0775 14.7254 1.25811C10.2482 1.25866 5.78038 1.25866 1.29169 1.25866Z"
                        fill="#979797"/>
                </svg>
            </div>
        </div>
    );
};

export default Filters;