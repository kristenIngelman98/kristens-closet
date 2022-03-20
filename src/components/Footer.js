import siteLogo from '../images/logo.png';

function Footer() {
    return (
      <footer className="footer">
      <img className='logo' src={siteLogo} />
          <p>add footer menu</p>
          <p>Get on the list to receive email updates on new arrivals,
          exclusive deals and 20% off your first purchase* - CHANGE Wording</p>
          <form>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
          <input type="submit" value="Subscribe" />
        </form>
      </footer>
    );
  }
  
  export default Footer;
  