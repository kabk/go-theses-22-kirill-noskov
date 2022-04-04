import { MDXProvider } from '@mdx-js/react'
import Layout from '@/design-system/Layout'
import Items from './floating.mdx'
import { Paragraph, Heading, Box } from '@/design-system/primitives'

//@ts-ignore-next-line
const ResponsiveImage = (props) => (
  <Box bc='background'>
  <img alt={props.alt} 
  loading='lazy'
  height='100%'
  width='100%'
  style={{mixBlendMode:'multiply', backdropFilter:'opacity(0.55)'}}
  src={'/thesisweb/' + props.src} />
  
 </Box>
) 
//@ts-ignore-next-line
const ResponsiveHeadingH1 = (props) => {
    return(<Heading 
      as={'h1'}
      color='text'
      size={'1'} {...props}/>)
}
//@ts-ignore-next-line
const ResponsiveHeadingH2 = (props) => {
  return(<Heading 
    color='text'
    as={'h2'}
    css={{ margin: '$6 0 0 0' }}
    size={'2'} {...props}/>)
}
//@ts-ignore-next-line
const ResponsiveHeadingH3 = (props) => {
  return(<Heading 
    color='text'
    as={'h3'}
    size={'3'} {...props}/>)
}
//@ts-ignore-next-line
const ResponsiveHeadingH4 = (props) => {
  return(<Heading 
    color='text'
    as={'h4'}
    size={'4'} {...props}/>)
}
//@ts-ignore-next-line
const ResponsiveHeadingH5 = (props) => {
  return(<Heading 
    color='text'
    as={'h5'}
    size={'5'} {...props}/>)
}

//@ts-ignore-next-line
const StyledBlock = (props) => {
  return(<Box

  css={{ml:'$3', '@bp1':{ml:'$2'}, my:'$2', borderLeft:'1px solid $textForeground', paddingLeft:'$3'}}
    as={'div'}
    {...props}/>)
}

const components = {
  img: ResponsiveImage,
  h1: ResponsiveHeadingH1,
  h2: ResponsiveHeadingH2,
  h3: ResponsiveHeadingH3,
  h4: ResponsiveHeadingH4,
  h5: ResponsiveHeadingH5,
  p: Paragraph,
  blockquote: StyledBlock,
}

export default function Post() {
  return (
      <Layout>
      <Box mt='6' mb='6' pb='8' >
      {/* @ts-ignore-next-line */}
      <MDXProvider components={components}>
      <Items/>
      </MDXProvider>
      </Box>
    </Layout>
  )
}
