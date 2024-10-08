import MainLayout from 'layouts/main-layout';
import Header from 'components/header-components/header';
import Footer from 'components/footer';
import { ClassName, ClassNamePages } from 'const/const.ts';
import { Helmet } from 'react-helmet-async';
import FavoritesBlock from 'components/favorite-page-component/favorites-block';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import clsx from 'clsx';
import FavoritesEmpty from 'components/favorite-page-component/favorites-empty';
import { favoritesSelectors } from 'store/slices/favorites.ts';
import { groupOffersByCity } from 'utils/function.ts';
import { useMemo, useEffect } from 'react';
import { fetchFavorites } from 'store/thunks/favorites.ts';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(favoritesSelectors.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favoriteOffersByCity = useMemo(
    () => groupOffersByCity(favoriteOffers),
    [favoriteOffers],
  );

  const hasFavorites = useMemo(
    () => Object.keys(favoriteOffersByCity).length > 0,
    [favoriteOffersByCity],
  );

  const classNameLayoutFavorites = hasFavorites
    ? ClassName.Favorites
    : ClassName.FavoritesEmpty;

  const classNameMainFavorites = hasFavorites
    ? ''
    : ClassNamePages.FavoritesEmpty;

  return (
    <MainLayout header={<Header />} className={classNameLayoutFavorites}>
      <Helmet>
        <title>
          Favorite page six cities service for travelers - official website
        </title>
      </Helmet>
      <main
        className={clsx(
          'page__main page__main--favorites',
          classNameMainFavorites,
        )}
      >
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <FavoritesBlock favoriteOffersByCity={favoriteOffersByCity} />
          ) : (
            <FavoritesEmpty />
          )}
        </div>
      </main>
      <Footer />
    </MainLayout>
  );
};

export default FavoritesPage;
