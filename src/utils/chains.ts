



export const CHAINS: { [chainId: number]: any } = {
    1: {
        urls: [
            process.env.infuraKey ? `https://mainnet.infura.io/v3/${process.env.infuraKey}` : '',
            process.env.alchemyKey ? `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemyKey}` : '',
            'https://cloudflare-eth.com',
        ].filter((url) => url !== ''),
        name: 'Mainnet',
    },
    3: {
        urls: [process.env.infuraKey ? `https://ropsten.infura.io/v3/${process.env.infuraKey}` : ''].filter(
            (url) => url !== ''
        ),
        name: 'Ropsten',
    },
    4: {
        urls: [process.env.infuraKey ? `https://rinkeby.infura.io/v3/${process.env.infuraKey}` : ''].filter(
            (url) => url !== ''
        ),
        name: 'Rinkeby',
    }
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
        const validURLs: string[] = CHAINS[Number(chainId)].urls

        if (validURLs.length) {
            accumulator[Number(chainId)] = validURLs
        }

        return accumulator
    },
    {}
)