const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const picked = {
    fetchPopular: `/random?apiKey=${API_KEY}&number=19`,
    fetchDessert: `/random/?apiKey=${API_KEY}&number=19&tags=dessert`,
    fetchComplexSearch: `/complexSearch?apiKey=${API_KEY}`,

}

export default picked