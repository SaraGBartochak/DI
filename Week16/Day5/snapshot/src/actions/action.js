export const displayCategoryCustom = (imagesArr) => {

    return {
        type: 'CUSTOM_CATEGORY',
        payload: imagesArr
    }
}

export const setCategoryName = (categoryName) => {

    return {
        type: 'SET_CATEGORY_NAME',
        payload: categoryName
    }

}