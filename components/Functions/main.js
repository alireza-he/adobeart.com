import {useTheme} from "@mui/styles";

export const processRate = (rate) => {
    return rate ? Math.round(rate) : 0
}

export const processTabKeys = tab => {
    switch (tab) {
        case "Books":
            return "book";
        case "Articles":
            return "article";
        case "Magazines":
            return "magazine";
        case "Characters":
            return "person";
        case "Publishers":
            return "publisher";
        case "Organizations":
            return "center";
        case "Multimedia":
            return "multimedia";
        default:
            return "book";
    }
}

export const processTabKeysRev = router => {
    if (router.asPath.includes("/placeholders"))
        return "Books";
    else if (router.asPath.includes("/articles"))
        return "Articles";
    else if (router.asPath.includes("/magazines"))
        return "Magazines";
    else if (router.asPath.includes("/characters"))
        return "Characters";
    else if (router.asPath.includes("/publishers"))
        return "Publishers";
    else if (router.asPath.includes("/organizations"))
        return "Organizations";
    else if (router.asPath.includes("/multimedia"))
        return "Multimedia";
    else
        return "Books";
}

export const processSlugUrls = (dataList, prefix = "books", taxonomy = null) => {
    return dataList.map(data => {
        data.slug = encodeURI(`/${prefix}?tax=["${data.slug}"${taxonomy ? `, "${taxonomy}"` : ""}]`);
        if (data.children && data.children.length > 0)
            data.children = processSlugUrls(data.children, prefix, taxonomy);
        return data;
    });
}

export const processMultimediaSlugUrls = (dataList, suffix = "image") => {
    return dataList.map(data => {
        data.slug = encodeURI(`multimedia/${suffix}/${data.slug}`);
        if (data.children && data.children.length > 0)
            data.children = processMultimediaSlugUrls(data.children, suffix);
        return data;
    });
}

export const processFilter = (filters) => {
    let filterConvertedData = {};
    delete filters.page;
    Object.keys(filters).forEach(key => {
        if (filters[key].length > 0 && typeof filters[key] === "object")
            filterConvertedData[key] = JSON.stringify(filters[key]);
        else if (typeof filters[key] === "string")
            filterConvertedData[key] = filters[key].includes("[") ? JSON.parse(filters[key]) : filters[key];
        else
            delete filterConvertedData[key];
    });
    return filterConvertedData;
}

export const useDirection = () => {
    const theme = useTheme();
    return (style, reverse = false, haveDirection = true) => haveDirection ? (style + (theme.direction === "rtl" ? (reverse ? "Left" : "Right") : (reverse ? "Right" : "Left"))) : theme.direction;
}


String.prototype.stripHTML = function () {
    return this.replace(/(<([^>]+)>)/ig, "");
};


String.prototype.capitalize = function () {
    return this.replace(/\b[a-z]/g, letter => letter.toUpperCase());
};
