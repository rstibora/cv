<svelte:head>
    <title>Radek Stibora</title>
    <meta name="description" content="Online presentation of Radek Stibora, a software engineer specialized in Python, Typescript, Docker and other technologies.">
</svelte:head>


<div class="bg-zinc-300 text-stone-800">
    <div class="sticky top-0 flex justify-between h-16 p-4 bg-inherit border-b-2 border-solid border-stone-800">
        <div class="hidden md:block">
            <a class="text-2xl mx-2 hover:underline decoration-8 decoration-sharp-yellow" href="#about">about</a>
            <a class="text-2xl mx-2 hover:underline decoration-8 decoration-sharp-yellow" href="#expertise">expertise</a>
            <a class="text-2xl mx-2 hover:underline decoration-8 decoration-sharp-yellow" href="#cv">cv</a>
        </div>
        <div>
            <a class="text-2xl mx-2 hover:underline decoration-8 decoration-sharp-yellow" href="mailto:hello@radekstibora.cz">email</a>
            <a class="text-2xl mx-2 hover:underline decoration-8 decoration-sharp-yellow" href="https://github.com/rstibora">github</a>
        </div>
    </div>

    <div class="flex justify-center flex-wrap bg-sharp-yellow text-zinc-300 pt-2">
        <div class="text-8xl lg:text-9xl font-semibold">Radek</div>
        <div class="text-8xl lg:text-9xl font-semibold mx-6">Stibora</div>
    </div>

    <div class="flex justify-center text-3xl font-semibold mb-40 bg-sharp-yellow text-zinc-300 py-2">
        software engineer
    </div>

    <div class="flex flex-col items-center mx-4">
        <div class="w-full lg:w-[60rem]">
            <div id="about" class="my-12">
                <div class="text-3xl font-semibold pt-16 -mt-16 border-b-2 border-solid border-stone-800">about</div>
                <span class="text-lg">Hello, I am a software engineer with passion for perpetual learning and improvement.</span>
            </div>

            <div id="expertise" class="my-12">
                <div class="text-3xl font-semibold pt-16 -mt-16 border-b-2 border-solid border-stone-800">expertise</div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h2 class="lg:basis-52">Strong Knowledge</h2>
                    <div class="">
                        Python, Typescript, Docker, Svelte, REST
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h2 class="lg:basis-52">Some Knowledge</h2>
                    <div class="">
                        C++, CUDA, C#, Postgres, GraphQL, Vue, Redis
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h2 class="lg:basis-52">Played With</h2>
                    <div class="">
                        Rust, Scala
                    </div>
                </div>
            </div>

            <div id="cv" class="my-12">
                <div class="text-3xl font-semibold pt-16 -mt-16 border-b-2 border-solid border-stone-800">cv</div>
                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h2 class="lg:basis-52 shrink-0">Past Experience</h2>
                    <div>
                        <div class="my-2 first-of-type:my-0">
                            <div class=""><span class="">Seznam.cz a.s.</span> | Programmer</div>
                            <div class="my-2">12/2022 (terminated after two weeks due to budget constraints)</div>
                            <ul>
                                <li class="ml-4">
                                    CDN Development
                                    <ul>
                                        <li class="ml-4">Python</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="my-2 first-of-type:my-0">
                            <div class=""><span class="">ThermoFisher Scientific</span> | Software Engineer</div>
                            <div class="my-2">8/2017 - 4/2022</div>
                            <ul>
                                <li class="ml-4">
                                    Development of various electron microscope alignment algorithms (1/2019 - 4/2022)
                                    <ul>
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
                                    <ul>
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

                        <div class="my-2 first-of-type:my-0">
                            <div class=""><span class="">Systek SWHW s.r.o.</span> | Programmer</div>
                            <div class="my-2">10/2016 - 8/2017</div>
                            <ul>
                                <li class="ml-4">
                                    Development of a back-end server for a public transport dispatcher web application.
                                    <ul>
                                        <li class="ml-4">C++, UNIX</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row w-full text-lg my-2">
                    <h2 class="lg:basis-52 shrink-0">Education</h2>
                    <div class="">
                        <div class=""><span class="">Masaryk University, Faculty of Informatics</span> | Brno, Czech Republic</div>
                        <div class="my-2">2011 - 2016</div>
                        <ul>
                            <li class="ml-4">
                                Masters, Computer Graphics, 2016
                                <ul>
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