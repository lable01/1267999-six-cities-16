import CartItem from 'components/offer-components/cart-item';
import Sort from 'components/sort';
import Map from 'components/map';
import { OfferItemModel } from 'types/offer-item';
import { useAppSelector } from 'hooks/store';
import { offersSelectors } from 'store/slices/offers';
import useSortedOffers from 'hooks/use-sorted-offers';

type MainFullProps = {
  currentOffers: OfferItemModel[];
  onCardHover?: (offerId: string | null) => void;
  activeOfferId: string | null;
};

const MainFull = ({
  currentOffers,
  onCardHover,
  activeOfferId,
}: MainFullProps) => {
  const currentCity = useAppSelector(offersSelectors.city);
  const currentSort = useAppSelector(offersSelectors.sort);
  const sortedOffers = useSortedOffers(currentOffers, currentSort);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {currentOffers.length} places to stay in {currentCity}
        </b>
        <Sort current={currentSort} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) => (
            <CartItem
              key={offer.id}
              onCardHover={onCardHover}
              offer={offer}
              typeCard="cities"
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          offers={currentOffers}
          activeOfferId={activeOfferId}
          className="cities__map"
        />
      </div>
    </div>
  );
};

export default MainFull;
