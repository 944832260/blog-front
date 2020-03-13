import { lazy } from 'react'



const Config = [
	{
		path: '/',
		component: lazy(() => import("@components/frame/frame")),
		routesLeft: [
			{
				path: '/',
				name: "专利名称",
				exact: true,
				component: lazy(() => import("@components/home/home")),
			},{
				path: '/detail/:id',
				name: "专利名称",
				exact: true,
				component: lazy(() => import("@components/detail/detail")),
			}
		]
	},
	{
		path: "*",
		component: lazy(() => import("@components/nopath/nopath")),
		exact: true,
	},
];


export default Config;
