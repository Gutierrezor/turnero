import { createRouter, createWebHistory } from 'vue-router';
import PedirTurno from '../views/PedirTurno.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue'; 
import UltimosTurnosPage from '../views/UltimosTurnosPage.vue';
import StudyPage from '@/views/StudyPage.vue'; 
import TableComponent from '@/components/TableComponent.vue'; 
import ReceptionPage from '../views/ReceptionPage.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: PedirTurno,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/ultimos-turnos',
    name: 'UltimosTurnos',
    component: UltimosTurnosPage,
  },
  {
    path: '/study-page',
    name: 'StudyPage',
    component: StudyPage,
  },
  {
    path: '/study/:studyName',
    name: 'TableComponent',
    component: TableComponent,
    props: true,
  },
  {
    path: '/reception',
    name: 'ReceptionPage',
    component: ReceptionPage,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
