import Head from "next/head"
import Link from "next/link"

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <html lang='en-US' />
      </Head>
      <Link href='/'>
        <a href='/'>Home</a>
      </Link>
      <h1>Welcome to the contact page</h1>
    </div>
  )
}

export default Contact
