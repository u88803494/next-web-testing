import type { NextPage } from 'next'
import Image from 'next/image'
import { Container, Stack, Button, Typography, Slider, Link } from '@mui/material'


function Copyright() {
  return (
    <Typography
      className="text-center"
      variant="body2" color="text.secondary"
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>

    //   <main className={styles.main}>

    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>

    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Tailwind CSS example
        </Typography>

        <h1 className="text-3xl font-bold underline">
          Hello world! Tailwindcss
        </h1>

        <Stack spacing={2} direction="row">
          <Button className="bg-slate-100 hover:bg-blue-300" variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: 'shadow-none' }}
          componentsProps={{ thumb: { className: 'hover:shadow-none' } }}
        />
        <Copyright />
      </div>
    </Container>
  )
}

export default Home
