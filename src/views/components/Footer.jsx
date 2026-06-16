import useSiteInfoController from '../../controllers/useSiteInfoController';

export default function Footer() {
  const { name, phone, serviceArea, tagline } = useSiteInfoController();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <h3>{name}</h3>
          <p>{tagline}</p>
        </div>
        <div>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Service Area:</strong> {serviceArea}
          </p>
        </div>
      </div>
      <p className="copyright">
        Copyright {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
