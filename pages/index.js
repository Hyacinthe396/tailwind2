
import Head from 'next/head'

export default function Home() {
  return (
    // <div class="w-screen md:w-screen lg:w-full">
    //   {/* <Head>
    //     <title>APP..........</title>
    //     <link rel="icon" href="/../drinkkk.PNG" />
    //   </Head>

    //   <div class="mt-4 p-4 rounded bg-blue-300 text-center w-500px h-500px">
    //     <p class="text-blue-600">This should be very blue</p>
    //   </div>

    //   <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-10 text-white font-bold text-lg text-center w-500px h-500px">
    //     Hello there! My name is Hyacinthe and we are learning TailwindCSS </div>

    //     <div>
    //       <img  class="w-500px h-500px" src="../drinkkk.PNG" />
    //       <img  class="w-500px h-500px" src="../shop1.png" />
    //     </div> */}


    // </div>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:w-48 mt-10" src="../shop1.png" alt="Man looking at item at a store" />
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
        </div>
      </div>
    </div>


  )
}