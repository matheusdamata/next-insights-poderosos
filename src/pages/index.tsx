import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Container,
  LeftSide,
  LeftSideButtons,
  RightSide,
} from '../styles/pages/home'

import BackgroundImage from '../assets/illustration-devices.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Insights Poderosos</title>
      </Head>

      <Container>
        <LeftSide>
          <p>
            <span>NEW</span> PAINEL DE MONOGRAFIA
          </p>

          <h1>INFORMAÇÕES PODEROSAS SOBRE SUA EQUIPE</h1>

          <p>Planejamento de projetos e controle de tempo para equipes ágeis</p>

          <LeftSideButtons>
            <button>AGENDE UMA DEMONSTRAÇÃO</button>

            <Link href="/">VER UMA PRÉVIA</Link>
          </LeftSideButtons>
        </LeftSide>

        <RightSide>
          <Image src={BackgroundImage} alt="" />
        </RightSide>
      </Container>
    </>
  )
}
