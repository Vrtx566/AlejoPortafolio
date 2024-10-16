const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon flex justify-center items-center">
                    <a href="https://github.com/Vrtx566" target="_blank" rel="noopener noreferrer" >
                        <img src="/assets/github.svg" alt="github" className="w-full h-full"  />
                    </a>
                </div>
                <div className="social-icon flex justify-center items-center">
                    <a href="https://www.instagram.com/alejo_gomez_56/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-full h-full" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;