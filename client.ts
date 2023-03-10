import { createClient } from 'next-sanity'

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  apiVersion: process.env.NEXT_PUBLIC_SANITY_VERSION,
  useCdn: true // `false` if you want to ensure fresh data
})