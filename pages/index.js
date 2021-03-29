
import Head from 'next/head'

export default function Home() {
  return (
    <div class="w-16 md:w-32 lg:w-48">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="mt-4 p-4 rounded bg-blue-300 text-center w-500 h-500">
        <p class="text-blue-600">This should be very blue</p>
      </div>

      <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-10 text-white font-bold text-lg text-center w-500 h-500">
        Hello there! My name is Hyacinthe and we are learning TailwindCSS </div>

        <div>
          <img  class="w-500 h-500" src="../drinkkk.PNG" />
          <img  class="w-500 h-500" src="../shop1.png" />
        </div>

    
    </div>
  )
}