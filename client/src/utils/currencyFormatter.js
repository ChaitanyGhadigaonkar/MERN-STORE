const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency:"INR",
    style:"currency",
    maximumFractionDigits:3
})

export default currencyFormatter;