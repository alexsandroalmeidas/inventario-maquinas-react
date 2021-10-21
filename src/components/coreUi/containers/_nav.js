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
        name: 'Perfis',
        to: '/cadastro/listagemPerfis',
        // icon: 'cil-user-follow',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Clientes',
        to: '/cadastro/listagemClientes',
        // icon: 'cil-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Usuários',
        to: '/cadastro/listagemUsuarios',
        // icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Parâmetros',
        to: '/cadastro/parametros',
        // icon: 'cil-task'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cliente',
    route: '/cliente',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Importação Clientes',
        to: '/cadastro/importacaoClientes',
        // icon: 'cil-user-follow',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Consulta',
        to: '/cadastro/listagemClientes',
        // icon: 'cil-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Consulta HW e SF',
        to: '/cadastro/listagemUsuarios',
        // icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Consulta Automação/Módulo',
        to: '/cadastro/parametros',
        // icon: 'cil-task'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Consulta Arquivos Log',
        to: '/cadastro/parametros',
        // icon: 'cil-task'
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
