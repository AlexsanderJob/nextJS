export const getBitcoin = async () => {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (response.status === 202 || response.status === 200) {
            return await response?.json();
        }
        return null;
    } catch (error) {
        throw error;
    }
}
