"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import {cn} from "@/lib/utils"


const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogClose = DialogPrimitive.Close

interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

const DialogOverlay = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Overlay>, DialogProps>(({ className, ...props }, ref) => {
    return (
        <DialogPrimitive.Overlay
            ref={ref}
            className={cn(
                "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                className
            )}
            {...props}
        />
    )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}

const DialogContent = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Content>, DialogContentProps>(({ className, children, ...props }, ref) => {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay />
            <DialogPrimitive.Content
                className={cn(
                    "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-main bg-primary p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-md",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
                <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-primary data-[state=open]:text-muted-foreground text-secondary hover:text-white">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "flex flex-col space-y-1.5 text-center sm:text-left text-primary",
                className
            )}
            {...props}
        />
    )
}
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                className
            )}
            {...props}
        />
    )
}
DialogFooter.displayName = "DialogFooter"

interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

const DialogTitle = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Title>, DialogTitleProps>(({ className, ...props }, ref) => {
    return (
        <DialogPrimitive.Title
            className={cn(
                "text-md leading-none tracking-tight",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
DialogTitle.displayName = DialogPrimitive.Title.displayName

interface DialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

const DialogDescription = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Description>, DialogDescriptionProps>(({ className, ...props }, ref) => {
    return (
        <DialogPrimitive.Description
            className={cn(
                "text-sm text-muted-foreground text-secondary",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    Dialog,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
}