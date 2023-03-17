import Head from 'next/head'
import Image from 'next/image'
import LandingComponent from '@/components/Home/Landing-component'
import axios from 'axios';
import https from 'https';
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});


//const inter = Inter({ subsets: ['latin'] })

export default function Home(props : any) {
  const {data, flightLocationsData, averageUserRatingsData} = props;
  console.log({averageUserRatingsData});
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
      <main>
        <LandingComponent 
        data={data} 
        locations={flightLocationsData} 
        average={averageUserRatingsData}
        />
      </main>
    </>
  )
}
//  const flightLocations = await axios.get('flights/add-location')
export async function getServerSideProps(){
  console.log(`user token = ${process.env.NEXT_PUBLIC_USER_TOKEN}`);

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}reviews/active-reviews?pageNumber=1&pageSize=10&Recent=true`,
  {
    headers:{
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
    },
    httpsAgent: httpsAgent,
  });
  const flightLocations = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}flights/active-locations`,
  ///reviews/average-ratings
  {
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
    },
    httpsAgent: httpsAgent,
  })

  const averageRating = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}reviews/average-ratings`,
  {
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
    },
    httpsAgent: httpsAgent,
  })

  const {data} = await response.data;
  const {data : flightLocationsData} = await flightLocations.data;
  const {data : averageUserRatingsData} = await averageRating.data;
  return{
    props : {
      data,
      flightLocationsData,
      averageUserRatingsData
    }
  };
}
