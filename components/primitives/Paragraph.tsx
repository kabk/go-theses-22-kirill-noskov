import React from 'react';
import Text from '@/design-system/primitives/Text';
import { VariantProps, CSS } from 'stitches.config';
import merge from 'lodash.merge';

const DEFAULT_TAG = 'p';

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
type ParagraphSizeVariants = '5' | '6';
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
    ParagraphVariants & { css?: CSS; as?: any };


const Paragraph = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, ParagraphProps>(
    (props, forwardedRef) => {
        // '6' here is the default Paragraph size variant
        const { size = '6', ...textProps } = props;

        // This is the mapping of Paragraph Variants to Text variants
        const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
            5: { '@initial': '5', '@bp2': '6' },
            6: { '@initial': '6', '@bp2': '6' },
        };

        // This is the mapping of Paragraph Variants to Text css
        const textCss: Record<ParagraphSizeVariants, CSS> = {
            5: { lineHeight: '$5', '@bp2': { lineHeight: '$6' } },
            6: { lineHeight: '$p' },
        };
        return (
            <Text
                as={DEFAULT_TAG}
                {...textProps}
                ref={forwardedRef}
                size={textSize[size]}
                css={{
                    ...merge(textCss[size], props.css),
                }}
            />
        );
    }
);

Paragraph.displayName = 'Paragraph'

export default Paragraph