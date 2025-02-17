import { HeadingSize, HeadingTag } from "./heading";

export type CardDefaultProps = {
    heading: string,
    headingTag: 'div' | HeadingTag,
    headingSize: HeadingSize,
    contentPosition: 'top' | 'bottom',
    icon: string,
    background: string,
    backgroundClasses: string,
    wrapperClasses: string,
}
