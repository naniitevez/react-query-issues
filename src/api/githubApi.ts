import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    // headers: {
    //     Authorization: 'Bearer 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'
    // }
});

