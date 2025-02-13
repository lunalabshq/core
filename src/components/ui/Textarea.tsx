import React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[60px] w-full rounded-md border border-main bg-primary px-3 py-2 text-secondary shadow-sm placeholder:text-tertiary focus-visible:outline-none " +
                "focus-visible:ring-1 focus-visible:ring-info disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }