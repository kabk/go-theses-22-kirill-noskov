import * as Dialog from '@radix-ui/react-dialog';
import { styled, dialogShow, overlayShow } from 'stitches.config'


const StyledOverlay = styled(Dialog.Overlay, {
    backgroundColor: '$gray',
    backgroundImage: "radial-gradient(rgba(0,0,0, 0.25) 1px, transparent 0)",
    backgroundSize: "5px 5px",
    backgroundPosition: "-19px -19px",
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
});

const StyledContent = styled(Dialog.Content, {
    backgroundColor: '$background',
    dropShadow: true,
    border: '1px solid $gray',
    borderRadius: '$1',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '$14',
    '@bp1': {
        width: 'calc(100% - $2)'
    },
    overflow: 'hidden',
    maxHeight: '85vh',
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${dialogShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});

const StyledRoot = Dialog.Root
const StyledTrigger = Dialog.Trigger
const StyledPortal = Dialog.Portal
const StyledTitle = Dialog.Title
const StyledDescription = Dialog.Description
export {
    StyledContent as DialogContent,
    StyledOverlay as DialogOverlay,
    StyledRoot as DialogRoot,
    StyledTrigger as DialogTrigger,
    StyledPortal as DialogPortal,
    StyledTitle as DialogTitle,
    StyledDescription as DialogDescription,
}