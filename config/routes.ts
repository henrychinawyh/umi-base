export default [
    { path: '/login', exact:true, component: '@/pages/index' },
    {
        path:'/',redirect:'/first'
    },
    {
        path: '/', 
        component:'@/layouts/BaseLayouts',
        // wrappers:[
        //     '@/wrappers/auth'
        // ],
        // title:'umi',
        routes:[
            {
                path:'/first',
                component:'@/pages/First',
                // title:'首页' document.title
            }
        ]
    }
];