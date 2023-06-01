import { Suspense } from 'react';
import css from './SharedLayout.module.css'
import { Outlet, NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
function SharedLayout() {
  return (
      <div className={css.container}>
      <header className={css.page__header }>
      <nav>
          <NavLink className={css.navlink } to='/'> Home </NavLink>
        <NavLink className={css.navlink } to='/movies'> Movies </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
      </main>
    </div>
  )
}

export default SharedLayout