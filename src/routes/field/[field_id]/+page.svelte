<script lang="ts">
    import Wheat from "./wheat.svelte"
    import SunBehind from "./icons/sun-behind.svelte"
    
    export let data;
</script>

<main class="max-w-5xl w-full min-h-screen">
    <!-- Live Conditions CLimate  -->
    {#if data.cropField?.currentCrop?.toLowerCase() === 'wheat'}
        <Wheat/>
    {/if}

    {data.cropField?.currentCrop}
    <div class="max-w-96 flex flex-col gap-y-12 items-center p-4 border rounded-xl">
        <div class="flex flex-col items-center">
            <SunBehind/>
            <div class="flex gap-x-2 items-center w-max mr-2 mt-6">
                <span class="text-4xl font-light">28</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="2" cy="2" r="1.5"/><path d="M13.5 1.84a6 6 0 1 0-2 11.66a6 6 0 0 0 2-.34"/></g></svg>
            </div>
        </div>
    <div class="flex justify-between w-full">
        <div class="flex gap-x-4 p-2 pr-6 bg-slate-100 rounded-full">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12.217 18.692q.223-.025.35-.15q.125-.127.125-.311q0-.216-.148-.332q-.148-.116-.363-.091q-1.025.075-2.29-.64q-1.266-.714-1.566-2.39q-.05-.236-.166-.353t-.296-.117q-.196 0-.334.147q-.139.147-.083.44q.387 2.082 1.923 2.98q1.537.898 2.848.817M12 21q-3.002 0-5.001-2.062Q5 16.877 5 13.8q0-2.154 1.738-4.764T12 3.308q3.525 3.117 5.262 5.728Q19 11.646 19 13.8q0 3.077-1.999 5.138Q15.001 21 12 21"/></svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xl/6 font-bold">45%</span>
            <span>Humidity</span>
          </div>
        </div>
        <div class="flex gap-x-4 p-2 pr-6 bg-slate-100 rounded-full">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256"><path fill="currentColor" d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"/></svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xl/6 font-bold">6 km / h</span>
            <span>Wind</span>
          </div>
        </div>
      </div>
      </div>
</main>