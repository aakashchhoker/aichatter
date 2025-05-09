import * as React from "react"
import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"

const Typography = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
))
Typography.displayName = "Typography"

Typography.propTypes = {
  className: PropTypes.string
}

const TypographyH1 = React.forwardRef(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
    {...props}
  />
))
TypographyH1.displayName = "TypographyH1"

TypographyH1.propTypes = {
  className: PropTypes.string
}

const TypographyH2 = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
    {...props}
  />
))
TypographyH2.displayName = "TypographyH2"

TypographyH2.propTypes = {
  className: PropTypes.string
}

const TypographyH3 = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
))
TypographyH3.displayName = "TypographyH3"

TypographyH3.propTypes = {
  className: PropTypes.string
}

const TypographyH4 = React.forwardRef(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
))
TypographyH4.displayName = "TypographyH4"

TypographyH4.propTypes = {
  className: PropTypes.string
}

const TypographyP = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
))
TypographyP.displayName = "TypographyP"

TypographyP.propTypes = {
  className: PropTypes.string
}

const TypographyBlockquote = React.forwardRef(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800",
      className
    )}
    {...props}
  />
))
TypographyBlockquote.displayName = "TypographyBlockquote"

TypographyBlockquote.propTypes = {
  className: PropTypes.string
}

const TypographyList = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
    {...props}
  />
))
TypographyList.displayName = "TypographyList"

TypographyList.propTypes = {
  className: PropTypes.string
}

const TypographyInlineCode = React.forwardRef(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900",
      className
    )}
    {...props}
  />
))
TypographyInlineCode.displayName = "TypographyInlineCode"

TypographyInlineCode.propTypes = {
  className: PropTypes.string
}

const TypographyLead = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xl text-slate-700", className)}
    {...props}
  />
))
TypographyLead.displayName = "TypographyLead"

TypographyLead.propTypes = {
  className: PropTypes.string
}

const TypographyLarge = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-lg font-semibold text-slate-900", className)}
    {...props}
  />
))
TypographyLarge.displayName = "TypographyLarge"

TypographyLarge.propTypes = {
  className: PropTypes.string
}

const TypographySmall = React.forwardRef(({ className, ...props }, ref) => (
  <small
    ref={ref}
    className={cn("text-sm font-medium leading-none", className)}
    {...props}
  />
))
TypographySmall.displayName = "TypographySmall"

TypographySmall.propTypes = {
  className: PropTypes.string
}

const TypographyMuted = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500", className)}
    {...props}
  />
))
TypographyMuted.displayName = "TypographyMuted"

TypographyMuted.propTypes = {
  className: PropTypes.string
}

export {
  Typography,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} 