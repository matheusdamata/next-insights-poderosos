import { useState } from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '../styles/global'
import {
  Circle,
  Container,
  Header,
  MenuDesktop,
  MenuMobile,
} from '../styles/pages/app'

import Logo from '../assets/logo.svg'

import { List, X } from 'phosphor-react'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <Container>
      <Header>
        <Image src={Logo} alt="" />

        <MenuDesktop>
          <Link href="/">PRODUTOS</Link>
          <Link href="/recursos">RECURSOS</Link>
          <Link href="/preços">PREÇOS</Link>

          <Circle></Circle>

          <Link href="/login">ENTRAR</Link>
        </MenuDesktop>

        <MenuMobile onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {!isOpenMenu ? <List size={32} /> : <X size={32} />}
        </MenuMobile>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
