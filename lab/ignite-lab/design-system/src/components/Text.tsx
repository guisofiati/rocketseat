import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
    size?: "sm" | "md" | "lg"; // ?: = optional in typescript
    children: ReactNode; // qualquer coisa (componente, tag, etc)
    asChild?: boolean;
    className?: string; // adições de className
}

// caso nao definido, o size padrao sera md (sm)
export function Text({ size = "md", children, asChild, className }: TextProps) {
    // permite que o user escolha qual tag utilizar o Text, por padrao é a span
    const Comp = asChild ? Slot : "span";

    return (
        <Comp
            className={clsx(
                "text-gray-100 font-sans",
                {
                    "text-xs": size === "sm", // pegando nossas confs do tailwind
                    "text-sm": size === "md",
                    "text-md": size === "lg",
                },
                className
            )}
        >
            {children}
        </Comp>
    );
}
