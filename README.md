[Next.js]
serverside routing, single page app as acting like multipage site

pages (should be in pages folder)
nested routing
dynamic routing

useRouter

getStaticProps (getting data and return it as a prop to component on server side before rendering)
props
revalidate
context

getServerSideProps
props
context

for dynamic routes
getStaticPaths

API routes allow to build api endpoints as part of the project. Should be in the ../pages/api folder. file names will be treated as routes like files in pages folder.
Any file inside the folder pages/api is mapped to /api/\* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

MongoClient
ObjectId
