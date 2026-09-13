"use client";

import { useEffect, useRef } from "react";

/**
 * Musik latar tanpa tombol.
 * Browser memblokir autoplay bersuara, jadi pemutaran dimulai
 * pada interaksi pertama pengunjung (klik / scroll / tekan tombol).
 * File audio: /public/assets/music.mp3
 */
export default function AutoMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      audio.play().catch(() => {
        // Masih ditolak — biarkan diam.
      });
      cleanup();
    };

    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;

    function cleanup() {
      for (const e of events) {
        window.removeEventListener(e, start);
      }
    }

    for (const e of events) {
      window.addEventListener(e, start, { once: true, passive: true });
    }

    // Coba langsung, kalau-kalau browser mengizinkan.
    audio.play().then(
      () => {
        started = true;
        cleanup();
      },
      () => {}
    );

    return cleanup;
  }, []);

  return <audio ref={audioRef} src="/assets/music.mp3" loop preload="auto" />;
}
