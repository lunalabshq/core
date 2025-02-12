"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

const Slider = React.forwardRef<React.ComponentRef<typeof SliderPrimitive.Root>, SliderProps>(({ className, ...props }, ref) => {
    return (
        <SliderPrimitive.Root
            className={cn(
                "relative flex w-full touch-none select-none items-center",
                className
            )}
            ref={ref}
            {...props}
        >
            <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-tertiary">
                <SliderPrimitive.Range className="absolute h-full bg-white" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
                className="block h-5 w-5 rounded-full border-2 border-main/50 bg-white
            transition-colors disabled:pointer-events-none disabled:opacity-50 focus:outline-0" />
        </SliderPrimitive.Root>
    )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }