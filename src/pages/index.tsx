// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'

import ConnectMetamask from 'components/ConnectMetamask'
import ETHBalance from 'components/ETHBalance';
import ReadERC20 from 'components/ReadERC20';
import TransferERC20 from 'components/TransferERC20'
import About from 'components/about'
import Faq from './faq'

const addressContract='0xe2d26507981a4daaaa8040bae1846c14e0fb56bf'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My DAPP</title>
      </Head>

      <div className="div-block-1201">
            <div className="form-block w-form">
                <ReadERC20 addressContract={addressContract} />
                    
                    <div className="columns-2 w-row">
                        <div className="w-col w-col-6"><input type="number" className="w-input" name="Amount" data-name="Amount" placeholder="10.0" id="Amount" /></div>
                        <div className="w-col w-col-6"><input type="submit" value="Buy" data-wait="Please wait..." className="w-button" /> <ETHBalance /></div>
                    </div>
            </div>
        </div>
        <Faq />
        <About />
</>
  )
}

export default Home
