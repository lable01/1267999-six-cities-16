type TOfferBadgeProps = {
  isPremium: boolean;
  className: 'place-card' | 'offer';
};

const OfferBadge = ({ isPremium, className }: TOfferBadgeProps) => {
  if (!isPremium) return null;

  return (
    <div className={`${className}__mark`}>
      <span>Premium</span>
    </div>
  );
};

export default OfferBadge;
