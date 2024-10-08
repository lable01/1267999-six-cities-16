import MainLayout from 'layouts/main-layout';
import Header from 'components/header-components/header';
import { ClassName } from 'const/const.ts';
import { Helmet } from 'react-helmet-async';
import LoginForm from 'components/login-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <MainLayout header={<Header withNav={false} />} className={ClassName.Login}>
      <Helmet>
        <title>Login six cities service for travelers - official website</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
};

export default LoginPage;
