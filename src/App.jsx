import './App.css'

function App() {

  return (
    <>
  <div class="bg-white">
  <div class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <h3 class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 text-4xl text-cyan-500">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
      </span>
      August Mern Mindrisers
    </h3>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <div class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="font-bold md:mr-12"><a href="#">Blog</a></li>
        <li class="md:mr-12"><a href="#">Features</a></li>
        <li class="md:mr-12"><a href="#">Support</a></li>
        <li class="md:mr-12">
          <button class="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-whitea relative mx-auto mt-20 mb-10 max-w-screen-lg overflow-hidden rounded-t-lg py-32 text-center shadow-lg">
  <p class="text-white">Published April 4, 2022</p>
  <h1 class="mt-2 text-5xl font-bold text-white">7 rules of effective marketing</h1>
  <p class="mt-6 text-lg text-white">You're doing marketing the wrong way</p>
  <div class="mt-6 flex justify-center space-x-2">
    <button class="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">Marketing</button>
    <button class="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">Branding</button>
    <button class="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">Digital</button>
  </div>
  <img class="-z-10 absolute top-0 left-0 mt-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
</div>





<div className='flex justify-center'>
<div class="m-4 max-w-screen-lg w-full overflow-hidden rounded-xl border shadow-lg bg-amber-400">
  <div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80 ">
    
 
    <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-6 lg:w-3/5">
      <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Winter Collection</h2>
      <p class="mt-2 text-lg text-gray-700">By Luis Vuitton</p>
      <p class="mt-4 mb-6 max-w-md text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio ex.</p>
      <a href="#" class="group mt-auto flex w-full max-w-xs cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition hover:bg-gray-800">
        <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold">Shop now</span>
        <svg class="flex-0 group-hover:w-6 ml-2 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>

    
    <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" loading="lazy" />
    </div>

  </div>
</div>
</div>

<section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Our featured Aroma Range</h2>
      <p class="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/b51KL2CYAFVT7VAPpnEMW.png" alt="" />
        </div>
        <div class="absolute top-0 m-1 rounded-full bg-white">
          <p class="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p>
        </div>
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#" title="" class="cursor-pointer">
                Arabian Musk
                <span class="absolute" aria-hidden="true"></span>
              </a>
            </h3>
            <div class="mt-2 flex items-center">
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
            </div>
          </div>

          <div class="text-right">
            <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
            <p class="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
          </div>
        </div>
      </article>

      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/sUgmRNIkRW2SZCLKOOfX2.png" alt="" />
        </div>
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#" title="" class="cursor-pointer">
                Albanian Essence
                <span class="absolute" aria-hidden="true"></span>
              </a>
            </h3>
            <div class="mt-2 flex items-center">
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
            </div>
          </div>

          <div class="text-right">
            <p class="text-xs font-normal sm:text-sm md:text-base">$299.00</p>
          </div>
        </div>
      </article>

      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/J573dRVtghSynx5yCis80.png" alt="" />
        </div>
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#" title="" class="cursor-pointer">
                Siberian Perfum
                <span class="absolute" aria-hidden="true"></span>
              </a>
            </h3>
            <div class="mt-2 flex items-center">
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
            </div>
          </div>

          <div class="text-right">
            <p class="text-xs font-normal sm:text-sm md:text-base">$49.00</p>
          </div>
        </div>
      </article>

      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/oZ_djoBAmHk4vgKQh41YT.png" alt="" />
        </div>
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#" title="" class="cursor-pointer">
                Danish Levoune
                <span class="absolute" aria-hidden="true"></span>
              </a>
            </h3>
            <div class="mt-2 flex items-center">
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>

              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>

              <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
            </div>
          </div>

          <div class="text-right">
            <p class="text-xs font-normal sm:text-sm md:text-base">$79.00</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>


<section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">Recent Posts</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="data:image/jpeg;base64,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" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Bags</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Bags</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUVFRUVFRUXFRUVFhcWFRUWFxUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGBAQFy0dHR0rKy0tLS0tKy0tLS0tLSstLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0rLTctNf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EADwQAAEDAgQDBwMCBQIGAwAAAAEAAhEDIQQFEjFBUWEGEyJxgZGhscHwMtEUI0Lh8WKSFVKCorLiM0NT/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAAIDAQACAgMAAAAAAAAAAQIREiExAyJBE1EEYbH/2gAMAwEAAhEDEQA/AI+Ax8th1wAqjM8VDvDspeWZe94LSCI4oGGyao+qWOBgX/Zc+M3t1v0tx4qbEN1CSgX5K8xGWGlWDCPDvK22C7PUalOwBOy3Z05vN8vs4HkVpsu7RCm4A7Ifavs9/Dt1MnlHmsrhKT7lwWNOm49Jf21afCGuKq8NUbiqjnutp4KJ2Pw4e2o5w4wPRVNTHGniKoaYEws5fPlNEz49r/Lcc2niizgFocdndMCJEwvN2MqGoX3umZx3jRN+sqX5WWdu2H+ThfncePf9vTMqzgONiLhSe02JApb3IXj+XZxUY9pmLifJbTOMzL6IPOFnLGyscppQ5jgHClUqwIDXH4Kx2CF3en3W5x+aa8NUYBuxw+FicKP1en3XXDO5TsmExvRam6WmYuueFGr+K02WlvRuKx5Nm+6DgmeIk8vujU8LPQDcnYIlECSGyQIvzN1WNW3dT8Dv5AozT4vNCwAPikf0n8lB72CFHX9LXM64mmOIp/V7/wBlEJQsXU11ZHJoHoBPzKLiqOlmpamenl+uPLK0zF5qWjS1Q8Dm1Rjw6eKi4Zhe5ek9m+yGGqUi6oZdHOFOMpMqzebZmKzQZuqnUpmLygU8Q+k12poNj9kZ2UgcU5THpm4XK7RMJVaHDVsnY+uwu8Kq8cNL4TGmXALpyumLhNrTDYrTMKJjhrupmLwbWM1SqZjzvwVwylW46S8NThHFSFEo4mFPy8NeTKzllqNcdopqLlb/APCG9Fy5/wAsX+N7PgsM1pJI3RcNhGGqXDkue3Vsj4GgWlTt0VWfZQ15n5UjspgHsBBuJspmYVg0p2V5g0WKm00D2mwPeNghY/GZATsF6Lj6jXNlU9RwjZNqy2TZc6i1zeZlZ/OMkewuqgTMkr0ZkIGOwhew24K7pqWLbEdmcGzAamNb4aQe2tMuc6JBLuIcbRteywPaXAg0iY/pQ8rwlZr+7L39210inqdoB5hsxK1VfCF7NJE2TO7rPzwmM08syvK+9FgrrHYNzKMRsFqsuyptImGxJU7F4APaRCzbtvU08kw7nOcWcwR8KqwJBLovsfqts/KSzFAAWVD2typ2CfrYRpqElreIO7t9xf0stTS43Xqtr0CRZRsPhyLvsOR/Uf2CjVM2qncx5CPlR34h7uKrVzifjKbolxGkbNbsf3QqGFIZqJc1xuJMe7UmXudMucdFhwiesqbXMOOxG/pzjkqSS9kyfGRUDXxe08DKWphpq6Otx0G/woVdzTDmuEi/+FpMDS1g4mDZujoXQJI9Pqou+lWyidW3FT8RgXPbHBBoYjx+q2OFy8vpyOIXP6b6054yV5ziD3Z0jgkbmdUbVHDyJCN2iwxZVIKrTTcBcFdZemLLlbqeNFkoc+XGSean1aDindmMOQy43CuQADsvNnleVdMZNMZnOXQNXFQMPgnG612d0wWyq/KmghejDKfx3Kuec/PUVWZatLWnimYmnoYArXNcv1kEcFHxmDMCVPllLZEzmt1nnNKsctouHiTH0yHAAbrSUsLDBbgt/XUxZw3agiq5crSlh2wEq8nJ209XbiYRDjvNRixMBXoZPru17paFIDikDQuCC5o0muESiHBiLKop1YUyjmBG91NLsY4UeSc6iQIiUajiGu6IppHggoXYKHTCOKkCIVo6NnBCfhAdlUVDxeYSh6mVMIRwUd1JNKr30Bq1cVRdssmGLaBHiYCQeN9x5W+AtUWqgzrHmi554aAGjrb959FnPqNYesJl/YbVWFOpUMBoL9IGoF0w0EyDcclcZ12Hw9GgCC/XrA1agfCGkkhthfwj1Vx2bf3jn1ZklzB/t8Uf9ysu0VI1WaG/qBls2BMEaZ2Ez7gLlc8tOuOOO9Xx41XMDRAAFo68ZPFDwGFqvOinTe+8t0glzbgFw6SQFpafZ016mmS1xdHUGdiDyuSFuss7N02vDmgt0DS0hxbA5EjeYXSfSWJnhcb2weXdgcTiKfeOpiiNy5x0uPXuwCZ89K2R7OCnhWYemZ0i7ju5xu53qTstbi8O5lM/zHQ6BBDb8eWrhxKrmA81rdrnbGIZ2KqTMrXZbgjTZpKml5CQ4sjcFTsmmO7T4OkDrcL34LFYus1zmtA4wvSe1RY6iSWyV5rgMN3lZo6pMeV3f06T7XDCzG63/wAem5Tgm902BwRn5e08FY4Gk0MaJ2CN/DzsQowxvaXLgKduqq+zOXBwvay9AxGXahBEhRqGVtp7CFd9aTXe1DUycKi7RYLQBC35oBZXtjAAC38MZzY+9/Blm0Wh7AeK02JwEgadoWYDw4auLdvZbrIGa6LSUzv48f8AaYY/ltm/+Fv5lctp/CdEi4cY7LpqR9Pila5PAldnIApWldVZCZKB5Cc1CBRWqgzXQpVDHOaoElLqKgv6WOa6zkQ4abtKz7SVKw+Mc3ippVtVqFouFW1KklWFDMQbOCM7CsqCyopwyeCyvazC6tY8j/2hbSpg6lO7bhZftJmDG1P5jSNTReLA3Fzwlc8/G8PWa7MVrPYOEn3gH6LQa+DtRaRIc25bzDm/1DyuFQ5ZRAxB07VGkCOe4Wpw+DfxDQJkEuBidxY3HRc42fg8op6++B1ue39TeNokSReLHjZWuGpNJ8LgTyiCI6QomCwYZs60zAmBJ4WEK2dhwSJJvcHa/mtSJai5w4FjWjeST6CB9VUFhV3mOFc4cSWAm95aYm/MR7eSql1jlUcymueVLSGmFUU+Y0tbdMLP4PIC2oHRxW2NFJ3CCofh3HZxCaxtZuzpVuaXRNNJTjF5K+nmFcbtlEGcO/qYfZStJTT5JxORrcypHeAsn24r0/DBWlqYZhuWrNdpcpa+CAVcbcbtMvymmYpZY8uEEQ70XpWQ4UtotEbLH4zLnU2NcHGY2V5lGKrspgm/1Uu1nTSd0eS5ULu0NUH9BXKNbaNgT0xoKdK25nuEhRijUyuq0uSihtR2MlRxZEa9AY00wtTu9S6wgQJQklcqCBGpYghRwU8FQWtDMjxusj2uvXvBZUYIHINABn1n3V0FQdq96R2I1wf9tvWVj6TpvC9snhKLqGJplrz3eoktjVA0nb9lusHi3VTIZDom5a3UOcAlYx1aajBzcBta9h9VrMG0OYCBpAAtBAPWeK5R0q00OgeJrSSBEFzRcXmQp4ZV/TrEi4hhEjjBJNwq8NDqZuNucbD+ytKRL2MqNiSAZgnxCx2tzW4zS0qby2NRsJm1+n1UGpheisxi2tpudpIcLubvB4weXJCw+Z0qlpAPIreLFVbqCG6kVfOwrXbFRauBI2utMqmClD1LfQI3CEaQQ0HKQpxpIZaVRxCY5i6U4ORAXU0F9AHcKXqSEoK+rg2ncJP4cC3BWEBMcwIK44Uclynd2uQSWSlhCa9KHICEI1JwIgqMHJWuUqwWrShBc1SqLS5Cq04MIoUrg5IQkhEED04PQUoKoMHpe8QUsoJDaiqe096QIuQ8fIKngqBnropT1H3WM/K1j6xVd3ja4zIcD7Fa7DVXt2NiTsJAvzWVzAfTlstpg2a6OpvMH3Y07eq4R2GbSbUuGjUN4ls/Yq07M1SKXdu3a5wAPKZ+5WaxGMZSsHhh4lxgeymZXiw6nqYTVdqIJaw6Z4eI2+VuM1sWkE6YsbeijYzs8x9xvzChZb3r7PbUYBHiJbz6HdSWZg5riA6QCfqtztioD8txFH/43kjkbolDO3ttVpkdRcK8o5i136k6rhmVNgFWVfQzOjU2cPJGfhWu2ULHdnmuuBB5ixVY/D4mj+h+of8AK791dmlvUy88FGfhiOCDhe0ZFq1MsPPce4VvhsdTqCWuBV2Kg0uiE+hyWgqYZp4KJUwXJEUpolCe0q2qUCOCA6mgrSSmlxU91AIL8NyVEXUuRDQK5A0JwSBqe0IhAUoKQtSxCKl4StFkSuJUIFTMO7UIWbP2s/pEKZKmVqKiuVQwyuBSyuQOCXSkaU8lUJCBmLJpu9PqpLUPFNJY4Di1w+LKWdLPWAx9UAlpJtx5+yvsPl3f0KdRjjYaS0EgHTLeHkq7uKTxGkNJ6mL8RJWj7HN0NdSJmDPv0915o71WUMAzSYaGnjbdS8oxpwtQBwPc1PC6Nmngen+VoK2EpkkwL8TaUI5Ywgs3a4H8+FdImY/BVA3vKNV5gatJMtc3oOCjET4habx53hH7NYk0nfw9QyP/AKyfp1T8xw/dvIG1i3yj95HouuDnkAyqRupFDGEbGFEJTdK2xtf0M2P9QlTmVqdTksqHkIlOv6Iq+xOVNdwCpcVkABlstPNqlUMyc3qFYUc1abOEKaGY7zFUtj3g5GxUrC9pmE6agLHddvdaR1CnUEiPRV2MyJruR8wp2dC0cUx4sQUr8O08FmsR2ecwksc5h6GR7JtPF4ulExUb7FXZpe1MDyUWphSOCHhu0lMmKgNM/wCofdWtHEMeJa4Eeaop+7K5XegcguRGUYU/Uo1MosqoJKcENqcEBAErXEFM1JyCxaQRKhYlsLqFSCpT2ghY8rfsVbnJC9Er04KFqWmTw9Pa5AlOYZVEtrgngRxUbVCUVuqgxeY4cNqOYT+lxAjkbtN+kKdkVcYeqHOLnU3DSdVg29iY6j5R+1OEOptURcaTtu24t5T7KpwGPLbTLTuIn6rzXqvRLuPUKIp1GSB7XHugBpBhgnzPxPDdY7s3nNShim0PC6i8HSYhwABi/MbeULf1sQCN/j7rpO2KiENeLsAcNjqLYPmULOKhLmE7lkGLiQT+4UurqJ1Np/8AUHj6KHmp/Rw/V9lrFnLxCaU5BAT9XVdGD9SYV2oJSEDZIRG4nmmaZTSI3UE2jiou0qww+cEWcJVBqhOGJI6po211HGU38fQptfL2O4QeizLMSFOw+ZubxkcippRMbkc8A8ciLqkqZLoP8tzqZ5A29lqcPmzDZ3h+ilOax44EKaNsd3+LFg5hjiVy1ByxnI+65BhmuMIzQUxoujNBW2TmhOCZdJF90BgnIQBXFyAshScNUEQd1A18yERlTiFLNrLpMxDWkW+VXvap7H6xMQUKvTJk8ullJ0tQD1TZ5FFd0KE9sc1UEaeq7vBPBBa4eaeXi1gqIueS6iYAlsPHpv8ABKyFZ0HW3Y7jkVtnOBlpG4I9CFisVgqtO5bb3BC4/Sd7dMPFxl1Sm9zHRD2mZk+Rj0JsvQ6VQlgOrlaAvHcBi+7eOXXgvUsPUJYInaVnFu9rDvTaABIF+B9lHzXZlr+KePLYqXh6w0XGw3UDMj4Wkzck8eQ9l0x9c8vEKV10zSOq6ZXRzE9UpKZZNL0BR5pZ9ULUE4O6oHO6IZSyuKBjmpW1HDjK4pCEUUYpvEwpNDEkXY4jyP2UByCaYBn729lDbStzepH9J6rlnv4mOH1SpoD1J7XKNTfPD880RriVUEnqnNumBPagULkkJSAgUkLg4cE0jmkH5CA1LEhpvsbKacVG3K34FWtEdVNwz5GniPp0WbGpUau6bwfJR3iYgGPVWTmXUSrIMb+v2ViIJeRwPyuFSNxbrKc4HmfkeybF+vKb2/N1Q8Pk/pEdZSuohxIIsRI6cwhGn8+hUbMqYNIsLi0vgA7CxmDBEzHPgsZzprC9q7Nclpk2qMDjsNTQb8IWqyfE0+7pscdTgwAxsCBB+ZWNw+CZQHgA1Hb+WwknnOkunrKmUKtNoBdVAIE6Rdx9BdcZ146tz3o0gGzQSSed5ge6jYrGtftMNO/nH7KkyntpgXjuqpdrBkDQ6SIFw2J4K2xRoFjH0SfEXS0hzCIiJa6CF1nrGXgLyP8AISgIOscbea7vbxt1XRyEaAnNhC7zomPqIJEDkmhR6dSRaJ9/lPbUjfylAYOXT1Qy9OlA8OB3901xTSuZUO3DzQcSmuJXEpkoOM9Fydr8/Y/slQQKbjafp+6kMd0+yrWONzJM2gTKkAG15jyVRP12Sh6jNJ8utk9hnmoo0gpQ8bIfoUgMbBAaVxKADzn7JTH4CgLqXU3OmR83QdcbQuDzESI/OiC1LjE7eij16IIufVDp4gAAAW9UR52PHaCR8Siq54GwM+xF+sIbrTvYfkKbXqQN4PnCoa/aDD06j24qli2BpIDhTa1pjch1QiQeEDqiLFhJiBM7Qbn0UXOsXTpNLH6n1i+mxtEahV1P8QLfCQZAeNtMgguaVTY7tng3U6jcN/GMrFpNKoe7dLxswtpk+F2xsfoq/sLi8RTxTqtbDVnCpTINV9N0tcLg63CwNwecidksNrvLsvr1A/8AiO4a2nLXinUqCoDDXaHFphkMdcBx3iys8BhKRE0WFrSf1d27xHkAYJ9U7J+zlPCOq4upWeBVcavdPqANa6oZDiCQHOkwJn+kTKXD16maBwMswlLWK7mnxVYBIpsY67dTSwklgLYgOk2xwjfOxjdLmVMXWpU6zXUw7+a+m1hbV1s1Uiy47p1N1g7/AJQeMLT9mMwdXoCo9raZBLIazQCWgE25+K8dLKV2aznDPohmDw9WrXqgGpS1VH6TGkd9XqyAwNAEzEbDgq7LXVHFxe5ggBtOnTEUWMBNmNi8kyXG59gteM+r1tQRv+6Q1ht6zA4KE2tFzxtpmR6cvJHZVF955crWVQameA+iceon4QW3vfqU4Db1vJ+iBXH8E/snt+fn1CQO4Tx5LiT68OH0QcJjYHlBj5TgShSBbjxuPz/CRxvM+c+tuioMHn+0JHEoTJ2semyVoncCfSet4QO1/wCPJIHyb29yPiTySDoJ4XN/lDqCePxt8IDF3+pco2h/Mf7f/ZKgF3wBEcuA3+ye2p+cIUN74iWg8Znpy4otFwvEelx7SiJM8ZPlE/Cc1x5m6Ex/CPonR0/wgNJSAnmIHRNbHXillFPPn9UhcmrvWyBZn8BTWOnz5SZ9QuBvKQiLwPt6oJAqtiCSPKfgIlOo3mTbja3qq9zRvJ859OaUOgyPsfhBNru3EX4fdZA4bG03k0sUabJ/RDqg6CariR6WWtdUH+mLCTv7BQsSQbTE8Qs7VUDMceQWtrUy7gC1tOTylzo+FZZfnWYUwCctpuf/APp3rHz1AFW3oqrM8qbWBY/jvtfjPmqrD9mKdO7H1Wwdm1HN+iqNDnWIzDGjTXy2i+GuFNwinUpl39Tarq/QSNjCJ2IyjMsHWD4pspugVmvqglzAeApBw1iTBkctlV0sM9sRiMT5fxFeP/MfRdUwxcYe51S21RznztEB5KbNPTa+c4alLDiKVOZOgOpNdPPQ0TKy9fGYFrO6wrXl/hHeGnVgAEEjvKsWO3hsqDDUuQAAsdIAPD0UoYcWMC3Ex6+SmlHpHmBfh9rWsnueTxgbRBHn5obdDRJ2k8ZF/X4RRWHp7enXgqg1J821TwI6+6MR5+U/XioZqxJBEC8Amelp5IzKw4wD5W90BWt6+f4EhHkAev0n83S06k8bfvy5pTTCo4N6+gPukD4G5+6E4+e0XkD+6cI524/uge/lJukk3v57X/uue8ASCOmwQ3nr+eQQEvH+P2Sjz9lHp1Dw9NvbZdUcYlseVx8oJIqxafhcoLsZBgxPkUqIg4Z5JNz7o2H3Pr9SuXIidSFp6j7rqe3r9wuXIrmHZPfx8x91y5FOP57pCuXIA0rl3mguaJmL3v7JVyANJ5vc/jQiUjIvf9K5coLGh+hQ3fU3XLlFIf0s8yomNPDglXJCgtMkzffdRsK4mZM3+4XLlUMpVDqFztzPJS6V3QbiT9Vy5AZg8PkBHynMHgeeILr8dyuXIH1P1eh+ydSFnecenJcuQSKI38h9ESbnySLkD2C3olK5cqGRMzfbe6A1oBECPwpFyA8bJKjRGwSrkAKlFs/pHsEi5cjL/9k=" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Pants</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Pants</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="data:image/jpeg;base64,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" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Coding</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Shirt</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
  </div>
</section>




<section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/neZnfwBHi0f-4TivjA6BS.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del> 
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button> 
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/exH8iOZwkjQekSALkXCZb.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/86WxAQqZpR5CqrhSPKwNv.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/0RV9Zy3daoeMbDmTOOMKm.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/1DULzCtZvWhr5q5DDT6Ac.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/neZnfwBHi0f-4TivjA6BS.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/POklWwmmu0AtDZe5tNh9j.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
    </div>
  </div>
</section>


    </>
  )
}

export default App
