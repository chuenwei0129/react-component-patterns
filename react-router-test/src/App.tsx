import { useState } from 'react'
import {
  Link,
  useLocation,
  RouterProvider,
  createBrowserRouter,
  // Outlet,
  // useOutlet,
} from 'react-router-dom'
import KeepAliveLayout, { useKeepOutlet } from './keepalive'

const Layout = () => {
  const { pathname } = useLocation()
  // 等价于 <Outlet />
  // const outletElement = useOutlet()
  const outletElement = useKeepOutlet()

  return (
    <div>
      <div>当前路由: {pathname}</div>
      {/* <Outlet /> */}
      {outletElement}
    </div>
  )
}

const Aaa = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>加一</button>
      </p>
      <Link to="/bbb">去 Bbb 页面</Link>
      <br />
      <Link to="/ccc">去 Ccc 页面</Link>
    </div>
  )
}

const Bbb = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>加一</button>
      </p>
      <Link to="/">去首页</Link>
    </div>
  )
}

const Ccc = () => {
  return (
    <div>
      <p>ccc</p>
      <Link to="/">去首面</Link>
    </div>
  )
}

const routes = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '',
        element: <Aaa></Aaa>,
      },
      {
        path: '/bbb',
        element: <Bbb></Bbb>,
      },
      {
        path: '/ccc',
        element: <Ccc></Ccc>,
      },
    ],
  },
]

const App = () => {
  return (
    <KeepAliveLayout keepPaths={[/bbb/, '/']}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </KeepAliveLayout>
  )
}

export default App
