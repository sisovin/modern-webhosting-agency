import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn, getProgressClass } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1 transition-all",
          getProgressClass(value)
        )}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
