// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// // import { cn } from "src/lib/utils"
// import { cn } from "../../lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  variant?: string;
  asChild?: boolean;
  colorScheme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-white-0 tracking-[1.08px] uppercase text-[180x] font-semibold border-white-a700_33 border border-solid min-w-[324px] lg:text-[15px]",
  {
    variants: {
      outline: {
        white_A700_33: "border-white-a700_33 border border-solid text-white-0",
      },
      size: {
        xs: "h-[56px] px-[34px] text-[18px]",
      },
      shape: {
        square: "rounded-[0px]",
      },
    },
    defaultVariants: {},
  }
);
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = "white_A700_33",
      variant = "outline",
      shape,
      size = "xs",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ [variant]: colorScheme, size, shape, className })
        )}
        ref={ref}
        {...props}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
