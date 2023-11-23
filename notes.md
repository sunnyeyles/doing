# Next.js

- SPA(Single Page Applications) : Has problems with crawlers, if there's too much content it might take longer to render
- SSR(Server Side Rendering) : Init render happens on the server which fixes the SPA problem, the page will not become interactive immediately, the browser needs to wait till it completes downloading the JS bundle to add interactivity
- RSC(React Server Side Components)

- Every page has to render in a layout.tsx
- Templates re-render across routes, layouts don't
- (folderName) - A folder like this is just for organisational purposes and does not affect the url
- Dynamic routing:
- With a blog application, you might not know what should be rendered, the routing could look like this: `app/blog/[slug]/page.js`, here [slug] is the dynamic segment representing the individual post/s. The 'slug' is passed as a parameterto the page component, and can be used to fetch and display relevant post data.

```// Inside app/blog/[slug]/page.js
export default async function Post({ params }) {
  return <div>{params.slug}</div>;
}

```

- When creating folders, add an underscore(\_folder) to make them private, OR put in root
- Server components fetch data on the server. Because these components have no client side JS, they don't fall into the render logic / loop that client components do and instead they work more like regular js functions. This means we can just async / await a server component to get data.

```
const getContent = async () => {
  const res = await fetch('https://cms.com/......')
	const content = await res.json()
	return cotent.homePage
}

const HomePage = async () => {
  const content = await getContent()
	return (
		<div>{content.title}</div>
	)
}

export default HomePage

```

- This entire component will be exectuted on the server every time the matching route is triggered. You can use fetch in your server side calls, it's built it as a global from Next.js. It also has advanced caching and deduping features to help keep things fast.
- Putting `'use client'` at the top of the file opts you into a client component, this turns it into a regular jsx component where you can use stuff like useState. This component is still rendered on the server(but not executed on the server), because there is a difference between server side rendering and server components
- Server side components have no javascript that takes over once it gets to the client
- revalidatePath([path])- allows you to purge cached data on demand for a specific path
- 'use client' = spa land
- You cannot import a server component into a client component, they can be rendered next to each other though:

```
<ExampleClientComponent>
	<ExampleServerComponent/>
</ExampleClientComponent>

```
