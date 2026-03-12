export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <h3>Gordon's Gutters</h3>
          <p>Reliable gutter cleaning and protection for local homeowners.</p>
        </div>
        <div>
          <p>
            <strong>Phone:</strong> (208) 240-7852
          </p>
          <p>
            <strong>Service Area:</strong> South Eastern Idaho
          </p>
        </div>
      </div>
      <p className="copyright">
        Copyright {new Date().getFullYear()} Gordon's Gutters. All rights reserved.
      </p>
    </footer>
  );
}
