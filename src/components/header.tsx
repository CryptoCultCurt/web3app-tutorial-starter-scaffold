//src/components/header.tsx
import NextLink from "next/link"
import { Flex, Button, useColorModeValue, Spacer, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import ConnectMetamask from "./ConnectMetamask"
const siteTitle="FirstDAPP"
export default function Header() {

  return (
    <div>
        <div className="section wf-section"></div>
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="container w-container">
                <a href="#" className="w-nav-brand">
                    <img
                        src="https://assets.website-files.com/6267045bbcf1451f09d3ed15/62670f109c2ac85203e46e16_Big-Cheeze-Banner.PNG"
                        loading="lazy"
                        width="280"
                        sizes="(max-width: 479px) 220px, 280px"
                        srcSet="
                            https://assets.website-files.com/6267045bbcf1451f09d3ed15/62670f109c2ac85203e46e16_Big-Cheeze-Banner-p-500.png   500w,
                            https://assets.website-files.com/6267045bbcf1451f09d3ed15/62670f109c2ac85203e46e16_Big-Cheeze-Banner-p-800.png   800w,
                            https://assets.website-files.com/6267045bbcf1451f09d3ed15/62670f109c2ac85203e46e16_Big-Cheeze-Banner-p-1080.png 1080w,
                            https://assets.website-files.com/6267045bbcf1451f09d3ed15/62670f109c2ac85203e46e16_Big-Cheeze-Banner.PNG        1200w
                        "
                        alt=""
                        className="image"
                    />
                </a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <a href="#" className="nav-link w-nav-link">MINER</a><a href="#" className="nav-link w-nav-link">ABOUT</a><a href="#" className="nav-link w-nav-link">FAQS</a><ConnectMetamask />
                </nav>
                <div className="menu-button w-nav-button"><div className="w-icon-nav-menu"></div></div>
            </div>
        </div>
    </div>
  )
}
