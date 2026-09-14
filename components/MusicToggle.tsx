"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tombol musik latar. Mati secara default — pengunjung yang memilih menyalakan.
 * File audio: /public/assets/music.mp3
 */
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      // Browser menolak pemutaran — biarkan tombol tetap mati.
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/assets/music.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
        title={playing ? "Matikan musik" : "Nyalakan musik"}
        className="fixed bottom-[20px] right-[20px] z-50 flex size-[44px] cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-md transition-colors hover:bg-neutral-100 lg:size-[52px]"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[22px]">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" strokeLinejoin="round" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[22px]">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" strokeLinejoin="round" />
            <path d="m16 9 5 6M21 9l-5 6" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </>
  );
}
