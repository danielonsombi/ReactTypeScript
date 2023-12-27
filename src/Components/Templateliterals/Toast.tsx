import { off } from "process"

/**
 * position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top"
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

//To achieve the value commented above, we must find a way to combine the two. Hence the use of template literals:
//The type below will find all posible combinations for the position property. The valid combinations can be accessed from any other parent component that would like to pass them down to the children components.
type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}


export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification position - { position }</div>
}