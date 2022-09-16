import { InputHTMLAttributes } from "react";

// passar todas as props que um input nativo tem
// nao passar ter q ficar passando atrib. por atrib. ex: props.placeholder, props.type ...
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        />
    );
}
