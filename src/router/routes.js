const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
]

export default routes


// index.html -> pai

// <ul> li tela 1 / li tela 2
// tela1.html / <a> volta
// tela2.html / <a> volta