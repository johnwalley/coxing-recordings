import { useMemo, useState } from "react";

interface Recording {
  id: string;
  name: string;
  year: string;
  description: string;
  cox: string;
  imageSrc: string;
}

export default function Recordings({ recordings }: { recordings: Recording[] }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredRecordings = useMemo(
    () =>
      recordings
        .sort((a, b) => +b.year - +a.year)
        .filter(
          (recording) =>
            recording.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            recording.description.toLowerCase().includes(searchValue.toLowerCase()) ||
            recording.cox.toLowerCase().includes(searchValue.toLowerCase()) ||
            recording.year.toLowerCase().includes(searchValue.toLowerCase())
        ),
    [searchValue]
  );

  const filteredIds = useMemo(() => new Set(filteredRecordings.map(r => r.id)), [filteredRecordings]);

  return (
    <>
      <h2 className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Coxing Recordings
      </h2>
      <p className="block text-3xl font-extrabold tracking-tight text-pink-600 sm:text-4xl">
        Get inspired
      </p>
      <form className="mt-4 mb-6 sm:flex">
        <label htmlFor="recording-search" className="sr-only">
          Search
        </label>
        <input
          id="recording-search"
          name="search"
          type="search"
          className="w-full mb-4 sm:mb-0 sm:mr-4 px-5 py-3 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 sm:max-w-xs border border-gray-300 rounded-md"
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
        {recordings.map((recording) => (
          <div
            key={recording.id}
            className={`group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden ${filteredIds.has(recording.id) ? '' : 'hidden'}`}
          >
            <div className="aspect-video bg-gray-200 group-hover:opacity-75">
              <iframe
                width="100%"
                height="100%"
                src={recording.imageSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900">
                {recording.name}
              </h3>
              <p className="text-sm text-gray-500">{recording.description}</p>
              <div className="flex-1 flex flex-col justify-end">
                <p className="text-sm italic text-gray-500">{recording.cox}</p>
                <p className="text-base font-medium text-gray-900">
                  {recording.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}