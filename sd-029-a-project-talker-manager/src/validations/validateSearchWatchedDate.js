const validateSearchWatchedDate = (req, res, next) => {
    const { date } = req.query;
    const dateRegex = /(^0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4}$)/; 
    // https://regex101.com/r/64XPbZ/1
    if (date && !dateRegex.test(date)) {
     return res.status(400).json({ message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

module.exports = validateSearchWatchedDate;