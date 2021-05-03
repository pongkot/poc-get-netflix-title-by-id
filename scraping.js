const params = process.argv
const netflixIdPosition = params.indexOf('--netflix_id')
const NETFLIX_ID = params[netflixIdPosition + 1]

module.exports = {
    'Bing search Netflix + NETFLIX_ID': (browser) => {
        browser
            .url(`https://bing.com/search?q=netflix ${NETFLIX_ID}`)
            .waitForElementVisible('body')
            .getText('.b_algo', (result) => {
                const data = result.value.split('\n')
                const [title, url] = data
                console.log(JSON.stringify({title, url}))
            })
            .end()
    }
};
