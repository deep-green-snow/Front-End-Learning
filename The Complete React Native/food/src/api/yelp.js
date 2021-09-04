import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0w5EtkphTHG-WE0j6rEp_IVQYgA2yldUD64UaReK6SP723LX3spu8lFCHRYHyv-Z2jMhS13DcjMe_c7h_vU-oLoTvH-RuTfSVU9orU-fmSnFPl4U5iyUDBhRGIgvYXYx'
    }
});