import axios from "axios";

export const baseUrl = () => {
    const localhostUrl = process.env.REACT_APP_API_LOCALHOST;
    const appRunnerUrl = process.env.REACT_APP_API_APP_RUNNER;

    return appRunnerUrl;
}

export const getCoffeeTypes=async()=>{
    try {
        const res = await axios.get(`${baseUrl()}/coffee-types`);
        return res.data.data;
    } catch (err) {
        console.log('API fetch error', err);
    }

}