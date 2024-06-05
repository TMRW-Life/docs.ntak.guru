import {cn} from "@/lib/utils";

const MAPPINGS = {
  "GET": {
    wrapper: "bg-blue-500/10 border-blue-500",
    method: "bg-blue-500 text-white/95",
    path: ""
  },
  "POST": {
    wrapper: "bg-teal-500/10 border-teal-500",
    method: "bg-teal-500 text-white/95",
    path: ""
  },
  "PUT": {
    wrapper: "bg-amber-500/10 border-amber-500",
    method: "bg-amber-500 text-white/95",
    path: ""
  },
  "PATCH": {
    wrapper: "bg-amber-500/10 border-amber-500",
    method: "bg-amber-500 text-white/95",
    path: ""
  },
  "DELETE": {
    wrapper: "bg-red-500/10 border-red-500",
    method: "bg-red-500 text-white/95",
    path: ""
  },
} as const

export default function Protocol({method, path}: {method: keyof typeof MAPPINGS, path: string}) {
  const attrs = MAPPINGS[method]

  return (
    <div className={cn("py-1 px-1 flex items-center gap-4 rounded-xl mt-4 border-2", attrs.wrapper)}>
      <span className={cn("h-full w-28 py-1 text-center rounded-lg font-bold uppercase", attrs.method)}>{method}</span>
      <span className={cn("font-semibold font-mono", attrs.path)}>{path}</span>
    </div>
  )
}