



export const CHAINS: { [chainId: number]: any } = {
    1: {
        name: 'Mainnet',
    },
    3: {
        name: 'Ropsten',
    },
    4: {
        name: 'Rinkeby',
    }
}

export const URLS: { [chainId: number]: string } = Object.keys(CHAINS).reduce<{ [chainId: number]: string }>(
    (accumulator, chainId) => {
        const nameNetwork: string = CHAINS[Number(chainId)].name

        if (nameNetwork) {
            accumulator[Number(chainId)] = nameNetwork
        }

        return accumulator
    },
    {}
)