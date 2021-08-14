import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";

const recordings = [
  {
    id: 1,
    name: "Oxford Brookes University A vs Brown University, USA in the Temple Challenge Cup.",
    year: "2014",
    description:
      "Well there we go - the culmination of a lot of years work, attempts, and the end of the project. After 10 years of rowing, 9 years of racing at Henley Royal Regatta, and 4 years trying for the Temple Challenge Cup (for university 8's), we / I finally won the Temple!",
    cox: "Rory Copus",
    imageSrc: "https://www.youtube.com/embed/RDFsB7XwCzY",
  },
  {
    id: 2,
    name: "Cox Recording - 2011 Rowing World Champs Final LM8+ - Australia",
    year: "2011",
    description:
      "Lightweight men's eight race from the rowing world champs 2011 with coxing call instead of tv commentary.",
    cox: "David Webster",
    imageSrc:
      "https://www.youtube.com/embed/G2ZrDIb6NYI?rel=0&list=PLmDfLlmOxeoFeoSdoLkc-QuwmvBEM1FL9",
  },
  {
    id: 3,
    name: "Katelin Snyder || University of Washington vs. California Duel 2009 (Coxswain Recording)",
    year: "2009",
    description:
      "Coxswain recording of Katelin Snyder coxing the University of Washington's varsity 8+ in the 2009 duel race against California.",
    cox: "Katelin Snyder",
    imageSrc:
      "https://www.youtube.com/embed/OOjDkWFvPPE?rel=0&list=PLmDfLlmOxeoFeoSdoLkc-QuwmvBEM1FL9",
  },
  {
    id: 4,
    name: "HRR 2009 QF - Abingdon vs. Belmont Hill",
    year: "2009",
    description:
      "Probably one my most epic races so far - the Quarter final of Henley Royal Regatta 2009, against Belmont Hill School, USA. So epic in fact, my lips went numb during it.",
    cox: "Rory Copus",
    imageSrc:
      "https://www.youtube.com/embed/cM8KfnOYLRQ?rel=0&list=PLmDfLlmOxeoFeoSdoLkc-QuwmvBEM1FL9",
  },
  {
    id: 5,
    name: "HoRR 2012 - Recording Overlay",
    year: "2012",
    description:
      "Here it is - some video, a few photos, and a recording. Taking a 2nd VIII to the highest placing second boat at the Head of the River Race, and inside the top 10 at 9th position. It was a fantastic row, passing 5 other crews, by an unprecedented crew. I must say, it was the most fun I've had racing the Tideway, and am very proud of the 8 other guys that helped me accomplish it. Enjoy",
    cox: "Rory Copus",
    imageSrc:
      "https://www.youtube.com/embed/qmwPP97fY4Q?rel=0&list=PLmDfLlmOxeoFeoSdoLkc-QuwmvBEM1FL9",
  },
  {
    id: 6,
    name: "Ladies Plate Final 2017 - Cox Recording",
    year: "2017",
    description:
      "I'm still learning, and don't plan on stopping anytime soon. Improving is half the fun in coxing. I was bloody nervous, some of our plan may not have worked, so I just tried to keep our rhythm long and strong.",
    cox: "Harry Brightmore",
    imageSrc: "https://www.youtube.com/embed/qmwPP97fY4Q",
  },
  {
    id: 7,
    name: "Brookes 8+ @ Metropolitan Regatta 2013",
    year: "2013",
    description: "",
    cox: "Rory Copus",
    imageSrc: "https://www.youtube.com/embed/sADK5l0La6c",
  },
  {
    id: 8,
    name: "The 108th Washington v California Dual Cox Tape",
    year: "2019",
    description:
      "Washington vs. California Dual • Montlake Cut, Seattle • April 20, 2019",
    cox: "Adam Gold",
    imageSrc: "https://www.youtube.com/embed/y_jsl5JqmWU",
  },
  {
    id: 9,
    name: "U23 World Championship Cox recording - U.S. 8+ 5:22.480",
    year: "2018",
    description: "",
    cox: "Rielly Milne",
    imageSrc: "https://www.youtube.com/embed/nM0IXm_ixC8",
  },
  {
    id: 10,
    name: "UCSD Varsity 8 WIRA Grand Final 2015 Coxswain Recording",
    year: "2015",
    description: "",
    cox: "Cat Sheffler",
    imageSrc: "https://www.youtube.com/embed/J0wvtdfwy88",
  },
];

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredRecordings = useMemo(
    () =>
      recordings.filter(
        (recording) =>
          recording.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          recording.cox.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  return (
    <div>
      <Head>
        <title>Coxing Recordings | Get inspired</title>
        <meta
          name="description"
          content="A collection of coxing recordings. Useful as a training aid and a great place to pick up new calls to add to
  your repertoire."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Coxing Recordings
            </h2>
            <p className="block text-3xl font-extrabold tracking-tight text-pink-600 sm:text-4xl">
              Get inspired
            </p>
            <form className="mt-4 mb-6 sm:flex">
              <label htmlFor="blade-search" className="sr-only">
                Search
              </label>
              <input
                id="blade-search"
                name="email"
                type="search"
                className="w-full mb-4 sm:mb-0 sm:mr-4 px-5 py-3 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 sm:max-w-xs border-gray-300 rounded-md"
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
              />
              <p className="self-end">
                Showing <strong>{filteredRecordings.length}</strong> of{" "}
                <strong>{recordings.length}</strong> recordings
              </p>
            </form>
            <h2 className="sr-only">Recordings</h2>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {filteredRecordings.map((recording) => (
                <div
                  key={recording.id}
                  className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 group-hover:opacity-75">
                    <iframe
                      width="560"
                      height="315"
                      src={recording.imageSrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex-1 p-4 space-y-2 flex flex-col">
                    <h3 className="text-sm font-medium text-gray-900">
                      {recording.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {recording.description}
                    </p>
                    <div className="flex-1 flex flex-col justify-end">
                      <p className="text-sm italic text-gray-500">
                        {recording.cox}
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        {recording.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021 John Walley.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
