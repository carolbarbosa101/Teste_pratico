<template>
  <div id="app" class="flex flex-col h-screen w-full" style="background-color: #eeeeee">
    <!-- Header -->
    <div class="sticky top-0 bg-light border-b-2 border-dark">
      <div class="container mx-auto flex justify-between py-2 w-full items-center">
        <div class="flex justify-start align-middle">
          <a href="#" class="flex align-middle p-2 text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="pl-1">Home</span>
          </a>
          <a href="#" class="flex align-middle p-2 text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Notifications</span>
          </a>
          <a href="#" class="flex align-middle p-2 text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            <span class="pl-1">Discover</span>
          </a>
          <a href="#" class="flex align-middle p-2 text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="pl-1">Me</span>
          </a>
        </div>

        <div class="flex justify-center align-middle">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758 c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582 c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322 c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419 c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963 c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41 c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>
        </div>

        <div class="flex justify-end items-center">
          <div class="mr-2 w-48 text-dark border border-dark flex items-center px-2 rounded-3xl h-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" class="boder-none w-36 bg-none" placeholder="Search Twitter" />
          </div>

          <a href="#" class="text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </a>

          <a href="#" class="text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>

          <a href="#" class="text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main -->
    <div class="container mx-auto flex justify-between gap-6 pt-1">
      <!-- Sidebar -->
      <div class="flex flex-col w-64">
        
        <div class="flex bg-light rounded-2xl border mb-3 p-2">
          <div class=" flex bg-light rounded-2xl border mb-1 ">
          <img
            class="w-20 h-20 rounded-full "  
            src="https://randomuser.me/api/portraits/women/72.jpg"/>
            <div class="items-center">
                <strong class="flex mr-2">Carol Barbosa</strong>
                <span class="flex text-xs">@carolbarbosa</span>
              </div>
          </div>
          <div class="bg-light"> </div>
        </div>

        <div class="bg-light rounded-2xl border p-2">
          <h3>Trends</h3> </br>
          <h3>#Loremipsumdolosit</h3>  </br>
          <h3>#Loremipsumdolor</h3>  </br>
          <h3>#Loremipsumd</h3>  </br>
          <h3>#Loremipsum</h3>  </br>
        </div>
      </div>

      <!-- Section -->
      <div class="bg-light flex-1 flex flex-col rounded-2xl border">
        <div class="p-2 border-b">
          <h2 class="text-dark">Tweets</h2>
        </div>

        <!-- Twitters -->
        <div class="flex flex-col">

          <!-- start component -->
          <div class="flex w-full p-2 border-b">
             <img
            class="w-20 h-20 rounded-full "  
            src="https://pbs.twimg.com/profile_images/1457798174005891072/IEhtt7bf_400x400.jpg"/>
            <div class="flex flex-1 flex-col pl-3">
              <div class="flex items-center">
                <strong class="mr-2">Mel</strong> 
                <span class="text-xs">@MellinaKong</span>
              </div>
              <p class="text-sm">What a wholesome commercial and announcement video</p>
            <div class="flex justify-between items-center py-2">
              <button>Expand</button>
                
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
               <button>Reply</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <button>Retweet</button>
              </span>
              <span class="flex items-center text-dark">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <button>Favorite</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <button>More</button>
              </span>
            </div>
            </div>
          </div><!-- end component -->

          <!-- start component -->
          <div class="flex w-full p-2 border-b">
             <img
            class="w-20 h-20 rounded-full "  
            src="https://randomuser.me/api/portraits/women/68.jpg"/>
            <div class="flex flex-1 flex-col pl-3">
              <div class="flex items-center">
                <strong class="mr-2">STÉFANI</strong> 
                <span class="text-xs">@stefanibays</span>
              </div>
              <p class="text-sm">Estava olhando a agenda aqui e vi que tenho
                conteúdo fit para postar hoje e amanhã, ela tá fitness sim! Haha</p>
            <div class="flex justify-between items-center py-2">
              <span>Expand</span>

              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
               <button>Reply</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <button>Retweet</button>
              </span>
              <span class="flex items-center text-dark">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <button>Favorite</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <button>More</button>
              </span>
            </div>
            </div>
          </div><!-- end component -->


          <!-- start component -->
          <div class="flex w-full p-2 border-b">
             <img
            class="w-20 h-20 rounded-full "  
            src="https://pbs.twimg.com/profile_images/1445595246524391428/Tv3hF0-n_400x400.jpg"/>
            <div class="flex flex-1 flex-col pl-3">
              <div class="flex items-center">
                <strong class="mr-2">BAD MI Mirella</strong> 
                <span class="text-xs">@mirellasierra_</span>
              </div>
              <p class="text-sm">Sofri hoje kkkk emoção dói demais véi</p>
            <div class="flex justify-between items-center py-2">
              <span>Expand</span>

             <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
               <button>Reply</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <button>Retweet</button>
              </span>
              <span class="flex items-center text-dark">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <button>Favorite</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <button>More</button>
              </span>
            </div>
            </div>
          </div><!-- end component -->


          <!-- start component -->
          <div class="flex w-full p-2 border-b">
             <img
            class="w-20 h-20 rounded-full "  
            src="https://pbs.twimg.com/profile_images/1350113126725918721/RJ1dP5Dv_400x400.jpg"/>
            <div class="flex flex-1 flex-col pl-3">
              <div class="flex items-center">
                <strong class="mr-2">gabsfreindorfer</strong> 
                <span class="text-xs">@gabsfreindorfer</span>
              </div>
              <p class="text-sm">minha foto sem o dog não é foto de vdd Smiling face with tear</p>
               <!-- <img class="flex items-center" src="https://pbs.twimg.com/media/FDhyT8WUYAISk7Y?format=jpg"> </img> -->
            <div class="flex justify-between items-center py-2">
              <span>Expand</span>

              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
               <button>Reply</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <button>Retweet</button>
              </span>
              <span class="flex items-center text-dark">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <button>Favorite</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <button>More</button>
              </span>
            </div>
            </div>
          </div><!-- end component -->

          <!-- start component -->
          <div class="flex w-full p-2 border-b">
             <img
            class="w-20 h-20 rounded-full "  
            src="https://pbs.twimg.com/profile_images/1455673494293856265/-p17kj4q_400x400.jpg"/>
            <div class="flex flex-1 flex-col pl-3">
              <div class="flex items-center">
                <strong class="mr-2">Luísa</strong> 
                <span class="text-xs">@luisasonza</span>
              </div>
              <p class="text-sm">Vcs acham que eu vou de que hj p minha festa? (Mudei de ideia vou sim de fantasia)</p>
            <div class="flex justify-between items-center py-2">
              <span>Expand</span>

              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
               <button>Reply</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <button>Retweet</button>
              </span>
              <span class="flex items-center text-dark">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <button>Favorite</button>
              </span>
              <span class="flex items-center text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <button>More</button>
              </span>
            </div>
            </div>
          </div><!-- end component -->

        </div>
      </div>

      <!-- Section two -->
      <div class="flex flex-col w-64">
        <div class="bg-light rounded-2xl border mb-3 p-2">
          <h3>Who to follow</h3>
        </div>

        <div class="bg-light rounded-2xl border p-2">
          <h3>2014 Twitter About Help Terms privacy
             Cookies Ads info Brand blog Status
            Apps Jobs Advertise Business Media Developes</h3>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      tabs: [
      ],
      id: 'home',
      dropdown: false,
      trending: [  ],
      friends: [
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy'},
        {src: 'monk.jpg', name: 'Adrian Monk', handle: '@detective:)'},
        {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock'}
      ],
      following: [
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
        {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
      ],
      tweets: [
        {content: 'It is so nice outside!'}
      ],
      tweet: {content: ''}
    }
  },
  methods: {
    addNewTweet () {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push (newTweet)
    }
  }
}
</script>