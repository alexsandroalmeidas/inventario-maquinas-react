const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-chart-line',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cadastros',
    route: '/cadastro',
    icon: 'cil-settings',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Usuários',
        to: '/base/usuario',
        icon: 'cil-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Parâmetros',
        to: '/base/parametros',
        icon: 'cil-task'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Relatórios',
    route: '/relatorio',
    icon: 'cil-chart',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Relatório 1',
        to: '/base/relatorio1'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Relatório 2',
        to: '/base/relatorio2',
      },
    ],
  },
]

export default _nav;
