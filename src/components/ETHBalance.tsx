import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Text} from '@chakra-ui/react'
import { formatEther } from "@ethersproject/units"
import useSWR from 'swr'

const fetcher = (library:any) => (...args:any) => {
  const [method, ...params] = args
  return library[method](...params)
}

const ETHBalance = () => {
    const { account, active, library,chainId} = useWeb3React<Web3Provider>()

    const { data: balance,mutate } = useSWR(['getBalance', account, 'latest'], {
      fetcher: fetcher(library),
    })
    console.log("ETHBalanceSWR",balance)

    useEffect(() => {
      if(!library) return

      // listen for changes on an Ethereum address
      console.log(`listening for blocks...`)
      library.on('block', () => {
        console.log('update balance...')
        mutate(undefined, true)
      })
      // remove listener when the component is unmounted
      return () => {
        library.removeAllListeners('block')
      }

      // trigger the effect only on component mount
      // ** changed to library prepared
    }, [library])

    return (
        <div>
        {active && balance ? (
            <Text fontSize="md" w='100%' my='2' align='left'>
              {parseFloat(formatEther(balance)).toFixed(3)} {chainId===31337? 'Test':' '} BNB
            </Text>
        ) : (
            <Text fontSize="md" w='100%' my='2' align='left'>ETH in account:</Text>
        )}
        </div>
    )
  }

export default ETHBalance