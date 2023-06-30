import { INextHead } from '@types'
import Head from 'next/head'

export function NextHead({ title, description, metaTitle }: INextHead) {
  return (
    <Head>
      <title>{`Leadster: ${title}`}</title>
      <meta content={description} name="description" />
      <meta content={metaTitle} name="title" />
      <meta content="pt-br" httpEquiv="Content-Language" />
    </Head>
  )
}
