<svelte:head>
    <title>Radek Stibora | Software Engineer</title>
    <meta
        name="description"
        content="Online presentation of Radek Stibora, a software engineer specialized in Python, Typescript, Docker and other technologies."
    >
</svelte:head>


<div class="bg-zinc-300 text-stone-800">
    <div class="sticky top-0 flex justify-between h-16 p-2 py-4 lg:p-4 bg-inherit border-b-2 border-solid border-stone-800 z-10">
        <div class="hidden md:block">
            <a class="text-2xl mx-2 hover:underline decoration-[16px] underline-offset-[-8px] decoration-sharp-yellow text-decoration-skip-none" href="#about">about</a>
            <a class="text-2xl mx-2 hover:underline decoration-[16px] underline-offset-[-8px] decoration-sharp-yellow text-decoration-skip-none" href="#expertise">expertise</a>
            <a class="text-2xl mx-2 hover:underline decoration-[16px] underline-offset-[-8px] decoration-sharp-yellow text-decoration-skip-none" href="#cv">cv</a>
        </div>
        <div>
            <a
                href="mailto:hello@radekstibora.cz"
                class="text-2xl mx-2 hover:underline decoration-[16px] underline-offset-[-8px] decoration-sharp-yellow text-decoration-skip-none"
            >
                email
            </a>
            <a 
                href="https://github.com/rstibora"
                class="text-2xl mx-2 hover:underline decoration-[16px] underline-offset-[-8px] decoration-sharp-yellow text-decoration-skip-none"
            >
                github
            </a>
        </div>
    </div>

    <div class="flex justify-center bg-sharp-yellow text-zinc-300">
        <div class="flex flex-row justify-center lg:justify-between w-[60rem] pt-8 pb-4">
            <div class="flex flex-col">
                <div class="text-[105px] lg:text-[115px] leading-none font-bold first-letter:ml-[-0.04em] text-center">
                    <h1 class="">Radek Stibora</h1>
                </div>
                <div class="text-2xl font-bold text-center md:text-left tracking-wide upper">
                    <h2>software engineer</h2>
                </div>
                <div class="flex justify-center my-4">
                    <picture>
                        <source srcset="portrait.webp" type="image/webp">
                        <source srcset="portrait.png" type="image/png">
                        <img
                            src="portrait.png"
                            alt="Portrait of Radek Stibora."
                            class="md:hidden w-40 h-40 object-cover border-solid border-2 rounded-full saturate-0 brightness-95 contrast-75"
                        >
                    </picture>
                </div>
            </div>
            <picture>
                <source srcset="portrait.webp" type="image/webp">
                <source srcset="portrait.png" type="image/png">
                <img
                    src="portrait.png"
                    alt="Portrait of Radek Stibora."
                    class="hidden md:block w-40 h-40 object-cover border-solid border-2 rounded-full saturate-0 brightness-95 contrast-75"
                >
            </picture>
        </div>
    </div>

    <div class="sticky top-16 w-full bg-sharp-yellow h-1" />


    <div class="flex flex-col items-center mx-4">
        <div class="w-full lg:w-[60rem]">
            <div id="about" class="my-12">
                <div class="text-3xl font-semibold pt-16 -mt-16 border-b-2 border-solid border-stone-800">
                    <h3>about</h3>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <div class="hidden lg:block lg:basis-52 shrink-0" />
                    <div class="text-lg">
                        I am a software engineer with passion for perpetual learning and improvement.<br /><br />
                        I believe that fundamental knowledge and underlaying principles are more important than the actual programming language/fancy framework/tool used.<br /><br />
                        Code wise, I always strive to produce artifacts that are easy to understand, robust, architecturally sound and as efficient as possible.
                    </div>
                </div>
            </div>

            <div id="expertise" class="my-12">
                <div class="text-3xl font-semibold pt-16 -mt-16 border-b-2 border-solid border-stone-800">
                    <h3>expertise</h3>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <div class="lg:basis-52 shrink-0 font-semibold">strong</div>
                    <div class="">
                        Python, Typescript, Docker, Svelte
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <div class="lg:basis-52 shrink-0 font-semibold">mediocre</div>
                    <div class="">
                        C++, CUDA, C#, Postgres, GraphQL, Vue
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <div class="lg:basis-52 shrink-0 font-semibold">"played with"</div>
                    <div class="">
                        Rust, Scala, Redis
                    </div>
                </div>
            </div>

            <div id="cv" class="my-12">
                <div class="flex justify-between pt-16 -mt-16 border-b-2 border-solid border-stone-800">
                    <div class="text-3xl font-semibold ">
                        <h3>cv</h3>
                    </div>
                    <div class="flex flex-col-reverse">
                        <a
                            href="cv.pdf"
                            class="text-lg hover:underline decoration-[8px] underline-offset-[-4px] decoration-sharp-yellow text-decoration-skip-none"
                            download
                        >
                            download
                        </a>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h4 class="lg:basis-52 shrink-0 font-semibold">past experience</h4>
                    <div>
                        <div class="my-4 first-of-type:my-0">
                            <div class="border-b-2 border-solid border-stone-800"><span class="font-semibold">Seznam.cz a.s.</span> | Programmer</div>
                            <div class="my-2">12/2022 (terminated after two weeks due to budget constraints)</div>
                            <ul class="list-disc">
                                <li class="ml-4">
                                    CDN Development
                                    <ul class="list-disc">
                                        <li class="ml-4">Python</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="my-4 first-of-type:my-0">
                            <div class="border-b-2 border-solid border-stone-800"><span class="font-semibold">ThermoFisher Scientific</span> | Software Engineer</div>
                            <div class="my-2">8/2017 - 4/2022</div>
                            <ul class="list-disc">
                                <li class="ml-4">
                                    Development of electron microscope algorithms, apps and frameworks (1/2019 - 4/2022)
                                    <ul class="list-disc">
                                        <li class="ml-4">
                                            Cooperation within a diverse (as in specialization wise) team developing
                                            alignment algorithms for various parts of electron microscopes.
                                        </li>
                                        <li class="ml-4">
                                            Complete software-wise oversight over development of a user-facing plugin/product.
                                        </li>
                                        <li class="ml-4">
                                            Tip toes into product ownership.
                                        </li>
                                        <li class="ml-4">
                                            Python, C++, Windows
                                        </li>
                                    </ul>
                                </li>
                                <li class="ml-4">
                                    Development of computed tomography algorithms (8/2017 - 12/2018)
                                    <ul class="list-disc">
                                        <li class="ml-4">
                                            Highly parallel algorithms
                                        </li>
                                        <li class="ml-4">
                                            C++, CUDA, UNIX
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="my-4 first-of-type:my-0">
                            <div class="border-b-2 border-solid border-stone-800"><span class="font-semibold">Systek SWHW s.r.o.</span> | Programmer</div>
                            <div class="my-2">10/2016 - 8/2017</div>
                            <ul class="list-disc">
                                <li class="ml-4">
                                    Development of a back-end server for a public transport dispatcher web application.
                                    <ul class="list-disc">
                                        <li class="ml-4">C++, UNIX</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h4 class="lg:basis-52 shrink-0 font-semibold">education</h4>
                    <div class="">
                        <div class="border-b-2 border-solid border-stone-800"><span class="font-semibold">Masaryk University, Faculty of Informatics</span> | Brno, Czech Republic</div>
                        <div class="my-2">2011 - 2016</div>
                        <ul class="list-disc">
                            <li class="ml-4">
                                Masters, Computer Graphics, 2016
                                <ul class="list-disc">
                                    <li class="ml-4">Dean’s Award for final thesis (Building of SBVH on Graphical Hardware)</li>
                                    <li class="ml-4">Participation in FI Dean’s Programme and Rector’s Programme projects (implementation, comparison and development of ray tracing acceleration structures)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>