const axios = require('axios');
const config = require('./config');

const getData = async () => {
    try {
        const response = await axios.get(config.get('apiUrl'));
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error fetching data from API');
    }
};

module.exports = { getData };