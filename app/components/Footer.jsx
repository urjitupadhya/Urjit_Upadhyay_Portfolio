export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">© <span>{year}</span> Urjit Upadhyay. Crafted with <i className="las la-heart text-danger"></i>.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons d-flex justify-content-center justify-content-md-end gap-2">
              <a href="https://www.linkedin.com/in/urjit-upadhyay-049428236" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="lab la-linkedin-in" /></a>
              <a href="https://github.com/urjitupadhya" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="lab la-github" /></a>
              <a href="https://leetcode.com/u/UrjitUpadhyay/" target="_blank" rel="noreferrer" aria-label="LeetCode"><i className="las la-code" /></a>
              <a href="https://instagram.com/urjitupadhyay" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="lab la-instagram" /></a>
              <a href="mailto:gm4175urjitupadhyay@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><i className="las la-envelope" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
