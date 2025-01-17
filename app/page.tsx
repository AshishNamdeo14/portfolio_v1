'use client'
import Spotlight from "./components/spotlight";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [activeLink, setActiveLink] = useState('#about'); 
    const links = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
      ];
  return (
    <>
      <Spotlight/>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">Ashish Namdeo</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Full-Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I craft intuitive, accessible, beautifully designed solutions
                for the modern web.
              </p>
              <nav
      className="nav hidden lg:block"
      aria-label="In-page jump links"
    >
      <ul className="mt-16 w-max">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={() => setActiveLink(href)}
              className={`group flex items-center py-3 ${
                activeLink === href ? 'text-slate-200' : 'text-slate-500'
              }`}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all 
                  group-hover:w-16 group-hover:bg-slate-200 
                  group-focus-visible:w-16 group-focus-visible:bg-slate-200 
                  ${
                    activeLink === href
                      ? 'w-16 bg-slate-200'
                      : ''
                  }`}
              />
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest 
                  group-hover:text-slate-200 
                  group-focus-visible:text-slate-200 
                  ${
                    activeLink === href ? 'text-slate-200' : 'text-slate-500'
                  }`}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
            </div>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social Media"
            >
              <li className="mr-5 shrink-0 text-xs">
                <Link
                  className="block hover:text-slate-200"
                  target="_blank"
                  href="https://github.com/AshishNamdeo14"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in Link new tab)"
                  title="Github"
                >
                  <span className="sr-only">Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </Link>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <Link
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/ashishnamdeo16"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in Link new tab)"
                  title="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </Link>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <Link
                  className="block hover:text-slate-200"
                  href="https://instagram.com/ashish_namdeoo"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram (opens in Link new tab)"
                  title="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  I&apos;m an engineer with Link passion for creating intuitive,
                  accessible, and beautifully crafted user interfaces that
                  seamlessly blend thoughtful design with robust engineering. I
                  thrive at the intersection of design and development, where I
                  can build experiences that not only look stunning but are also
                  meticulously optimized for performance and usability.
                </p>
                <p className="mb-4">
                  Currently, I&apos;m Link Graduate Student at{" "}
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://w2.csun.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="CSUN (opens in Link new tab)"
                  >
                    California State University, Northridge
                  </Link>
                  , specializing in Computer Engineering. With Link strong focus on
                  computer science disciplines such as AI, machine learning, and
                  software development. My journey has been shaped by Link
                  combination of professional experience, academic achievements,
                  online certifications, and hands-on learning through building
                  impactful projects.
                </p>
                <p className="mb-4">
                  In the past, I’ve had the chance to work on Link variety of
                  exciting projects, from building dashboards and CMS platforms
                  at{" "}
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.loginextsolutions.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LogiNext Solutions (opens in Link new tab)"
                  >
                    LogiNext Solutions
                  </Link>
                  I love creating accessible, high-performing web experiences
                  and enjoy working across both front-end and back-end
                  technologies like ReactJS, NodeJS, and MongoDB. Beyond coding,
                  I&apos;ve always been passionate about sharing knowledge—whether
                  it&apos;s as Link{" "}
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.csun.edu/counseling/peer-education"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="CSUN Peer Educator (opens in Link new tab)"
                  >
                    CSUN Peer Educator{" "}
                  </Link>{" "}
                  or through my involvement in the{" "}
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.csunentrepreneurs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="CSUN Entrepreneurs Club (opens in Link new tab)"
                  >
                    CSUN Entrepreneurs Club
                  </Link>{" "}
                  , where I find joy in collaborating with others and exploring
                  new ideas.
                </p>
                <p>
                  In my spare time, I love immersing myself in nature through
                  hiking, diving into captivating books, spending quality time
                  with my friends, cooking, and creating joyful moments with my
                  three playful pet dogs.
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="Oct 2021 to Aug 2024"
                      >
                        2021 to 2024
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <Link
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                              href="https://www.loginextsolutions.com/"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Software Engineer at LogiNext Solutions (opens in Link new tab)"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Engineer <span> · </span>
                                <span className="inline-block">
                                  LogiNext Solutions
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Build and maintained critical components used to
                          construct LogiNext&apos;s frontend as well as Backend,
                          across the whole product. Work closely with
                          cross-functional teams, including developers,
                          designers, and product managers, to implement and
                          advocate for best practices in web accessibility.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Angular
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              WordPress
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              PHP
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              NextJs
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Storybook
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Java
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
            </h2>
           
            </div>
            <div>
                <ul className="group/list">
                <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3><Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" target="_blank" rel="noreferrer noopener" href="https://www.crazym416.com/" aria-label="Build Link Gaming Blog (opens in Link new tab)">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>Build Link Gaming Blog - Crazym416
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                    </span>
                    </Link></h3>
                    <p className="mt-2 text-sm leading-normal"> CrazyM416 is Link comprehensive blog dedicated to PUBG Mobile enthusiasts and tech-savvy individuals. It offers the latest news, tips, and tricks related to PUBG Mobile, including updates on new features like Payload 2.0 and vehicle customization options.</p>
                    </div>
                    <Image alt="Build Link Gaming Blog App for Pubg Players" loading="lazy" width={200} height={48} decoding="async" data-nimg='1' className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color:'transparent'}} src="/projects/crazym416.webp"/>
                    </div>
                </li>
                </ul>
            </div>
            </section>
          </main>
        </div>
      </div>
      </>
  );
}
