"use client"

import { useEffect, useRef } from "react"

type DemoVideoProps = {
  src: string
  poster?: string
  caption?: string
}

export default function DemoVideo({ src, poster, caption }: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="mx-auto w-full max-w-3xl">
      <video
        ref={ref}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        poster={poster}
        className="w-full rounded-xl border border-gray-200 shadow-md"
      >
        <source src={src} type="video/mp4" />
        Your browser doesn&apos;t support embedded video.
      </video>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
